# Udgass early-access form — how it works and how to connect it

Page: `/udgass` (`udgass.html`, `assets/css/udgass.css`, `assets/js/udgass.js`).

## Today (no configuration needed)
The site is static (Vercel, no API routes, no database). The form therefore
uses the same hand-off as the Contact page: on submit it opens an email to
`hello@kpappworx.com` with the visitor's details pre-filled
(subject `Udgass early access — <company>`), plus Gmail / Outlook / copy
fallbacks. The page states clearly that the request is **not sent until the
visitor sends that email** — it never shows a "you're on the list" success.

Tip: filter the `Udgass early access` subject line into a Gmail label.

## Connecting a real backend later
1. Create an endpoint that accepts `POST` JSON and returns a 2xx on success, e.g. a
   Vercel function (`/api/udgass-signup`) writing to a store you choose, or a form
   service (Formspree, Airtable/Sheets webhook, etc.). Keep any secret in Vercel
   environment variables, never in the repo.
2. Set the endpoint on the form in `udgass.html`:
   `<form id="earlyForm" ... data-endpoint="/api/udgass-signup">`
3. Payload sent: `{ email, company, role, challenge, source }`.
4. Behaviour once set: success message shows **only** on a 2xx response; any
   error or network failure falls back to the email hand-off above.

## Other notes
- Chart data on the page is synthetic and generated in the browser (labelled
  "Illustrative"); there is no forecasting backend.
- The page includes the site-wide Vercel Insights script like every other page; no new analytics were added.
- Udgass is intentionally not added to `products.js` (the shared portfolio
  registry) so the homepage, /products and nav are untouched. Add it there when you want it listed.
