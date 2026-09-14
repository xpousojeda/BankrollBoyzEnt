I kept the four-page scaffolding, mobile navigation pattern, scroll reveals and Google Sheets form approach. I replaced all visual styling and content with the Exo319 direction, rebuilt validation and added merch reservations and mixtape signups.

## index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Exo319 | Music & Mixed Chemicals</title>
  <meta name="description" content="Exo319. Independent rap from Des Moines, Iowa. Mixed Chemicals, the upcoming mixtape. Music, visuals and Bankroll Boyz Ent.">
  <link rel="canonical" href="https://example.com/index.html">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Exo319 | Music & Mixed Chemicals">
  <meta property="og:description" content="Exo319. Independent rap from Des Moines, Iowa. Mixed Chemicals, the upcoming mixtape. Music, visuals and Bankroll Boyz Ent.">
  <meta property="og:url" content="https://example.com/index.html">
  <meta property="og:image" content="https://example.com/images/og-cover.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Exo319 — Mixed Chemicals, coming soon">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Exo319 | Music & Mixed Chemicals">
  <meta name="twitter:description" content="Exo319. Independent rap from Des Moines, Iowa. Mixed Chemicals, the upcoming mixtape. Music, visuals and Bankroll Boyz Ent.">
  <meta name="twitter:image" content="https://example.com/images/og-cover.jpg">
  <meta name="theme-color" content="#0C1F18">
  <link rel="icon" href="images/seal.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"MusicGroup","@id":"https://example.com/#artist","name":"Exo319","genre":"Hip hop","homeLocation":{"@type":"Place","name":"Des Moines, Iowa"}},{"@type":"MusicAlbum","name":"Mixed Chemicals","albumReleaseType":"https://schema.org/MixtapeAlbum","byArtist":{"@id":"https://example.com/#artist"},"description":"Upcoming mixtape. Release date not announced."}]}</script>
  <script src="assets/js/main.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="wordmark" href="index.html" aria-label="Exo319 home">Exo<span>319</span></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <div class="nav-links"><a href="index.html" aria-current="page">Home</a><a href="about.html">About</a><a href="merch.html">Merch</a><a href="booking.html">Booking</a></div>
      <div class="platforms" aria-label="Streaming platforms"><a data-platform="spotify" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Spotify</a><a data-platform="apple" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Apple Music</a><a data-platform="youtube" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>YouTube</a><a data-platform="soundcloud" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>SoundCloud</a></div>
    </nav>
  </header>
  <main id="main" tabindex="-1">
    <section class="hero" aria-labelledby="hero-title">
      <img class="hero__image" src="images/hero-artist.svg" width="1920" height="1280" alt="Artist photo placeholder for Exo319; replace with a wide portrait" fetchpriority="high" decoding="async">
      <div class="hero__content wrap">
        <p class="eyebrow">Des Moines, Iowa / Bankroll Boyz Ent</p>
        <h1 class="hero__title" id="hero-title">Exo<span>319</span></h1>
        <div class="hero__bottom"><p class="hero__tagline">keeping it P.</p><div class="actions"><a class="button" href="#music">Listen <span aria-hidden="true">↗</span></a><a class="button button--outline" href="#mixtape">Mixed Chemicals</a></div></div>
      </div>
      <span class="hero__caption">Independent rap · Iowa</span>
    </section>
    <section class="section wrap split reveal" id="mixtape" aria-labelledby="mixtape-title">
      <div class="cover"><img class="" src="images/mixed-chemicals.svg" width="1200" height="1200" alt="Mixed Chemicals cover art placeholder with the Exo319 seal" loading="lazy" decoding="async"></div>
      <div class="release-copy"><p class="eyebrow">01 / The next chapter</p><h2 id="mixtape-title">Mixed<br><em>Chemicals</em></h2><p class="release-state">Mixtape · Coming soon</p><p>No date yet. Leave your email for the release announcement.</p>
        <form method="post" data-form="mixtape" novalidate>
          <input type="hidden" name="formType" value="mixtape">
          <div class="honeypot" aria-hidden="true"><label>Leave empty<input name="company" tabindex="-1" autocomplete="off"></label></div>
          <div class="form-grid"><div class="field"><label for="email">Email address</label><input id="email" name="email" aria-describedby="email-error" required type="email" autocomplete="email" maxlength="300"><small class="field__error" id="email-error"></small></div></div>
          <p class="form-note">One release announcement. Your email is used for this update only.</p>
          <button class="button" type="submit" disabled>Notify me</button>
          <p class="form-status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>
    <section class="section section--tinted" id="music" aria-labelledby="music-title"><div class="wrap reveal">
      <div class="section-heading"><div><p class="eyebrow">02 / In rotation</p><h2 id="music-title">Press <em>play.</em></h2></div><p>Exo319 / The music</p></div>
      <div class="player" data-player><span class="player__symbol" aria-hidden="true">▷</span><div><h3>The music lands here.</h3><p>Official listening links are coming soon.</p></div></div>
      <div class="platforms" aria-label="Streaming platforms"><a data-platform="spotify" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Spotify</a><a data-platform="apple" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Apple Music</a><a data-platform="youtube" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>YouTube</a><a data-platform="soundcloud" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>SoundCloud</a></div>
    </div></section>
    <section class="section wrap reveal" aria-labelledby="visuals-title">
      <div class="section-heading"><div><p class="eyebrow">03 / On film</p><h2 id="visuals-title">Latest <em>visuals.</em></h2></div><span>Coming into focus.</span></div>
      <div class="visual-grid">
        <a class="visual-card" data-video="0" aria-disabled="true"><img class="" src="images/visual-01.svg" width="1600" height="900" alt="Placeholder for the first Exo319 music video thumbnail" loading="lazy" decoding="async"><span class="card-caption">Visual 01 <span>Coming soon</span></span></a>
        <a class="visual-card" data-video="1" aria-disabled="true"><img class="" src="images/visual-02.svg" width="1600" height="900" alt="Placeholder for the second Exo319 music video thumbnail" loading="lazy" decoding="async"><span class="card-caption">Visual 02 <span>Coming soon</span></span></a>
      </div>
    </section>
    <div class="seal-divider" aria-hidden="true"><img class="" src="images/seal.svg" width="80" height="80" alt="" loading="lazy" decoding="async"></div>
    <section class="section wrap reveal" aria-labelledby="merch-title">
      <div class="section-heading"><div><p class="eyebrow">04 / The collection</p><h2 id="merch-title">Made on <em>your time.</em></h2></div><a class="text-link" href="merch.html">Explore merch ↗</a></div>
      <p>Made to order. Reserve first; payment and shipping follow by email or text.</p>
      <div class="product-grid" data-products="teaser"></div>
      <noscript><p><a href="merch.html">Explore the upcoming collection.</a></p></noscript>
    </section>
    <section class="section section--tinted" aria-labelledby="shows-title"><div class="wrap reveal">
      <p class="eyebrow">05 / In person</p><h2 id="shows-title">Outside, <em>soon.</em></h2>
      <div class="shows" data-shows></div>
      <p data-shows-empty>No shows announced. New dates will be posted here.</p>
      <a class="text-link" href="booking.html">Bring Exo319 to your city ↗</a>
    </div></section>
  </main>
  <footer class="site-footer wrap">
    <div class="footer-top"><a class="wordmark" href="index.html">Exo<span>319</span></a><p>Des Moines, Iowa<br>Independent by intention.</p></div>
    <div class="platforms" aria-label="Streaming platforms"><a data-platform="spotify" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Spotify</a><a data-platform="apple" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Apple Music</a><a data-platform="youtube" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>YouTube</a><a data-platform="soundcloud" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>SoundCloud</a></div>
    <div class="footer-contact"><a data-platform="instagram" aria-disabled="true">Instagram · coming soon</a><div data-contact>Booking contact coming soon.</div></div>
    <div class="footer-bottom"><span>Bankroll Boyz Ent · Independent imprint</span><span>© <span data-year>2026</span> Exo319</span></div>
  </footer>
  <noscript><p class="wrap">Enable JavaScript to open the menu, view merch and use the forms. Page navigation remains available above.</p></noscript>
