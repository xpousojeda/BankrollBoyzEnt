// Deploy Code.gs, then paste the web app /exec URL here.
const FORM_ENDPOINT = 'PASTE_APPS_SCRIPT_URL_HERE';
const FORM_MODE = 'no-cors';
const CONTACT = { email: '', phone: '' };
const LINKS = { spotify: '', apple: '', youtube: '', soundcloud: '', instagram: '' };
const MUSIC_EMBED = ''; // A Spotify /embed/ URL or youtube-nocookie.com/embed/ URL.
const VIDEOS = [
  { title: 'Visual 01', url: '' },
  { title: 'Visual 02', url: '' }
];
// Proposed collection. Confirm products and prices before opening reservations.
const PRODUCTS = [
  { id: 'studio-tee', name: 'Studio tee', description: 'An everyday tee with the Exo319 mark.', price: 38, sizes: ['S', 'M', 'L', 'XL', '2XL'], variants: ['Pine', 'Cream'], image: 'images/merch-tee.svg' },
  { id: 'imprint-hoodie', name: 'Imprint hoodie', description: 'A relaxed layer carrying Bankroll Boyz Ent.', price: 68, sizes: ['S', 'M', 'L', 'XL', '2XL'], variants: ['Pine'], image: 'images/merch-hoodie.svg' },
  { id: 'seal-cap', name: 'Seal cap', description: 'A simple cap with the original Exo319 seal.', price: 26, sizes: ['One size'], variants: ['Pine', 'Cream'], image: 'images/merch-cap.svg' }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const safeURL = value => {
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : ''; } catch { return ''; }
};
const localDate = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const emailValid = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const phoneValid = value => /^\+?[\d\s().-]+$/.test(value) && value.replace(/\D/g, '').length >= 10 && value.replace(/\D/g, '').length <= 15;

function contactHTML() {
  const links = [];
  if (emailValid(CONTACT.email)) links.push(`<a href="mailto:${escapeHTML(CONTACT.email)}">${escapeHTML(CONTACT.email)}</a>`);
  if (phoneValid(CONTACT.phone)) links.push(`<a href="tel:${CONTACT.phone.replace(/[^+\d]/g, '')}">${escapeHTML(CONTACT.phone)}</a>`);
  return links.join(' · ') || 'Direct contact details have not been announced yet. Please check back.';
}

function trapFocus(event, elements) {
  if (event.key !== 'Tab' || !elements.length) return;
  const first = elements[0], last = elements[elements.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

function initNavigation() {
  const nav = $('.site-nav'), toggle = $('.nav-toggle');
  const background = [$('main'), $('footer'), $('.site-header > .wordmark')];
  function setOpen(open, returnFocus = true) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
    document.body.classList.toggle('is-locked', open);
    background.forEach(element => { element.inert = open; });
    if (!open && returnFocus) toggle.focus();
  }
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => { if (event.target.closest('a[href]') && nav.classList.contains('is-open')) setOpen(false); });
  document.addEventListener('keydown', event => {
    if (!nav.classList.contains('is-open')) return;
    if (event.key === 'Escape') setOpen(false);
    trapFocus(event, [toggle, ...$$('a[href]', nav)]);
  });
  matchMedia('(min-width: 1024px)').addEventListener('change', event => { if (event.matches) setOpen(false, false); });
}

