const highlights = [
  { label: "Discover", title: "Ideas worth your attention", text: "A calm home for thoughtful writing, practical knowledge, and conversations." },
  { label: "Publish", title: "Write without friction", text: "Create drafts, refine your story, add media, and publish when it is ready." },
  { label: "Connect", title: "Follow people and ideas", text: "Build a personal reading feed around authors, categories, and topics you care about." },
];

export default function HomePage() {
  return (
    <main>
      <section className="container" style={{ paddingBlock: 96 }}>
        <p style={{ color: "var(--accent)", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>Al-Kawsar</p>
        <h1 style={{ maxWidth: 760, fontSize: "clamp(42px, 7vw, 76px)", lineHeight: 1.02, margin: "18px 0" }}>
          Read deeply. Write freely. Share what matters.
        </h1>
        <p style={{ maxWidth: 640, color: "var(--muted)", fontSize: 20, lineHeight: 1.7 }}>
          A modern editorial and social publishing platform built for readers, writers, and communities of ideas.
        </p>
      </section>

      <section className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, paddingBottom: 96 }}>
        {highlights.map((item) => (
          <article key={item.label} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: 28 }}>
            <small style={{ color: "var(--muted)" }}>{item.label}</small>
            <h2 style={{ margin: "12px 0", fontSize: 24 }}>{item.title}</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