</body>
</html>
```

## about.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About Exo319 | Bankroll Boyz Ent</title>
  <meta name="description" content="Meet Exo319, an independent rap artist based in Des Moines, Iowa, and Bankroll Boyz Ent, his own imprint.">
  <link rel="canonical" href="https://example.com/about.html">
  <meta property="og:type" content="website">
  <meta property="og:title" content="About Exo319 | Bankroll Boyz Ent">
  <meta property="og:description" content="Meet Exo319, an independent rap artist based in Des Moines, Iowa, and Bankroll Boyz Ent, his own imprint.">
  <meta property="og:url" content="https://example.com/about.html">
  <meta property="og:image" content="https://example.com/images/og-cover.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Exo319 — Mixed Chemicals, coming soon">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="About Exo319 | Bankroll Boyz Ent">
  <meta name="twitter:description" content="Meet Exo319, an independent rap artist based in Des Moines, Iowa, and Bankroll Boyz Ent, his own imprint.">
  <meta name="twitter:image" content="https://example.com/images/og-cover.jpg">
  <meta name="theme-color" content="#0C1F18">
  <link rel="icon" href="images/seal.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"MusicGroup","@id":"https://example.com/#artist","name":"Exo319","genre":"Hip hop","homeLocation":{"@type":"Place","name":"Des Moines, Iowa"}},{"@type":"MusicAlbum","name":"Mixed Chemicals","albumReleaseType":"https://schema.org/MixtapeAlbum","byArtist":{"@id":"https://example.com/#artist"},"description":"Upcoming mixtape. Release date not announced."}]}</script>
  <script src="assets/js/main.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="wordmark" href="index.html" aria-label="Exo319 home">Exo<span>319</span></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <div class="nav-links"><a href="index.html">Home</a><a href="about.html" aria-current="page">About</a><a href="merch.html">Merch</a><a href="booking.html">Booking</a></div>
      <div class="platforms" aria-label="Streaming platforms"><a data-platform="spotify" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Spotify</a><a data-platform="apple" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Apple Music</a><a data-platform="youtube" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>YouTube</a><a data-platform="soundcloud" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>SoundCloud</a></div>
    </nav>
  </header>
  <main id="main" tabindex="-1">
    <section class="section wrap page-intro"><p class="eyebrow">Exo319 / Des Moines, Iowa</p><h1>On his<br><em>own terms.</em></h1></section>
    <section class="section wrap split reveal" aria-labelledby="story-title">
      <img class="portrait" src="images/press-01.svg" width="1200" height="1500" alt="Placeholder for an editorial portrait of Exo319" loading="lazy" decoding="async">
      <div class="prose"><p class="eyebrow">The artist</p><h2 id="story-title">From <em>Iowa.</em></h2><p>Exo319 is an independent rap artist based in Des Moines, Iowa. The music comes first, with Bankroll Boyz Ent as his own imprint.</p><p>His upcoming mixtape, <em>Mixed Chemicals</em>, is the next release. There is no announced date yet. The work will speak when it arrives.</p><p>This is the place for the music, the visuals and what comes next. Straight from Exo319.</p><a class="text-link" href="index.html#music">Get into the music ↗</a></div>
    </section>
    <section class="section section--tinted"><div class="wrap split reveal">
      <div class="prose"><p class="eyebrow">The imprint</p><h2>Bankroll<br><em>Boyz Ent.</em></h2><p>Exo319’s own operation. An independent imprint bringing his releases, visuals and made-to-order merch together in one place.</p><p>It begins with the music. <em>Mixed Chemicals</em> is the next chapter.</p><p class="eyebrow">keeping it P.</p></div>
      <img class="portrait" src="images/press-02.svg" width="1200" height="1500" alt="Placeholder for a second Exo319 press portrait" loading="lazy" decoding="async">
    </div></section>
    <section class="section wrap"><p class="eyebrow">For press</p><h2>Get in <em>touch.</em></h2><p>For approved press photos, interviews and other inquiries:</p><div class="contact-block" data-contact>Booking contact coming soon.</div><a class="text-link" href="booking.html">Booking & inquiries ↗</a></section>
  </main>
  <footer class="site-footer wrap">
    <div class="footer-top"><a class="wordmark" href="index.html">Exo<span>319</span></a><p>Des Moines, Iowa<br>Independent by intention.</p></div>
    <div class="platforms" aria-label="Streaming platforms"><a data-platform="spotify" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Spotify</a><a data-platform="apple" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Apple Music</a><a data-platform="youtube" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>YouTube</a><a data-platform="soundcloud" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>SoundCloud</a></div>
    <div class="footer-contact"><a data-platform="instagram" aria-disabled="true">Instagram · coming soon</a><div data-contact>Booking contact coming soon.</div></div>
    <div class="footer-bottom"><span>Bankroll Boyz Ent · Independent imprint</span><span>© <span data-year>2026</span> Exo319</span></div>
  </footer>
  <noscript><p class="wrap">Enable JavaScript to open the menu, view merch and use the forms. Page navigation remains available above.</p></noscript>
</body>
</html>
```

