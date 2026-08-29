# Al-Kawsar Production Roadmap

## Phase 1 — Foundation
- [x] Next.js + TypeScript foundation
- [x] PostgreSQL/Prisma domain model
- [x] Environment validation
- [x] Shared Prisma client
- [x] Responsive editorial design foundation
- [x] Metadata, sitemap, robots and health endpoint
- [x] CI quality/build workflow

## Phase 2 — Identity
- [ ] Session model and secure cookie sessions
- [ ] Registration/login/logout
- [ ] Email verification
- [ ] Password reset/change
- [ ] OAuth providers
- [ ] RBAC enforcement
- [ ] Profile management

## Phase 3 — Publishing
- [ ] Rich-text editor with sanitized document output
- [ ] Markdown import/export
- [ ] Autosave and revisions
- [ ] Media upload and optimization
- [ ] Draft/publish/schedule lifecycle
- [ ] Slug history and redirects
- [ ] Public article renderer

## Phase 4 — Social
- [ ] Likes/reactions
- [ ] Bookmarks
- [ ] Author/category follows
- [ ] Nested comments and replies
- [ ] Comment likes/reports
- [ ] Share actions
- [ ] Notification delivery

## Phase 5 — Discovery
- [ ] Global search
- [ ] Category/tag pages
- [ ] Personalized feed
- [ ] Trending score with time decay
- [ ] Discover page
- [ ] Recommendations abstraction

## Phase 6 — Operations
- [ ] Author dashboard
- [ ] Article analytics
- [ ] Admin dashboard
- [ ] User management
- [ ] Reports/moderation queue
- [ ] Audit log UI
- [ ] Platform settings

## Phase 7 — Hardening
- [ ] Rate limiting backed by Redis
- [ ] Abuse detection
- [ ] Upload scanning/limits
- [ ] CSP tuned for deployed asset providers
- [ ] Unit/integration/E2E coverage
- [ ] Load/performance testing
- [ ] Observability and alerting
- [ ] Production deployment validation

This roadmap deliberately distinguishes implemented foundation work from features that still require runtime services such as PostgreSQL, email, object storage and Redis. A feature is not considered production-ready until its happy path, failure states, authorization and tests are implemented.
