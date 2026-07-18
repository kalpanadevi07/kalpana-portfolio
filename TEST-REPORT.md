# Build and verification report

## Automated checks completed

- `npm run typecheck` - passed
- `npm run build` - passed
- `npm audit --omit=dev` - 0 vulnerabilities after applying a compatible PostCSS override
- Home route - HTTP 200
- About route - HTTP 200
- Experience route - HTTP 200
- Projects route - HTTP 200
- Four case-study routes - HTTP 200
- Contact route - HTTP 200
- Sitemap - HTTP 200
- Robots file - HTTP 200
- Resume download - HTTP 200
- Valid contact submission - accepted and stored
- Invalid contact submission - rejected with HTTP 400
- Test contact records removed before packaging

## PDF verification

The included resume was rendered to images and visually checked. It contains two pages with no clipped text, broken glyphs or overlap.

## External links

The GitHub profile, BrandingBeez root site, AC Graphics root site and BrandingBeez events page were reachable during verification. LinkedIn restricted automated fetching, and the supplied BrandingBeez `/idr` URL could not be independently confirmed by the verification service. Both URLs remain exactly as supplied in the specification and should be checked once in a normal browser before final deployment.

## Production requirement

The local contact storage works on a normal Node server. Configure `CONTACT_WEBHOOK_URL` or persistent database/email delivery before deploying to a serverless environment with temporary or read-only storage.
