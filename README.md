# Form Filler — Seminars, Events & Webinars

A simple, **offline** app for filling out registration forms for seminars, events,
and webinars. Save your details once, reuse them on any form with one click, then
print or save as PDF. Built for when browser autofill isn't working — no internet,
no install, no accounts, no tracking.

The whole app is a single file (`index.html`). Open it in any browser and it just works.

---

## Features

- **Save your info once** — name, email, address, phone, company, role, and more,
  stored only in your own browser on your own device.
- **One-click auto-fill** into four ready-made templates:
  - **Webinar Registration** — work email, company, job title, country
    (pre-filled with the "Production-grade agents on Claude Sonnet 5" webinar title)
  - **Seminar Registration**
  - **Event Registration**
  - **General / Government form**
- **Registration link built in** — save the sign-up page URL on the form and
  tap **Open ↗** to jump straight to the real registration page (the link also
  appears, clickable, on the saved PDF).
- **Print / Save as PDF** — clean, printable output with a signature line,
  ready to keep, print, or email.
- **Works fully offline** — no internet connection required, ever.
- **Mobile-friendly** — usable on a phone; add it to your home screen like an app.

---

## How to use it

1. **Open the app.** Download `index.html` and open it in any web browser
   (double-click on a computer, or tap the file on a phone).
2. **My Info tab.** Enter your details once and tap **Save my info**.
   Your details are stored only in your browser on that device — nothing is sent anywhere.
3. **Fill a Form tab.** Pick a template. Your saved details fill in automatically.
4. Add the event-specific details (event name, date, session), review everything,
   then tap **Print / Save as PDF**. In the print dialog, choose *Save as PDF* as the
   destination to keep a copy you can email or bring with you.

> **Note:** the app produces a filled, printable copy of your registration. It does
> not submit to any organization's website — use the saved copy to complete the real
> sign-up form quickly, or print it to bring along.

---

## Getting the app

**Option A — Download the file (private, works offline).**
Download `index.html` from this repo and open it. Nothing else needed.

**Option B — Free web link via GitHub Pages (repo must be public).**
Enable it once under **Settings → Pages → Deploy from a branch → `main` / `root`**.
Your site then goes live at:

```
https://<your-username>.github.io/Work-around-of-government-form-filler-/
```

GitHub Pages is free for public repositories. The published code contains no personal
data — your saved info always stays in your browser, never in the repo.

---

## Privacy

- All your information stays in your browser's **local storage** on the device you use it on.
- The app makes **no network connections** and sends **no data** to any server.
- Because storage is per-device, info saved on your phone stays on your phone;
  fill **My Info** once on each device you use.

---

## Project structure

| File          | Purpose                                                              |
|---------------|---------------------------------------------------------------------|
| `index.html`  | The entire app — HTML, CSS, and JavaScript in one self-contained file. |
| `README.md`   | This documentation.                                                 |
| `LICENSE`     | MIT license.                                                        |

No build step, no dependencies, no package manager. To edit the app, open
`index.html` in any text editor.

---

## License

Released under the [MIT License](LICENSE). Free to use, modify, and share.
