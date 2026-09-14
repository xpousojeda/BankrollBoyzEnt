const TABS = {
  merch: { name: 'Merch', fields: ['name', 'email', 'phone', 'productId', 'item', 'size', 'variant', 'quantity', 'notes'] },
  booking: { name: 'Booking', fields: ['name', 'contact', 'eventType', 'eventDate', 'location', 'capacity', 'budget', 'message'] },
  mixtape: { name: 'Mixtape', fields: ['email'] }
};
function doPost(e) {
  try {
    const p = e && e.parameter ? e.parameter : {};
    if (String(p.company || '').trim()) return jsonResponse({ success: true });
    const type = String(p.formType || '');
    if (!Object.prototype.hasOwnProperty.call(TABS, type)) throw new Error('Invalid form');
    const config = TABS[type];
    const data = {};
    config.fields.forEach(key => {
      data[key] = String(p[key] || '').trim();
      if (data[key].length > (key === 'notes' || key === 'message' ? 3000 : 300)) throw new Error('Field too long');
    });
    const id = String(p.requestId || '');
    if (!/^[a-zA-Z0-9-]{10,100}$/.test(id)) throw new Error('Invalid request id');
    validateSubmission(type, data);
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      if (!spreadsheet) throw new Error('Bind this script to a spreadsheet');
      const sheet = spreadsheet.getSheetByName(config.name) || spreadsheet.insertSheet(config.name);
      const headers = ['Timestamp', 'source', 'requestId'].concat(config.fields);
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(headers);
        sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
        sheet.setFrozenRows(1);
      } else {
        const existing = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
        if (existing.join('|') !== headers.join('|')) throw new Error('Unexpected sheet headers');
      }
      const count = sheet.getLastRow();
      if (count > 1 && sheet.getRange(2, 3, count - 1, 1).createTextFinder(id).matchEntireCell(true).findNext()) {
        return jsonResponse({ success: true, duplicate: true });
      }
      sheet.appendRow([new Date(), type, id].concat(config.fields.map(key => safeCell(data[key]))));
      SpreadsheetApp.flush();
    } finally { lock.releaseLock(); }
    return jsonResponse({ success: true });
  } catch (error) {
    console.error(String(error.message));
    return jsonResponse({ success: false, error: 'Unable to save. Check your details or contact Exo319 directly.' });
  }
}

function validateSubmission(type, data) {
  const email = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const phone = value => /^\+?[\d\s().-]+$/.test(value) && value.replace(/\D/g, '').length >= 10 && value.replace(/\D/g, '').length <= 15;
  const integer = (value, max) => /^\d+$/.test(value) && Number(value) >= 1 && Number(value) <= max;
  const required = {
    mixtape: ['email'],
    merch: ['name', 'email', 'productId', 'item', 'size', 'variant', 'quantity'],
    booking: ['name', 'contact', 'eventType', 'eventDate', 'location', 'budget', 'message']
  }[type];
  if (required.some(key => !data[key])) throw new Error('Missing required field');
  if (type !== 'booking' && !email(data.email)) throw new Error('Invalid email');
  if (type === 'merch') {
    if (!/^[a-z0-9-]{1,80}$/.test(data.productId) || data.size.length > 32 || data.variant.length > 64) throw new Error('Invalid product details');
    if (!integer(data.quantity, 20) || (data.phone && !phone(data.phone))) throw new Error('Invalid quantity or phone');
  }
  if (type === 'booking') {
    if (!email(data.contact) && !phone(data.contact)) throw new Error('Invalid contact');
    if (!['show', 'feature', 'studio', 'other'].includes(data.eventType)) throw new Error('Invalid event type');
    const date = new Date(data.eventDate + 'T12:00:00Z');
    const today = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data.eventDate) || !Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== data.eventDate || data.eventDate <= today) throw new Error('Choose a future date');
    if (data.capacity && !integer(data.capacity, 1000000)) throw new Error('Invalid capacity');
  }
}

function safeCell(value) {
  const text = String(value == null ? '' : value).trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
