# Security

This app is a single, self-contained HTML file. It has **no backend, no accounts,
no external resources, and makes no network requests.** All data stays in the
visitor's browser (`localStorage`) on their own device.

## Built into the page
- **Content-Security-Policy (meta):** `default-src 'none'` — blocks all external
  scripts, styles, images, fonts, and network calls. Only the page's own inline
  CSS/JS runs. `connect-src 'none'` means nothing can be exfiltrated.
- **Referrer-Policy (meta):** `no-referrer`.
- **Anti-clickjacking:** a frame-buster script breaks the page out of any iframe
  (since `frame-ancestors` can't be enforced from a meta tag).
- **Links:** external links open with `rel="noopener"`.
- No third-party code, trackers, analytics, cookies, or fonts.

## Recommended server / CDN headers (apply where it's hosted)
A static file can't set true HTTP headers. When hosting behind a server or CDN
(nginx, Cloudflare Pages, Netlify, etc.), add these:

```
Content-Security-Policy: default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'; form-action 'none'; base-uri 'none'; frame-ancestors 'none'
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: no-referrer
Permissions-Policy: geolocation=(), camera=(), microphone=(), payment=()
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
```

**Netlify / Cloudflare Pages** — drop a `_headers` file at the site root:
```
/*
  Content-Security-Policy: default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; connect-src 'none'; form-action 'none'; base-uri 'none'; frame-ancestors 'none'
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: no-referrer
  Permissions-Policy: geolocation=(), camera=(), microphone=(), payment=()
```

> Note: **GitHub Pages does not support custom headers.** For full header control,
> host behind Cloudflare (Pages/Workers) or Netlify.

## Reporting
Found a security issue? Contact **The Equation Agency LLC** — do not open a public
issue with exploit details.
