# Nodics Agora Telco

`nodics.agora.telco` is the customer-facing telco Commerce storefront. It is a
concrete domain app under the Nodics experience layer, not the shared Commerce
UI package and not a backend module.

## Ownership

- Owns telco storefront presentation, responsive UX, browser state, and tests.
- Consumes renderer contracts from `domain.commerce.ui`.
- Consumes telco content, device/plan product, price, inventory, media, and
  publishing data from Kickoff/Online backend APIs.
- Must not carry Apparel or Electronics renderer implementations.
- Must not own Commerce, WCMS, Discovery, Profile, Payment, Fulfillment, Media,
  Process, persistence, tenant policy, or business rules.

## Runtime journey

```text
Home -> plan/device listing -> product detail -> cart -> checkout ->
payment result -> order confirmation/history -> lifecycle request surfaces
```

Page sections, components, media and product data must be content/API driven.
Local fallback data is allowed only for safe development and tests.

## Verification

```bash
npm run verify
```

Local end-to-end topology and data qualification are orchestrated from
`nodics.kickoff`.