function initLinks() {
  $$('[data-platform]').forEach(link => {
    const key = link.dataset.platform, url = safeURL(LINKS[key]);
    link.setAttribute('aria-label', `${key === 'apple' ? 'Apple Music' : key}${url ? '' : ' — coming soon'}`);
    if (!url) return;
    link.href = url;
    link.removeAttribute('aria-disabled');
    if (key === 'instagram') link.textContent = 'Instagram';
  });
  $$('[data-contact]').forEach(element => { element.innerHTML = contactHTML(); });
  $$('[data-video]').forEach(link => {
    const video = VIDEOS[Number(link.dataset.video)];
    if (!video || !safeURL(video.url)) return;
    link.href = safeURL(video.url);
    link.removeAttribute('aria-disabled');
    $('.card-caption', link).textContent = `${video.title} ↗`;
  });
  $$('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
}

function initProducts() {
  $$('[data-products]').forEach(grid => {
    grid.innerHTML = PRODUCTS.map(product => `<article class="merch-card">
      <div class="merch-card__image"><img src="${escapeHTML(product.image)}" width="1200" height="1500" loading="lazy" decoding="async" alt="${escapeHTML(product.name)} — artwork placeholder"></div>
      <div class="merch-card__details"><h3>${escapeHTML(product.name)}</h3><span class="merch-card__price">$${Number(product.price).toFixed(0)}</span></div>
      <p>${escapeHTML(product.description)}</p><p class="merch-card__sizes">${product.sizes.map(escapeHTML).join(' / ')} · Proposed price (USD)</p>
      ${grid.dataset.products === 'teaser' ? '<a class="text-link" href="merch.html">View piece ↗</a>' : `<button class="button button--outline" type="button" data-order="${escapeHTML(product.id)}" aria-label="Reserve ${escapeHTML(product.name)}">Reserve your size</button>`}
    </article>`).join('');
  });
  const dialog = $('.order-dialog');
  if (!dialog) return;
  const content = $('[data-order-content]', dialog), original = content.innerHTML;
  let trigger;
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-order]');
    if (!button) return;
    const product = PRODUCTS.find(item => item.id === button.dataset.order);
    if (!product) return;
    trigger = button;
    content.innerHTML = original;
    const form = $('form', content);
    form.elements.namedItem('item').value = product.name;
    form.dataset.productId = product.id;
    ['size', 'variant'].forEach(key => {
      const values = key === 'size' ? product.sizes : product.variants;
      form.elements[key].innerHTML = values.map(value => `<option>${escapeHTML(value)}</option>`).join('');
    });
    bindForm(form);
    dialog.showModal();
    document.body.classList.add('is-locked');
    $('.dialog-close', dialog).focus();
  });
  $('.dialog-close', dialog).addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { document.body.classList.remove('is-locked'); trigger?.focus(); });
  dialog.addEventListener('keydown', event => trapFocus(event, $$('button:not(:disabled), input:not([type="hidden"]):not([tabindex="-1"]), select, textarea, a[href]', dialog)));
}

function validateField(field) {
  if (!field.name || field.type === 'hidden' || field.name === 'company') return true;
  const value = field.value.trim();
  let error = field.required && !value ? 'Please complete this field.' : '';
  if (value && !error) {
    if (field.type === 'email' && !emailValid(value)) error = 'Enter a valid email address.';
    if (field.type === 'tel' && !phoneValid(value)) error = 'Enter a phone number with 10–15 digits.';
    if (field.name === 'contact' && !emailValid(value) && !phoneValid(value)) error = 'Enter a valid email or phone number.';
    if (field.type === 'date' && (!/^\d{4}-\d{2}-\d{2}$/.test(value) || value <= localDate(new Date()))) error = 'Choose a date after today.';
    if (field.type === 'number' && (!Number.isInteger(Number(value)) || Number(value) < Number(field.min) || Number(value) > Number(field.max))) error = `Enter a whole number from ${field.min} to ${field.max}.`;
    if (field.maxLength > 0 && value.length > field.maxLength) error = `Use ${field.maxLength} characters or fewer.`;
  }
  field.setAttribute('aria-invalid', String(Boolean(error)));
  const message = document.getElementById(`${field.id}-error`);
  if (message) message.textContent = error;
  return !error;
}