## merch.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Exo319 Merch | Made-to-order Reservations</title>
  <meta name="description" content="Preview Exo319 merch and reserve your size. Made to order. No payment collected on this site.">
  <link rel="canonical" href="https://example.com/merch.html">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Exo319 Merch | Made-to-order Reservations">
  <meta property="og:description" content="Preview Exo319 merch and reserve your size. Made to order. No payment collected on this site.">
  <meta property="og:url" content="https://example.com/merch.html">
  <meta property="og:image" content="https://example.com/images/og-cover.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Exo319 — Mixed Chemicals, coming soon">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Exo319 Merch | Made-to-order Reservations">
  <meta name="twitter:description" content="Preview Exo319 merch and reserve your size. Made to order. No payment collected on this site.">
  <meta name="twitter:image" content="https://example.com/images/og-cover.jpg">
  <meta name="theme-color" content="#0C1F18">
  <link rel="icon" href="images/seal.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"MusicGroup","@id":"https://example.com/#artist","name":"Exo319","genre":"Hip hop","homeLocation":{"@type":"Place","name":"Des Moines, Iowa"}},{"@type":"MusicAlbum","name":"Mixed Chemicals","albumReleaseType":"https://schema.org/MixtapeAlbum","byArtist":{"@id":"https://example.com/#artist"},"description":"Upcoming mixtape. Release date not announced."}]}</script>
  <script src="assets/js/main.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="wordmark" href="index.html" aria-label="Exo319 home">Exo<span>319</span></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <div class="nav-links"><a href="index.html">Home</a><a href="about.html">About</a><a href="merch.html" aria-current="page">Merch</a><a href="booking.html">Booking</a></div>
      <div class="platforms" aria-label="Streaming platforms"><a data-platform="spotify" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Spotify</a><a data-platform="apple" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Apple Music</a><a data-platform="youtube" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>YouTube</a><a data-platform="soundcloud" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>SoundCloud</a></div>
    </nav>
  </header>
  <main id="main" tabindex="-1">
    <section class="section wrap page-intro"><p class="eyebrow">Exo319 / Made to order</p><h1>The <em>collection.</em></h1><p class="intro-copy">Reserve your piece. Nothing is charged here.</p><p class="collection-note">Preview collection: proposed styles and prices, subject to confirmation. No stock is held. A reservation is not a paid order or a guaranteed production date.</p></section>
    <section class="wrap section merch-section" aria-label="Merch collection"><div class="product-grid" data-products="full"></div><noscript><p>JavaScript is needed to display products and reserve a size.</p></noscript></section>
    <section class="section section--tinted"><div class="wrap"><p class="eyebrow">How it works</p><div class="steps"><div><span>01</span><h2>Reserve.</h2><p>Choose a piece, your size and quantity. No payment is taken.</p></div><div><span>02</span><h2>We connect.</h2><p>Production runs once enough reservations come in. We follow up by email or text.</p></div><div><span>03</span><h2>Make it yours.</h2><p>Final price, payment and shipping are arranged directly before production.</p></div></div></div></section>
    <dialog class="order-dialog" aria-labelledby="order-title">
      <div class="dialog-heading"><p class="eyebrow">Made to order / Reservation</p><button class="dialog-close" type="button" aria-label="Close reservation">✕</button></div>
      <h2 id="order-title">Reserve <em>your piece.</em></h2>
      <div data-order-content><form method="post" data-form="merch" novalidate>
          <input type="hidden" name="formType" value="merch">
          <div class="honeypot" aria-hidden="true"><label>Leave empty<input name="company" tabindex="-1" autocomplete="off"></label></div>
          <div class="form-grid"><div class="field"><label for="name">Full name</label><input id="name" name="name" aria-describedby="name-error" required type="text" autocomplete="name" maxlength="300"><small class="field__error" id="name-error"></small></div><div class="field"><label for="email">Email address</label><input id="email" name="email" aria-describedby="email-error" required type="email" autocomplete="email" maxlength="300"><small class="field__error" id="email-error"></small></div><div class="field"><label for="phone">Phone <span>(optional)</span></label><input id="phone" name="phone" aria-describedby="phone-error" type="tel" autocomplete="tel" maxlength="300"><small class="field__error" id="phone-error"></small></div><div class="field"><label for="item">Item</label><input id="item" name="item" aria-describedby="item-error" required type="text" readonly maxlength="300"><small class="field__error" id="item-error"></small></div><div class="field"><label for="size">Size</label><select id="size" name="size" aria-describedby="size-error" required><option value="">Select one</option><option value="one">One size</option></select><small class="field__error" id="size-error"></small></div><div class="field"><label for="variant">Color / variant</label><select id="variant" name="variant" aria-describedby="variant-error" required><option value="">Select one</option><option value="pine">Pine</option></select><small class="field__error" id="variant-error"></small></div><div class="field"><label for="quantity">Quantity</label><input id="quantity" name="quantity" aria-describedby="quantity-error" required type="number" min="1" max="20" step="1" value="1"><small class="field__error" id="quantity-error"></small></div><div class="field"><label for="notes">Notes <span>(optional)</span></label><textarea id="notes" name="notes" aria-describedby="notes-error" rows="4" maxlength="3000"></textarea><small class="field__error" id="notes-error"></small></div></div>
          <p class="form-note">This is a reservation only. Production starts once enough orders come in. Payment and shipping are arranged afterward by email or text. Do not send card or bank details.</p>
          <button class="button" type="submit" disabled>Send reservation</button>
          <p class="form-status" role="status" aria-live="polite"></p>
        </form></div>
    </dialog>
  </main>
  <footer class="site-footer wrap">
    <div class="footer-top"><a class="wordmark" href="index.html">Exo<span>319</span></a><p>Des Moines, Iowa<br>Independent by intention.</p></div>
    <div class="platforms" aria-label="Streaming platforms"><a data-platform="spotify" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Spotify</a><a data-platform="apple" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Apple Music</a><a data-platform="youtube" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>YouTube</a><a data-platform="soundcloud" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>SoundCloud</a></div>
    <div class="footer-contact"><a data-platform="instagram" aria-disabled="true">Instagram · coming soon</a><div data-contact>Booking contact coming soon.</div></div>
    <div class="footer-bottom"><span>Bankroll Boyz Ent · Independent imprint</span><span>© <span data-year>2026</span> Exo319</span></div>
  </footer>
  <noscript><p class="wrap">Enable JavaScript to open the menu, view merch and use the forms. Page navigation remains available above.</p></noscript>
