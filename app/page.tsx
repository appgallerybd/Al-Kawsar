const posts = [
  { category: "Technology", title: "Building a calmer internet for thoughtful ideas", excerpt: "What changes when publishing is designed around reading, context, and meaningful conversation?", author: "Al-Kawsar Editorial", meta: "8 min read · 2.4k views", featured: true },
  { category: "Design", title: "Design systems that make products feel inevitable", excerpt: "A practical guide to visual hierarchy, reusable primitives, and interfaces that get out of the way.", author: "Nabil Hasan", meta: "6 min read · 1.8k views" },
  { category: "Career", title: "The craft of learning in public", excerpt: "A repeatable system for turning curiosity into useful notes, articles, and long-term knowledge.", author: "Sara Rahman", meta: "5 min read · 1.2k views" },
];

const categories = ["Technology", "Programming", "AI", "Business", "Design", "Career", "Education", "Productivity"];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="/" aria-label="Al-Kawsar home"><span className="brand-mark">A</span><span>Al-Kawsar</span></a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="/discover">Discover</a><a href="/search">Search</a><a href="/dashboard/editor">Write</a>
          </nav>
          <div className="nav-actions"><a className="button button-ghost" href="/login">Log in</a><a className="button button-primary" href="/register">Get started</a></div>
        </div>
      </header>

      <section className="hero container">
        <div className="eyebrow">A home for ideas</div>
        <h1>Read deeply.<br /><em>Write freely.</em></h1>
        <p>Discover thoughtful writing, publish your own work, and build a reading life around the people and topics you care about.</p>
        <div className="hero-actions"><a className="button button-primary button-large" href="/discover">Explore stories →</a><a className="text-link" href="/dashboard/editor">Start writing</a></div>
      </section>

      <section className="container section">
        <div className="section-heading"><div><span className="kicker">Editor’s selection</span><h2>Stories worth your time</h2></div><a className="text-link" href="/discover">View all →</a></div>
        <div className="post-grid">
          {posts.map((post) => <article className={post.featured ? "post-card featured" : "post-card"} key={post.title}>
            <div className="post-art" aria-hidden="true"><span>{post.category.slice(0,1)}</span></div>
            <div className="post-body"><span className="category">{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><div className="post-meta"><span>{post.author}</span><span>{post.meta}</span></div></div>
          </article>)}
        </div>
      </section>

      <section className="container topic-strip"><div><span className="kicker">Explore topics</span><h2>Find your corner of the internet.</h2></div><div className="chips">{categories.map((c) => <a href={`/category/${c.toLowerCase()}`} className="chip" key={c}>{c}</a>)}</div></section>

      <section className="container feature-band"><div><span className="kicker">For writers</span><h2>Your ideas deserve a place to grow.</h2><p>Draft privately, refine with confidence, and publish when your story is ready. Your audience can follow your work and join the conversation.</p><a className="button button-primary" href="/dashboard/editor">Write your first story</a></div><div className="stat-grid"><div><strong>0</strong><span>friction between idea & draft</span></div><div><strong>∞</strong><span>topics to explore</span></div><div><strong>24/7</strong><span>your publishing desk</span></div></div></section>

      <footer className="site-footer"><div className="container footer-inner"><div><div className="brand"><span className="brand-mark">A</span><span>Al-Kawsar</span></div><p>A modern editorial and social publishing platform.</p></div><div className="footer-links"><a href="/discover">Discover</a><a href="/about">About</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></div></footer>
    </main>
  );
}