function bindForm(form) {
  if (form.dataset.bound) return;
  form.dataset.bound = 'true';
  $('button[type="submit"]', form).disabled = false;
  const fields = [...form.elements].filter(field => field.name && field.type !== 'hidden' && field.name !== 'company');
  fields.forEach(field => {
    if (field.type === 'date') { const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1); field.min = localDate(tomorrow); }
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => { delete form.dataset.requestId; });
    ['input', 'change'].forEach(type => field.addEventListener(type, () => { if (field.getAttribute('aria-invalid') === 'true') validateField(field); }));
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const status = $('.form-status', form), button = $('button[type="submit"]', form);
    if (button.disabled) return;
    status.textContent = '';
    if (form.elements.company.value.trim()) { form.reset(); return; }
    if (!fields.map(validateField).every(Boolean)) { $('[aria-invalid="true"]', form)?.focus(); return; }
    if (!/^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(FORM_ENDPOINT)) {
      status.innerHTML = `This form is not open yet. ${contactHTML()}`;
      return;
    }
    const label = button.textContent;
    button.disabled = true;
    button.textContent = 'Sending…';
    button.setAttribute('aria-busy', 'true');
    const data = new FormData(form);
    data.set('source', form.dataset.form);
    // Reuse the request id after a network failure to prevent duplicate rows on retry.
    form.dataset.requestId ||= crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    data.set('requestId', form.dataset.requestId);
    data.set('clientDate', localDate(new Date()));
    if (form.dataset.productId) data.set('productId', form.dataset.productId);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(FORM_ENDPOINT, { method: 'POST', mode: FORM_MODE, body: data, signal: controller.signal });
      const opaque = response.type === 'opaque';
      if (!opaque) {
        if (!response.ok || !(await response.json()).success) throw new Error('Submission rejected');
      }
      const next = { merch: 'We will contact you by email or text about production, payment and shipping. No payment was taken.', booking: 'We will contact you to discuss availability and terms. Your booking is not confirmed.', mixtape: 'You will receive the release announcement by email.' }[form.dataset.form];
      const confirmation = document.createElement('div');
      confirmation.className = 'confirmation';
      confirmation.tabIndex = -1;
      confirmation.setAttribute('role', 'status');
      confirmation.innerHTML = `<h3>${opaque ? 'Request sent.' : 'Received. Thank you.'}</h3><p>${opaque ? 'Receipt could not be verified. Once received: ' : ''}${next}</p>${opaque ? `<p>If you do not hear back, contact us directly. ${contactHTML()}</p>` : ''}`;
      form.replaceWith(confirmation);
      confirmation.focus();
    } catch {
      status.innerHTML = `We could not verify your submission. Your entries are still here. You can retry or contact us directly. ${contactHTML()}`;
      button.disabled = false;
      button.textContent = label;
      button.removeAttribute('aria-busy');
    } finally { clearTimeout(timeout); }
  });
}

function initMedia() {
  const player = $('[data-player]'), url = safeURL(MUSIC_EMBED);
  if (player && url && /^(https:\/\/open\.spotify\.com\/embed\/|https:\/\/www\.youtube-nocookie\.com\/embed\/)/.test(url)) {
    const load = () => {
      const iframe = document.createElement('iframe');
      iframe.title = 'Listen to Exo319';
      iframe.src = url;
      iframe.loading = 'lazy';
      iframe.allow = 'encrypted-media; fullscreen; picture-in-picture';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      player.replaceChildren(iframe);
    };
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => { if (entries.some(entry => entry.isIntersecting)) { load(); observer.disconnect(); } }, { rootMargin: '150px' });
      observer.observe(player);
    } else load();
  }
  const shows = $('[data-shows]');
  if (shows) $('[data-shows-empty]').hidden = Boolean($('.show-row', shows));
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.remove('is-pending'); observer.unobserve(entry.target); } }), { threshold: .05 });
    $$('.reveal').forEach(element => { element.classList.add('is-pending'); observer.observe(element); });
    const hero = $('.hero__image');
    if (hero) {
      let queued = false;
      addEventListener('scroll', () => {
        if (queued || reducedMotion.matches) return;
        queued = true;
        requestAnimationFrame(() => { hero.style.setProperty('--parallax', `${Math.min(scrollY * .06, 24)}px`); queued = false; });
      }, { passive: true });
    }
  }
}

initNavigation();
document.documentElement.classList.add('js');
initLinks();
initProducts();
$$('form[data-form]').forEach(bindForm);
initMedia();
