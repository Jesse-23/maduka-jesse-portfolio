import { createFileRoute } from "@tanstack/react-router";
import { Contact, Footer, Nav, Reveal, SectionHead, TechChip, techStack } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maduka Jesse, Full-Stack Developer" },
      {
        name: "description",
        content: "Experience, way of working and tech stack of Maduka Jesse, Backend Developer at Flowsate and freelance Full-Stack Developer.",
      },
      { property: "og:title", content: "About — Maduka Jesse" },
      { property: "og:description", content: "Full-Stack Developer building websites, mobile apps, APIs and complete digital products." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const stats = [
  ["3+", "Years Building"],
  ["2", "Roles"],
  ["2", "Active Now"],
  ["30+", "Projects Built"],
];

const roles = [
  {
    title: "Backend Developer",
    org: "Flowsate",
    meta: "Remote · April 2026 — Present",
    copy: "I build, maintain, debug and improve the backend systems and APIs that power Flowsate's product, working on live production systems alongside the wider engineering team.",
    items: [
      "Building and maintaining backend services",
      "Developing REST APIs",
      "Working with databases",
      "Debugging production issues",
      "Improving system reliability",
      "Integrating backend services",
      "Collaborating with other developers",
      "Reviewing and improving code",
      "Shipping features under deadlines",
    ],
  },
  {
    title: "Freelance Developer",
    org: "Independent",
    meta: "Remote · Worldwide · October 2023 — Present",
    copy: "I work directly with clients to build websites, web applications, mobile applications and digital products — from first requirements to deployment and ongoing care.",
    items: [
      "Building websites and web applications",
      "Developing mobile applications",
      "Building backend systems and APIs",
      "Turning requirements into working products",
      "Integrating third-party services",
      "Deploying and maintaining projects",
      "Debugging and improving existing systems",
      "Communicating project progress",
      "Delivering projects to deadlines",
    ],
  },
];

const howIWork = [
  "Understand the idea, users, business goals and requirements.",
  "Plan the experience, structure and technical approach.",
  "Develop the product with modern technologies and clean architecture.",
  "Problem solving.",
  "Debugging and improving existing systems.",
  "Test the product, fix bugs and improve performance.",
  "Deploy and refine the product.",
  "On-call response.",
  "Code review and feedback.",
  "Ready to respond when systems go down.",
  "Working under pressure.",
  "Clear communication above all.",
];

function About() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <section className="grain relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="grid-lines pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            <p className="eyebrow animate-rise">About</p>
            <h1 className="display animate-rise mt-6 text-[clamp(3rem,8vw,7rem)]">About Me</h1>
            <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="animate-rise lg:col-span-5" style={{ animationDelay: "200ms" }}>
                <img src="/images/maduka-jesse.jpg" alt="Maduka Jesse" className="aspect-[4/5] w-full max-w-md lg:max-w-none rounded-2xl object-cover" />
              </div>
              <div className="animate-rise lg:col-span-6 lg:col-start-7" style={{ animationDelay: "350ms" }}>
                <p className="text-2xl leading-snug tracking-tight md:text-3xl">
                  I'm Maduka Jesse, a Full-Stack Developer focused on building modern websites, mobile applications, APIs,
                  and complete digital products.
                </p>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  I work across the whole stack — from the interfaces people use on the web and on their phones, to the
                  backend services and databases behind them. I build real-world products with businesses and clients,
                  turning their requirements into software that works reliably and efficiently in production.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  I enjoy solving hard problems, and I keep learning so the products I ship stay modern and well built.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <SectionHead index="01" eyebrow="Experience" title="Experience" />
          <Reveal>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
              {stats.map(([n, l]) => (
                <div key={l} className="bg-background p-6 md:p-10">
                  <dt className="display text-5xl md:text-7xl">{n}</dt>
                  <dd className="eyebrow mt-4">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="mt-16 flex flex-col gap-6">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <article className="grid gap-8 rounded-2xl border border-border bg-card p-8 md:p-12 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium">
                      <span className="animate-pulse-dot h-2 w-2 rounded-full bg-primary" />
                      Currently Active
                    </span>
                    <h3 className="display mt-6 text-4xl md:text-5xl">{r.title}</h3>
                    <p className="mt-3 text-lg font-semibold">{r.org}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{r.meta}</p>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-lg leading-relaxed text-muted-foreground">{r.copy}</p>
                    <ul className="mt-8 grid gap-x-6 sm:grid-cols-2">
                      {r.items.map((it) => (
                        <li key={it} className="border-t border-border py-3 text-sm">{it}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <SectionHead
            index="02"
            eyebrow="Approach"
            title="How I Work"
            sub="Comfortable on real production systems and the responsibilities that come with them."
          />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {howIWork.map((t, i) => (
              <Reveal key={t} delay={(i % 4) * 80} className="h-full">
                <div className="group flex h-full flex-col bg-background p-7 transition-colors duration-300 hover:bg-card">
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-12 text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5">{t}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <SectionHead index="03" eyebrow="Tools" title="Tech Stack" />
          <Reveal>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {techStack.map((t) => (
                <TechChip key={t.name} {...t} />
              ))}
            </ul>
          </Reveal>
        </section>

        <Contact id="about-contact" />
      </main>
      <Footer />
    </div>
  );
}