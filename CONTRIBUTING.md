# Contributing to Form Filler

Thanks for your interest in improving Form Filler! This project is deliberately
small and simple, and we'd like to keep it that way.

## Guiding principles

1. **One file, no dependencies.** The entire app is `index.html` — HTML, CSS, and
   JavaScript together. Please don't add a build step, a framework, or a package
   manager.
2. **Offline-first.** The app must work with the internet turned off. Don't add
   external scripts, fonts, stylesheets, or network requests.
3. **Private by default.** User data stays in the browser's `localStorage`. Don't
   add anything that sends data off the device.

## How to make a change

1. Open `index.html` in any web browser — that's your whole dev environment.
2. Edit the file in any text editor and refresh the browser to see changes.
3. Test the flow: save info → pick a template → check auto-fill → Print / Save as PDF.

## Common changes

**Add a new form template.** Find the `TEMPLATES` object in the `<script>` and copy
an existing entry:

```js
myTemplate: {
  title: "My Template",
  desc: "Short description shown in the template list.",
  build: function(p) {
    return [
      {label:"Full name", value: (p.firstName||"") + " " + (p.lastName||"")},
      {label:"Email",     value: p.email || ""},
      {label:"Event name", value: "", placeholder:"e.g. My Event"},
      {label:"Sign-up link", value: "", type:"url"},
      {label:"Notes", value: "", type:"textarea"},
    ];
  }
}
```

**Field types available:** `text` (default), `date`, `textarea`, and `url`
(adds an **Open ↗** button and becomes a clickable link on the PDF).

**Add a profile field.** Add an input with an `id` in the "My Info" section, then add
that same `id` to the `PROFILE_FIELDS` array so it's saved and reused.

## Submitting

Open a pull request describing what you changed and why. Screenshots are appreciated
for anything visual.

Thank you! 🙌
