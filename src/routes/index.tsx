import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { filterProjects, projects, type Project, type ProjectFilter } from "@/lib/projects";
import { Arrow, Btn, Contact, Footer, Nav, Reveal, SectionHead, TechChip, techStack } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maduka Jesse — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-Stack Developer building modern websites and mobile applications for businesses, startups, and ambitious ideas.",
      },
      { property: "og:title", content: "Maduka Jesse — Full-Stack Developer" },
      { property: "og:description", content: "Websites, mobile apps, APIs and complete digital products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- hero ---------- */

function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="animate-rise mb-10 inline-flex items-center gap-2.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-primary" />
            Available for select projects
          </div>
          <h1 className="display text-[clamp(2.9rem,7.4vw,6.6rem)]">
            <span className="animate-word text-muted-foreground" style={{ animationDelay: "120ms" }}>Hi. I'm</span>
            <br />
            <span className="animate-word" style={{ animationDelay: "240ms" }}>Maduka Jesse.</span>
          </h1>
          <p className="animate-rise mt-6 text-2xl font-semibold tracking-tight md:text-4xl" style={{ animationDelay: "420ms" }}>
            Full-Stack Developer
          </p>
          <p className="animate-rise mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "560ms" }}>
            Building modern websites and mobile applications for businesses, startups, and ambitious ideas.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "700ms" }}>
            <Btn href="#work">View My Work <Arrow /></Btn>
            <Btn href="#contact" variant="ghost">Let's Work Together</Btn>
          </div>
        </div>
        <div className="animate-rise lg:col-span-5" style={{ animationDelay: "500ms" }}>
          <img src="/images/maduka-jesse.jpg" alt="Maduka Jesse" className="mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ---------- work ---------- */

