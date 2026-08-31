# Aman Shah — Personal Website

One-page, scrollable personal academic site for Aman Shah, a 1st-year CS PhD student at NYU working in usable security & privacy. Built on the **Editorial Noir** design direction you picked.

## Design direction: Editorial Noir

- **Palette:** dark reddish-purple background (`hsl(340 28% 16%)`), khaki text (`hsl(45 38% 72%)`), muted khaki (`hsl(45 20% 55%)`), a warm amber accent (`hsl(40 85% 62%)`), and a subtle plum-tinted line color for dividers.
- **Type:** Fraunces (display serif, with italic emphasis) for headings + name; Archivo for body; JetBrains Mono for labels, dates, and nav. Loaded via Google Fonts `<link>` in the root route head.
- **Feel:** zine/editorial — oversized name type, section letters `(a) (b) (c) (d)`, mono micro-labels, thin rules, generous vertical rhythm, restrained motion (a quiet fade-up on sections).
- **Tokens:** carry these values into `src/styles.css` as semantic tokens (background, foreground, muted, accent, line) so components use tokens, not hardcoded hex.

## Page structure (single route, `src/routes/index.tsx`)

The whole site lives on `/` as one scrollable page. Sticky mini-nav at top with section anchors. Sections, in order:

1. **Nav** — sticky, blurred. `A.Shah` wordmark (accent dot) + anchor links: Work, Awards, Projects, Contact.
2. **Hero** — asymmetric 12-col grid. Left (8 cols): mono eyebrow ("Usable privacy & security · NYU"), oversized `Aman / Shah` name (italic "Shah"), 1–2 sentence bio (dating-app safety, online harm for vulnerable populations), contact/social links (email, Google Scholar, GitHub, Bluesky). Right (4 cols, offset down): placeholder portrait + caption "Fig. 01 — self, 2026".
3. **Publications** (`#work`) — numbered editorial list (`01`, `02`, `03` in accent mono). Each: title (Fraunces, hover→accent), authors + venue (mono), Paper/Data/Video links. Placeholder papers tuned to your field, with **SOUPS 2026 Best Poster** called out on #01.
4. **Awards & talks** (`#awards`) — two-column list: Awards (left) and Talks (right). Mono year + item. Includes the SOUPS 2026 Best Poster award.
5. **Other projects** (`#projects`) — two-column grid. Each: placeholder image, title, mono tag + year, short description. Two starter projects (Consent Anatomy, The Dark Pattern Index).
6. **Contact footer** (`#contact`) — mono "Contact — (d)" label, large email link, social links, set-in / copyright line.

## Content

Realistic, editable placeholders that fit your field (usable privacy & security, dating-app safety, SOUPS 2026 Best Poster). You'll swap in real pubs/awards/projects and your own photo later. Email and social links left as `#` placeholders to fill in.

## Images

Two generated placeholder images (portrait + project thumbnails) using the direction's image prompts, saved under `src/assets/` and imported. Replace with your real photo and project shots whenever you're ready.

## Tech

- TanStack Start single route (`src/routes/index.tsx`), rewrite the placeholder index.
- Tailwind v4 tokens in `src/styles.css`; Google Fonts via `<link>` in `src/routes/__root.tsx` head.
- Route `head()` with a real title/description/og tags ("Aman Shah — Usable Privacy & Security, NYU"). `__root.tsx` title stays as the app default; index gets its own.
- No backend, no auth, no database — static personal page.

## Out of scope

Multi-page routing, blog, CMS, dark-mode toggle, analytics — not part of this build.
