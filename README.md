# Kalpana Devi T - AI Portfolio

A complete full-stack personal portfolio built with Next.js, React and TypeScript. The design follows a custom **Midnight AI Laboratory** visual system and includes responsive pages, production-oriented case studies, animation, accessibility support, SEO metadata and a validated contact API.

## Included pages

- `/` - complete home overview
- `/about` - professional profile, education and technical approach
- `/experience` - detailed professional and internship timeline
- `/projects` - filterable project archive
- `/projects/ai-web-analysis-system`
- `/projects/hybrid-rag-chatbot`
- `/projects/gmail-automation-system`
- `/projects/ai-event-registration-platform`
- `/contact` - validated working contact form

## Main features

- One-time opening loader using `sessionStorage`
- Dark AI Mode and Light Professional Mode
- CSS-generated AI system visuals and project diagrams
- Responsive desktop, tablet and mobile layouts
- Reduced-motion support
- Keyboard navigation and visible focus styles
- Project filtering and four complete case-study pages
- JSON-LD Person structured data
- Open Graph metadata, sitemap and robots file
- Contact form validation, spam honeypot and request throttling
- Optional contact webhook integration
- Downloadable resume PDF

## Requirements

- Node.js 20.9 or later
- npm 10 or later

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run typecheck
npm run build
npm start
```

## Contact form behavior

Without external configuration, valid messages are stored locally in:

```text
data/contact-messages.json
data/contact-submissions.log
```

For a deployed production site, configure a secure webhook in `.env.local`:

```env
CONTACT_WEBHOOK_URL=https://your-secure-form-endpoint.example/messages
NEXT_PUBLIC_SITE_URL=https://your-portfolio-domain.example
```

The webhook receives:

```json
{
  "id": "generated-uuid",
  "submittedAt": "ISO timestamp",
  "fullName": "...",
  "email": "...",
  "company": "...",
  "reason": "...",
  "message": "..."
}
```

A persistent database or webhook is recommended on serverless hosting because its filesystem may be read-only or temporary.

## Resume

The project includes:

```text
public/resume/Kalpana-Devi-T-Resume.pdf
```

It was generated strictly from the facts supplied with the portfolio specification because no separate resume PDF was included with the request. Replace this file with the latest approved resume while keeping the same filename; every Download Resume button will continue to work.

## Content and links

Central portfolio content is maintained in:

```text
src/data/portfolio.ts
```

Update that file to change projects, experience, skills, achievements or external links. Public live buttons are rendered only for URLs supplied in the source content. No repository buttons or performance statistics are fabricated.

## Project structure

```text
kalpana-ai-portfolio/
├── data/
│   └── contact-messages.json
├── public/
│   ├── projects/
│   ├── resume/
│   ├── favicon.svg
│   └── og-image.svg
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── api/contact/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── projects/[slug]/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── data/
│   └── lib/
├── .env.example
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Deployment notes

### Vercel

1. Push the folder to GitHub.
2. Import the repository into Vercel.
3. Add `NEXT_PUBLIC_SITE_URL`.
4. Add `CONTACT_WEBHOOK_URL` or connect the API route to a persistent database/email service.
5. Deploy.

### Node server or VPS

```bash
npm install
npm run build
npm start
```

Use Nginx or another reverse proxy in front of port 3000 and configure HTTPS.