</body>
</html>
```

## booking.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Book Exo319 | Shows, Features & Sessions</title>
  <meta name="description" content="Inquire about Exo319 for a show, feature or studio session. Based in Des Moines, Iowa.">
  <link rel="canonical" href="https://example.com/booking.html">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Book Exo319 | Shows, Features & Sessions">
  <meta property="og:description" content="Inquire about Exo319 for a show, feature or studio session. Based in Des Moines, Iowa.">
  <meta property="og:url" content="https://example.com/booking.html">
  <meta property="og:image" content="https://example.com/images/og-cover.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Exo319 — Mixed Chemicals, coming soon">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Book Exo319 | Shows, Features & Sessions">
  <meta name="twitter:description" content="Inquire about Exo319 for a show, feature or studio session. Based in Des Moines, Iowa.">
  <meta name="twitter:image" content="https://example.com/images/og-cover.jpg">
  <meta name="theme-color" content="#0C1F18">
  <link rel="icon" href="images/seal.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"MusicGroup","@id":"https://example.com/#artist","name":"Exo319","genre":"Hip hop","homeLocation":{"@type":"Place","name":"Des Moines, Iowa"}},{"@type":"MusicAlbum","name":"Mixed Chemicals","albumReleaseType":"https://schema.org/MixtapeAlbum","byArtist":{"@id":"https://example.com/#artist"},"description":"Upcoming mixtape. Release date not announced."}]}</script>
  <script src="assets/js/main.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="wordmark" href="index.html" aria-label="Exo319 home">Exo<span>319</span></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <div class="nav-links"><a href="index.html">Home</a><a href="about.html">About</a><a href="merch.html">Merch</a><a href="booking.html" aria-current="page">Booking</a></div>
      <div class="platforms" aria-label="Streaming platforms"><a data-platform="spotify" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Spotify</a><a data-platform="apple" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Apple Music</a><a data-platform="youtube" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>YouTube</a><a data-platform="soundcloud" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>SoundCloud</a></div>
    </nav>
  </header>
  <main id="main" tabindex="-1">
    <section class="section wrap page-intro"><p class="eyebrow">Shows / Features / Studio sessions</p><h1>Let’s make<br><em>it happen.</em></h1><div class="contact-block" data-contact>Booking contact coming soon.</div><p>Based in Des Moines, Iowa.</p></section>
    <section class="section wrap booking-layout" aria-labelledby="booking-title"><div><p class="eyebrow">Booking & inquiries</p><h2 id="booking-title">Send the <em>details.</em></h2><p>An inquiry starts the conversation. Dates and terms are confirmed directly.</p></div><div><form method="post" data-form="booking" novalidate>
          <input type="hidden" name="formType" value="booking">
          <div class="honeypot" aria-hidden="true"><label>Leave empty<input name="company" tabindex="-1" autocomplete="off"></label></div>
          <div class="form-grid"><div class="field"><label for="name">Full name</label><input id="name" name="name" aria-describedby="name-error" required type="text" autocomplete="name" maxlength="300"><small class="field__error" id="name-error"></small></div><div class="field"><label for="contact">Email or phone</label><input id="contact" name="contact" aria-describedby="contact-error" required type="text" maxlength="300"><small class="field__error" id="contact-error"></small></div><div class="field"><label for="eventType">Event type</label><select id="eventType" name="eventType" aria-describedby="eventType-error" required><option value="">Select one</option><option value="show">Show</option><option value="feature">Feature</option><option value="studio">Studio session</option><option value="other">Other</option></select><small class="field__error" id="eventType-error"></small></div><div class="field"><label for="eventDate">Preferred date</label><input id="eventDate" name="eventDate" aria-describedby="eventDate-error" required type="date"><small class="field__error" id="eventDate-error"></small></div><div class="field"><label for="location">Venue or city</label><input id="location" name="location" aria-describedby="location-error" required type="text" maxlength="300"><small class="field__error" id="location-error"></small></div><div class="field"><label for="capacity">Expected capacity <span>(optional)</span></label><input id="capacity" name="capacity" aria-describedby="capacity-error" type="number" min="1" max="1000000" step="1"><small class="field__error" id="capacity-error"></small></div><div class="field"><label for="budget">Budget (include currency)</label><input id="budget" name="budget" aria-describedby="budget-error" required type="text" maxlength="300"><small class="field__error" id="budget-error"></small></div><div class="field"><label for="message">Tell us about it</label><textarea id="message" name="message" aria-describedby="message-error" required rows="4" maxlength="3000"></textarea><small class="field__error" id="message-error"></small></div></div>
          <p class="form-note">Your details are used to respond to this inquiry. Submitting does not confirm a booking. Please do not include payment information.</p>
          <button class="button" type="submit" disabled>Send inquiry</button>
          <p class="form-status" role="status" aria-live="polite"></p>
        </form></div></section>
  </main>
  <footer class="site-footer wrap">
    <div class="footer-top"><a class="wordmark" href="index.html">Exo<span>319</span></a><p>Des Moines, Iowa<br>Independent by intention.</p></div>
    <div class="platforms" aria-label="Streaming platforms"><a data-platform="spotify" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Spotify</a><a data-platform="apple" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>Apple Music</a><a data-platform="youtube" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>YouTube</a><a data-platform="soundcloud" aria-disabled="true"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="m10 7 7 5-7 5z" fill="currentColor"/></svg>SoundCloud</a></div>
    <div class="footer-contact"><a data-platform="instagram" aria-disabled="true">Instagram · coming soon</a><div data-contact>Booking contact coming soon.</div></div>
    <div class="footer-bottom"><span>Bankroll Boyz Ent · Independent imprint</span><span>© <span data-year>2026</span> Exo319</span></div>
  </footer>
  <noscript><p class="wrap">Enable JavaScript to open the menu, view merch and use the forms. Page navigation remains available above.</p></noscript>
</body>
</html>
```