function BrowserFrame({ p, tall = false }: { p: Project; tall?: boolean }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-soft">
      <div className="flex items-center gap-1.5 border-b border-border px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-primary/20" />
        <span className="h-2 w-2 rounded-full bg-primary/20" />
        <span className="h-2 w-2 rounded-full bg-primary/20" />
        <span className="mx-auto truncate rounded-md bg-secondary px-3 py-0.5 font-mono text-[10px] text-muted-foreground">
          {p.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </span>
      </div>
      <div className={`overflow-hidden ${tall ? "aspect-[16/10]" : "aspect-[16/11]"}`}>
        <img
          src={p.image}
          alt={`${p.title} interface`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}

function ProjectLinks({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap gap-5 text-sm font-semibold">
      {p.liveUrl && (
        <a href={p.liveUrl} target="_blank" rel="noreferrer" className="group/l inline-flex items-center gap-1 border-b border-primary pb-0.5">
          View Project <span className="transition-transform group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5">↗</span>
        </a>
      )}
    </div>
  );
}

function Tags({ p }: { p: Project }) {
  return (
    <p className="font-mono text-xs text-muted-foreground">
      <span className="mr-2 uppercase text-foreground">{p.category}</span>
      {p.tags.join(" / ")}
    </p>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  return (
    <article className="group grid gap-10 rounded-2xl bg-card p-5 md:p-10 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-8">
        <BrowserFrame p={p} tall />
      </div>
      <div className="lg:col-span-4">
        <p className="eyebrow">Featured</p>
        <h3 className="display mt-3 text-5xl">{p.title}</h3>
        <p className="mt-4 text-muted-foreground">{p.description}</p>
        <dl className="mt-8 grid gap-5 border-t border-border pt-6 text-sm">
          <div>
            <dt className="eyebrow">Role</dt>
            <dd className="mt-1 font-medium">Full-Stack Development</dd>
          </div>
          <div>
            <dt className="eyebrow">Stack</dt>
            <dd className="mt-1 font-medium">{p.tags.join(" / ")}</dd>
          </div>
        </dl>
        <div className="mt-8">
          <ProjectLinks p={p} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ p, index, wide }: { p: Project; index: number; wide?: boolean }) {
  return (
    <article className={`group flex flex-col gap-6 ${wide ? "md:col-span-2 md:grid md:grid-cols-5 md:items-end md:gap-10" : ""}`}>
      <div className={`rounded-2xl bg-card p-4 md:p-6 ${wide ? "md:col-span-3" : ""}`}>
        <BrowserFrame p={p} />
      </div>
      <div className={`flex flex-col gap-3 ${wide ? "md:col-span-2 md:pb-6" : ""}`}>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</h3>
          <span className="font-mono text-xs text-muted-foreground">{String(index).padStart(2, "0")}</span>
        </div>
        <p className="text-muted-foreground">{p.description}</p>
        <Tags p={p} />
        <div className="mt-2">
          <ProjectLinks p={p} />
        </div>
      </div>
    </article>
  );
}

const filters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
];

function Work() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const list = filterProjects(projects, filter);
  const featured = list.find((p) => p.featured) ?? list[0];
  const rest = list.filter((p) => p !== featured);

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHead
        index="01"
        eyebrow="Work"
        title="Selected Work"
        sub="A selection of products, websites, and applications I've built."
      />

      <div role="tablist" aria-label="Filter projects" className="mb-12 inline-flex rounded-full border border-border p-1">
        {filters.map((f) => {
          const count = filterProjects(projects, f.id).length;
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-7 ${
                active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
              <sup className="ml-1 font-mono text-[10px] opacity-70">{count}</sup>
            </button>
          );
        })}
      </div>

      <div key={filter} className="animate-rise" style={{ animationDuration: "0.5s" }}>
        {list.length === 0 ? (
          <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-border text-center">
            <p className="eyebrow">Mobile</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight">Mobile case studies are on the way.</p>
            <p className="mt-2 text-muted-foreground">Have an app idea? Let's build it together.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-16 md:gap-24">
            {featured && <FeaturedProject p={featured} />}
            <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 md:gap-y-24">
              {rest.map((p, i) => (
                <div key={p.slug} className={`contents`}>
                  <div className={i % 3 === 2 ? "md:col-span-2" : i % 3 === 1 ? "md:mt-24" : ""}>
                    <ProjectCard p={p} index={i + 2} wide={i % 3 === 2} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- services ---------- */

const services = [
  {
    n: "01",
    title: "Website Development",
    copy: "Modern websites built to represent your business, convert visitors, and scale with your goals.",
    items: ["Business websites", "Landing pages", "E-commerce", "SaaS platforms", "Dashboards", "Custom web applications", "CMS-powered websites"],
  },
  {
    n: "02",
    title: "App Development",
    copy: "Mobile applications designed around real users, real workflows, and real business needs.",
    items: ["Android applications", "iOS applications", "Cross-platform applications", "API integrations", "Authentication", "Payments", "Backend systems", "Admin dashboards"],
  },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHead index="02" eyebrow="Services" title="What I Build" />
      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.n} delay={i * 120}>
            <div
              className={`group flex h-full flex-col rounded-2xl p-8 transition-all duration-500 md:p-12 ${
                i === 0 ? "bg-primary text-primary-foreground" : "border border-border bg-card"
              }`}
            >
              <span className="font-mono text-sm opacity-60">{s.n}</span>
              <h3 className="display mt-16 text-4xl md:text-5xl">{s.title}</h3>
              <p className="mt-5 max-w-md text-lg opacity-75">{s.copy}</p>
              <ul className="mt-12 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center justify-between border-t border-current/15 py-3 text-sm">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
/* ---------- stack ---------- */

function Stack() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHead
        index="03"
        eyebrow="Capability"
        title={<>From Interface<br />to Infrastructure.</>}
        sub="The tools I use across the whole product — the screens people touch, the APIs behind them, and the data they rely on."
      />
      <Reveal>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {techStack.map((t) => (
            <TechChip key={t.name} {...t} />
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

/* ---------- process ---------- */

const steps = [
  ["Understand", "Understand the idea, users, business goals and requirements."],
  ["Design", "Plan the experience, structure and technical approach."],
  ["Build", "Develop the product with modern technologies and clean architecture."],
  ["Launch", "Test, deploy and refine the product."],
];

function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHead index="04" eyebrow="Process" title="How I Work" />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([t, d], i) => (
          <Reveal key={t} delay={i * 100} className="h-full">
            <div className="flex h-full flex-col bg-background p-8 transition-colors hover:bg-card">
              <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-20 text-2xl font-semibold tracking-tight">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <Stack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}