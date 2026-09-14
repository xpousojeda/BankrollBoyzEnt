# Exo319 website

Four static pages, CSS, vanilla JavaScript and a Google Apps Script receiver. Open index.html to browse locally. No package installation or build is required. Upload the HTML, assets and images directories to your static host when ready; Code.gs runs separately in Google Apps Script.

## From the reference

Retained the four-page scaffolding, responsive navigation concept, IntersectionObserver reveals, subtle hero parallax, form validation pattern, honeypot and Apps Script approach. Rebuilt the visual layer and form implementation. No band images, contact details, biography, endpoint or styling were carried over.

## Set up the forms

1. Create a new Google Sheet in your Google account.
2. Choose Extensions → Apps Script. Replace the editor contents with Code.gs from this package.
3. In Project Settings, set the script time zone to America/Chicago. Match the spreadsheet time zone in File → Settings.
4. Save. Choose Deploy → New deployment → Web app.
5. Set Execute as to Me and Who has access to Anyone. Authorize the requested spreadsheet access, then deploy. Your account must allow anonymous web app access.
6. Copy the deployed URL ending in /exec. In assets/js/main.js, replace PASTE_APPS_SCRIPT_URL_HERE in FORM_ENDPOINT with it. Do not use the /dev URL.
7. Set CONTACT.email and/or CONTACT.phone in that same file. The phone should include its country code. Contact links update across all pages.
8. Submit one test from each form on the hosted site. Check that Merch, Booking and Mixtape tabs each contain the appropriate row, timestamp, source and requestId. The tabs and headers are created automatically. Do not rename their header columns.
9. After changing Code.gs, use Deploy → Manage deployments → Edit → New version → Deploy to update the existing endpoint.

FORM_MODE defaults to no-cors. An opaque response cannot prove the row was saved, so the site says “Request sent” with an explicit receipt caveat. It never labels an opaque response as confirmed receipt. If your hosting configuration supports reading the Apps Script JSON response, change FORM_MODE to cors and test it; readable responses show success only when the server returns success: true. There is no automatic retry in a different mode because that could submit twice. A reused requestId prevents duplicate rows on a retry with unchanged fields. Editing fields starts a new request.

No deployed endpoint or live spreadsheet was supplied. Live receipt has not been tested. Anonymous form submissions can still be abused; the requested honeypot is a basic filter, not authentication. Keep this sheet private. Do not place payment information or credentials in it.

Apps Script web apps: https://developers.google.com/apps-script/guides/web
ContentService behavior: https://developers.google.com/apps-script/guides/content

## Photos and art

The images folder contains original, neutral SVG placeholders and an original EX seal, so the site has no broken images. These are intentionally not fabricated artist photos or actual product mockups. Replace the relevant src paths in HTML or PRODUCTS with your real JPG/WebP filenames and update the alt text. Use these dimensions or the same aspect ratio:

| File stem | Recommended dimensions | Use |
| --- | --- | --- |
| hero-artist | 1920 × 1280 | Wide artist photo; leave room for text at the bottom |
| mixed-chemicals | 1200 × 1200 | Approved mixtape cover |
| press-01, press-02 | 1200 × 1500 | Press portraits |
| visual-01, visual-02 | 1600 × 900 | Video thumbnails |
| merch-tee, merch-hoodie, merch-cap | 1200 × 1500 | Actual product photos or approved mockups |
| og-cover.jpg | 1200 × 630 | Included original social card; replace if desired |
| seal.svg | Square vector | Original EX mark, favicon, divider and faint repeating pattern |

Keep width and height attributes on every image. Update them if you change aspect ratios. Update the generated product alt text in initProducts after substituting actual photography. Export compressed images, ideally below 250 KB each; keep the hero below about 400 KB.

## Streaming and visuals

At the top of main.js, fill LINKS with official Spotify, Apple Music, YouTube, SoundCloud and Instagram URLs. Empty links remain inactive and are announced as coming soon. No guessed artist profiles are linked. Set MUSIC_EMBED to a Spotify https://open.spotify.com/embed/... URL or a https://www.youtube-nocookie.com/embed/... URL. It loads near the listening section. Fill VIDEOS with your YouTube URLs and titles.

## Products

PRODUCTS at the top of main.js is the single product list used by both the home teaser and merch grid. Copy an object and set its unique lowercase id, name, description, USD price, sizes, variants and image filename. Prices are numbers, without a dollar sign. Add its image to images/. No server catalog edit is needed.

The three included styles and prices are proposed examples and are labeled that way. Confirm all products, pricing and production details before launch, then edit the preview notice in merch.html and the “Proposed price” text in main.js. All reservations must be reconciled manually against the actual collection before payment is requested. The server validates input structure and quantity but does not treat client-supplied product information as an authoritative sale.

No payment handle is displayed because none was supplied. Arrange payment privately after contacting the customer. Do not add payment fields.

## Shows

Insert one block like this inside the data-shows container in index.html, replacing every detail with a confirmed show. The empty state disappears automatically when a show-row exists.

```html
<article class="show-row">
  <time datetime="2027-05-15">May 15, 2027</time>
  <span>Confirmed venue name</span>
  <span>Des Moines, IA</span>
  <a class="text-link" href="https://example.com/tickets">Tickets ↗</a>
</article>
```

The date above is an editing example, not an announced show.

## Brand and metadata

The seven requested palette variables live at the top of style.css: --pine-deep, --pine, --money, --money-light, --gold, --cream and --ink. --display and --body control the fonts. Instrument Serif + Space Grotesk load from Google Fonts with local serif/sans-serif fallbacks; there are no external JavaScript libraries. For a fully offline version, self-host these fonts and replace the Google Fonts links.

Replace every https://example.com reference across the four HTML files with your real site origin before publishing. This updates canonical URLs, Open Graph URLs, social images and schema identifiers. A real domain was not supplied. The included OG card is a working image, but social previews require your hosted absolute URL. Each page has its own title and description. MusicAlbum uses MixtapeAlbum and intentionally has no invented release date.

## Decisions and verification

The biography uses only supplied facts. Bankroll Boyz Ent is described as an independent imprint. No dates, claims of success, show bookings or official product inventory were invented. A phone number is optional on merch reservations because email is required; booking accepts either email or phone. Preferred booking dates must be after today. Capacity is optional for features and studio sessions. Reservations allow 1–20 pieces per request.

Verified JavaScript syntax, local links and anchors, image dimensions, unique IDs and current-page navigation. Tested the Apps Script logic with local service mocks for all three tabs, headers, duplicate request handling, honeypot, input validation, invalid dates and formula escaping. The mocked checks do not establish real Google delivery.

Browser rendering and keyboard interaction tests could not run: this environment did not have a browser binary and the browser download timed out. Before launch, verify all pages at 360, 480, 768, 1024, 1440 and 1920 pixels in the requested browsers; test navigation, modal Tab/Escape focus behavior, text zoom and real form receipt. The code contains the responsive layouts and accessibility handling, but these visual checks remain unverified.

SOURCE.md contains the complete seven requested source files in labeled code blocks, in the requested order, followed by these setup notes. The ZIP contains the runnable files and all placeholder assets as well.