## assets/css/style.css

```css
:root {
  --pine-deep: #0C1F18;
  --pine: #17362A;
  --money: #4F8A5B;
  --money-light: #85BB65;
  --gold: #C8A951;
  --cream: #EFE9DC;
  --ink: #080B0A;
  --display: 'Instrument Serif', 'Times New Roman', serif;
  --body: 'Space Grotesk', Arial, sans-serif;
  --gutter: clamp(1.25rem, 4.5vw, 5rem);
  --space: clamp(4rem, 8vw, 8rem);
  --line: rgba(200, 169, 81, .3);
  --ease: cubic-bezier(.22, 1, .36, 1);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 6rem; }
body { margin: 0; background: var(--pine-deep); color: var(--cream); font: 400 1rem/1.65 var(--body); overflow-x: hidden; }
body.is-locked { overflow: hidden; }
[hidden] { display: none; }
a { color: inherit; text-decoration: none; }
button, input, select, textarea { font: inherit; }
button, a, input, select, textarea { -webkit-tap-highlight-color: transparent; }
button { cursor: pointer; }
button, input, select, textarea { border-radius: 0; }
button:disabled { cursor: wait; opacity: .65; }
img { display: block; max-width: 100%; height: auto; }
svg { flex-shrink: 0; }
h1, h2, h3, p { margin-top: 0; }
h1, h2, h3 { font-family: var(--display); font-weight: 400; line-height: 1.02; }
h1 { font-size: clamp(3.9rem, 9vw, 9rem); margin-bottom: 1.5rem; }
h2 { font-size: clamp(3rem, 5.6vw, 6rem); margin-bottom: 1.5rem; }
h3 { font-size: clamp(1.8rem, 3vw, 2.6rem); margin-bottom: .65rem; }
em { color: var(--money-light); font-weight: 400; }
p { max-width: 65ch; }
:focus-visible { outline: 2px solid var(--money-light); outline-offset: 5px; }
::selection { color: var(--ink); background: var(--money-light); }
.wrap { width: 100%; max-width: 1600px; padding-inline: var(--gutter); margin-inline: auto; }
.section { padding-block: var(--space); }
.section--tinted { background: var(--pine); border-block: 1px solid var(--line); }
.eyebrow { font-size: .75rem; line-height: 1.6; text-transform: uppercase; letter-spacing: .19em; color: var(--gold); margin-bottom: 1.4rem; }
.skip-link { position: fixed; top: .5rem; left: 1rem; z-index: 20; padding: .8rem 1rem; background: var(--cream); color: var(--ink); transform: translateY(-160%); }
.skip-link:focus { transform: translateY(0); }
.site-header { position: relative; z-index: 5; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding: 1rem var(--gutter); padding-top: max(1rem, env(safe-area-inset-top)); border-bottom: 1px solid var(--line); background: var(--pine-deep); }
.wordmark { font: 400 2.4rem/1 var(--display); display: inline-flex; align-items: center; min-height: 44px; }
.wordmark span { font-style: italic; }
.nav-links { display: flex; flex-wrap: wrap; gap: 1rem; }
.nav-links a { min-height: 44px; display: inline-flex; align-items: center; font-size: .8rem; text-transform: uppercase; letter-spacing: .13em; }
.nav-links [aria-current] { color: var(--gold); text-decoration: underline; text-underline-offset: .6rem; }
.site-nav { width: 100%; }
.nav-toggle { display: none; min-width: 64px; min-height: 44px; color: var(--cream); border: 1px solid var(--line); background: none; padding: .4rem .7rem; }
.platforms { display: flex; flex-wrap: wrap; gap: .5rem; }
.platforms a { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; padding: .6rem .85rem; border: 1px solid var(--line); min-height: 44px; font-size: .875rem; }
[aria-disabled="true"] { cursor: default; }
.platforms [aria-disabled="true"] { border-color: var(--money); }
.site-nav .platforms { margin-top: 1rem; }
.hero { position: relative; isolation: isolate; min-height: 620px; min-height: min(860px, 88dvh); display: flex; align-items: end; overflow: hidden; background: var(--pine); }
.hero::after { content: ''; position: absolute; inset: 0; z-index: -1; background: linear-gradient(0deg, var(--pine-deep), rgba(12,31,24,.22) 85%); }
.hero__image { position: absolute; inset: -3% 0; width: 100%; height: 106%; object-fit: cover; z-index: -2; filter: saturate(.75) sepia(.12); transform: translateY(var(--parallax, 0px)); }
.hero__content { padding-block: clamp(3rem, 6vw, 6rem); }
.hero__title { position: relative; display: inline-block; overflow: hidden; font-size: clamp(5rem, 18vw, 18rem); line-height: 1; letter-spacing: -.045em; margin-block: 1rem 2rem; }
.hero__title span { font-style: italic; }
.hero__title::after { content: ''; position: absolute; inset: 0; background: linear-gradient(110deg, transparent 30%, rgba(239,233,220,.12), transparent 70%); transform: translateX(-120%); animation: shimmer 2.3s var(--ease) .3s both; pointer-events: none; }
.hero__tagline { font: italic clamp(2rem, 3vw, 3rem)/1.2 var(--display); margin-bottom: 1.5rem; }
.hero__caption { position: absolute; right: var(--gutter); top: 2rem; font-size: .75rem; letter-spacing: .15em; text-transform: uppercase; }
.actions { display: flex; flex-wrap: wrap; gap: .8rem; }
.button { display: inline-flex; align-items: center; justify-content: center; gap: 2rem; min-height: 50px; padding: .85rem 1.5rem; background: var(--money-light); color: var(--ink); border: 1px solid var(--money-light); font-size: .9rem; font-weight: 500; }
.button--outline { background: transparent; color: var(--cream); border-color: var(--gold); }
.text-link { display: inline-flex; align-items: center; min-height: 44px; color: var(--gold); border-bottom: 1px solid var(--line); }
.split, .booking-layout { display: grid; gap: clamp(2rem, 6vw, 7rem); align-items: center; }
.split > *, .booking-layout > *, .form-grid > * { min-width: 0; }
.cover { padding: clamp(.6rem, 2vw, 1.5rem); border: 1px solid var(--line); transform: rotate(-2deg); width: 96%; margin-inline: auto; }
.cover img { width: 100%; }
.release-state { display: inline-block; border-block: 1px solid var(--line); padding-block: .5rem; color: var(--gold); }
.section-heading { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: end; gap: 1rem; margin-bottom: 2rem; }
.section-heading h2 { margin-bottom: 0; }
.section-heading > p { font-size: .875rem; }
.player { padding: clamp(1.5rem, 5vw, 4rem); min-height: 240px; border: 1px solid var(--line); display: flex; align-items: center; gap: 2rem; margin-bottom: 1.5rem; background: var(--pine-deep); }
.player__symbol { font-size: 3rem; color: var(--gold); }
.player p { margin-bottom: 0; }
.player iframe { width: 100%; min-height: 352px; border: 0; }
.visual-grid, .product-grid, .steps { display: grid; gap: clamp(1rem, 2.5vw, 2.5rem); }
.visual-card { display: block; min-width: 0; }
.visual-card img { aspect-ratio: 16 / 9; object-fit: cover; width: 100%; border: 1px solid var(--line); }
.card-caption { display: flex; justify-content: space-between; flex-wrap: wrap; gap: .5rem; padding-block: 1rem; }
.card-caption > span { color: var(--gold); font-size: .8rem; }
.seal-divider { display: flex; align-items: center; justify-content: center; gap: 2rem; padding-inline: var(--gutter); }
.seal-divider::before, .seal-divider::after { content: ''; height: 1px; width: min(30%, 20rem); background: var(--line); }
.seal-divider img { width: 64px; }
.product-grid { margin-top: 2rem; }
.merch-card { min-width: 0; padding-bottom: 1.4rem; border-bottom: 1px solid var(--line); }
.merch-card__image { overflow: hidden; margin-bottom: 1.5rem; border: 1px solid var(--line); box-shadow: inset 0 0 0 5px rgba(8,11,10,.08); }
.merch-card img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; transition: transform 1s var(--ease); }
.merch-card__details { display: flex; justify-content: space-between; align-items: baseline; gap: .75rem; }
.merch-card__price { white-space: nowrap; color: var(--gold); }
.merch-card__sizes { font-size: .8rem; }
.merch-card p { font-size: .9rem; }
.show-row { display: grid; gap: .5rem; padding-block: 1.5rem; border-bottom: 1px solid var(--line); }
.page-intro { border-bottom: 1px solid var(--line); background-image: linear-gradient(rgba(12,31,24,.95),rgba(12,31,24,.95)), url('../../images/seal.svg'); background-size: auto, 110px; }
.intro-copy { font-size: clamp(1.15rem, 2vw, 1.5rem); }
.collection-note { max-width: 75ch; font-size: .875rem; }
.merch-section { padding-top: 1rem; }
.portrait { width: 100%; border: 1px solid var(--gold); padding: .5rem; filter: saturate(.8) sepia(.1); }
.prose p { max-width: 52ch; }
.steps > div > span { color: var(--gold); font-size: .8rem; }
.steps h2 { font-size: clamp(2.5rem, 4vw, 4rem); margin-top: 1rem; }
.contact-block { display: grid; gap: .5rem; font-size: clamp(1.2rem, 2.5vw, 2rem); overflow-wrap: anywhere; margin-block: 1rem; }
.contact-block a { min-height: 44px; color: var(--gold); }
.booking-layout { align-items: start; }
.form-grid { display: grid; gap: 1rem; }
.field label { display: block; font-size: .875rem; margin-bottom: .5rem; }
.field label span { font-size: .8rem; }
.field input, .field select, .field textarea { display: block; width: 100%; min-width: 0; min-height: 48px; padding: .8rem; color: var(--cream); background: var(--pine-deep); border: 1px solid var(--line); }
.field select { color-scheme: dark; }
.field input[type="date"] { color-scheme: dark; min-height: 54px; }
.field textarea { resize: vertical; }
.field [aria-invalid="true"] { border-color: var(--gold); }
.field__error { display: block; color: var(--gold); font-size: .8rem; min-height: 1.3em; margin-top: .3rem; }
.form-note { font-size: .8rem; margin-top: 1rem; }
.form-status { margin-top: 1rem; color: var(--gold); overflow-wrap: anywhere; }
.form-status:empty { display: none; }
.honeypot { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
.confirmation { border: 1px solid var(--gold); padding: 1.5rem; }
.confirmation h3 { margin-top: 0; }
.order-dialog { width: 100%; max-width: 100%; height: 100%; height: 100dvh; max-height: 100dvh; margin: 0; border: 1px solid var(--gold); color: var(--cream); background: var(--pine); padding: max(1rem, env(safe-area-inset-top)) var(--gutter) max(2rem, env(safe-area-inset-bottom)); overflow-y: auto; overscroll-behavior: contain; }
.order-dialog::backdrop { background: rgba(8,11,10,.8); }
.dialog-heading { position: sticky; top: -1px; z-index: 1; display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding-block: .5rem; background: var(--pine); }
.dialog-heading p { margin: 0; }
.dialog-close { flex-shrink: 0; width: 48px; height: 48px; border: 1px solid var(--gold); background: var(--pine); color: var(--cream); }
.site-footer { padding-block: 3rem max(2rem, env(safe-area-inset-bottom)); }
.footer-top, .footer-bottom, .footer-contact { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1.5rem; }
.footer-top { align-items: start; margin-bottom: 2rem; }
.footer-top .wordmark { font-size: 4rem; }
.footer-top p { font-size: .875rem; }
.footer-contact { margin-block: 1.5rem; align-items: center; }
.footer-contact a { display: inline-flex; align-items: center; min-height: 44px; }
.footer-bottom { border-top: 1px solid var(--line); padding-top: 1.5rem; font-size: .75rem; }
@keyframes shimmer { to { transform: translateX(120%); } }
@media (max-width: 1023px) {
  .js .nav-toggle { display: block; position: relative; z-index: 7; }
  .js .site-nav { display: none; }
  .js .site-nav.is-open { display: flex; position: fixed; inset: 0; z-index: 6; flex-direction: column; justify-content: center; gap: 2rem; height: 100dvh; overflow-y: auto; padding: max(6rem, env(safe-area-inset-top)) var(--gutter) max(2rem, env(safe-area-inset-bottom)); background: var(--pine-deep); }
  .site-nav.is-open .nav-links { flex-direction: column; gap: .5rem; }
  .site-nav.is-open .nav-links a { font: 400 clamp(2rem, 7vw, 4rem)/1.2 var(--display); text-transform: none; letter-spacing: 0; }
}
@media (min-width: 480px) {
  .actions .button { min-width: 170px; }
}
@media (min-width: 768px) {
  .split { grid-template-columns: 1fr 1fr; }
  .visual-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .product-grid, .steps { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .hero__bottom { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
  .hero__tagline { margin-bottom: 0; }
  .booking-layout { grid-template-columns: .8fr 1.2fr; }
  .form-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .field:has(textarea), .release-copy .field { grid-column: 1 / -1; }
  .show-row { grid-template-columns: 1fr 2fr 2fr 1fr; align-items: center; }
  .order-dialog { width: min(90%, 740px); max-height: 90dvh; height: auto; margin: auto; padding: 1.5rem 2rem 2rem; }
}
@media (min-width: 1024px) {
  .site-header { flex-wrap: nowrap; }
  .site-nav { width: auto; display: flex; align-items: center; gap: 2rem; }
  .site-nav .platforms { margin: 0; }
  .site-nav .platforms a { font-size: 0; gap: 0; width: 44px; }
  .nav-links { gap: 1.5rem; }
}
@media (min-width: 1440px) { .nav-links { gap: 2.5rem; } }
@media (min-width: 1920px) { .site-header { padding-inline: max(var(--gutter), calc((100vw - 1440px) / 2)); } }
@media (hover: hover) {
  a[href]:hover { color: var(--money-light); }
  .button:hover { background: var(--cream); color: var(--ink); }
  .button--outline:hover { background: var(--pine); color: var(--cream); }
  .merch-card:has(a:hover, button:hover) img { transform: scale(1.035); }
  .visual-card[href]:hover img { filter: brightness(1.1); }
}
@media (prefers-reduced-motion: no-preference) {
  .reveal.is-pending { opacity: 0; transform: translateY(20px); }
  .reveal { transition: opacity 1s var(--ease), transform 1s var(--ease); }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation: none; transition: none; }
  .hero__image { transform: none; }
}
```

## assets/js/main.js

```javascript
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
```

## Code.gs

```javascript
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
```

## Setup and handoff

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
