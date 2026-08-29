# Al-Kawsar

A modern editorial and social blogging platform for thoughtful writing, discovery, and community.

## Stack

- Next.js 15 + React 19 + TypeScript
- PostgreSQL + Prisma
- Zod validation
- Feature-oriented application architecture
- SEO-ready metadata, sitemap and robots policy
- Responsive editorial design with dark-mode support

## Local setup

1. Install Node.js 20+.
2. Copy `.env.example` to `.env` and provide a PostgreSQL `DATABASE_URL` plus a strong `AUTH_SECRET` (32+ characters).
3. Install dependencies with `npm install`.
4. Generate Prisma Client: `npm run db:generate`.
5. Create the database schema: `npm run db:migrate`.
6. Start development: `npm run dev`.

## Verification

- `npm run typecheck`
- `npm run lint`
- `npm run build`

The repository is being developed incrementally on `feat/blog-platform-foundation`. Production secrets must never be committed. Storage, email, cache and OAuth integrations are environment-driven and can be enabled as their feature modules are implemented.

## Health check

`GET /health` returns a small JSON health response for deployment probes.

## Architecture direction

The product is designed as a social publishing system: authentication and RBAC, profiles, publishing, revisions, media, comments, reactions, bookmarks, follows, notifications, reports, analytics and audit logs are represented in the relational model. Public content should remain cacheable and SEO-friendly while private/admin surfaces remain protected.
