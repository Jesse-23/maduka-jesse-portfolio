import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  siExpress,
  siFigma,
  siGit,
  siJavascript,
  siMongodb,
  siNestjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siReact,
  siTailwindcss,
  siTypescript,
  siWhatsapp,
  siGithub,
  siX,
} from "simple-icons";
import { links } from "@/lib/projects";

/* ---------- helpers ---------- */

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Arrow() {
  return (
    <span aria-hidden className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
      ↗
    </span>
  );
}

export function Btn({ href, children, variant = "solid" }: { href: string; children: ReactNode; variant?: "solid" | "ghost" }) {
  const external = href.startsWith("http") || href.startsWith("mailto");
  const base = "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:shadow-soft hover:-translate-y-0.5"
      : "border border-border text-foreground hover:bg-secondary";
  return (
    <a href={href} className={`${base} ${styles}`} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}
    </a>
  );
}

export function SectionHead({ index, eyebrow, title, sub }: { index: string; eyebrow: string; title: ReactNode; sub?: string }) {
  return (
    <Reveal className="mb-14 grid gap-6 border-t border-border pt-8 md:grid-cols-12">
      <p className="eyebrow md:col-span-3">
        {index} — {eyebrow}
      </p>
      <div className="md:col-span-9">
        <h2 className="display text-4xl md:text-6xl">{title}</h2>
        {sub && <p className="mt-5 max-w-xl text-lg text-muted-foreground">{sub}</p>}
      </div>
    </Reveal>
  );
}

/* ---------- personal photo ---------- */

/** Replace this file with your real photo: public/images/jesse-maduka.jpg */
export const PHOTO_SRC = "/images/jesse-maduka.jpg";

export function Portrait({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className={`relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-2.5 shadow-soft ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-secondary">
        {!failed ? (
          <img
            src={PHOTO_SRC}
            alt="Maduka Jesse, Full-Stack Developer"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
            <span className="display text-6xl text-primary/25">MJ</span>
            <span className="eyebrow">Photo coming soon</span>
          </div>
        )}
      </div>
    </figure>
  );
}

/* ---------- tech icons ---------- */

type SI = { path: string; title: string };
const restIcon: SI = {
  title: "REST APIs",
  // simple bracketed-braces glyph, drawn in the same 24px box
  path: "M7 3C4.8 3 4 4.2 4 6v3c0 1-.6 2-2 2v2c1.4 0 2 1 2 2v3c0 1.8.8 3 3 3h1v-2H7c-.8 0-1-.4-1-1v-3.4C6 15 5.4 12.6 4.6 12 5.4 11.4 6 9 6 8.4V5c0-.6.2-1 1-1h1V3H7zm10 0h-1v2h1c.8 0 1 .4 1 1v3.4c0 .6.6 2 1.4 2.6-.8.6-1.4 2-1.4 2.6V18c0 .6-.2 1-1 1h-1v2h1c2.2 0 3-1.2 3-3v-3c0-1 .6-2 2-2v-2c-1.4 0-2-1-2-2V6c0-1.8-.8-3-3-3zM9 11h2v2H9zm4 0h2v2h-2z",
};

export const techStack: { name: string; icon: SI }[] = [
  { name: "React", icon: siReact },
  { name: "TypeScript", icon: siTypescript },
  { name: "JavaScript", icon: siJavascript },
  { name: "Tailwind", icon: siTailwindcss },
  { name: "Node.js", icon: siNodedotjs },
  { name: "NestJS", icon: siNestjs },
  { name: "Express", icon: siExpress },
  { name: "REST APIs", icon: restIcon },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "MongoDB", icon: siMongodb },
  { name: "Git", icon: siGit },
  { name: "Postman", icon: siPostman },
  { name: "Figma", icon: siFigma },
  { name: "Prisma", icon: siPrisma },
];

export function Icon({ icon, className = "h-5 w-5" }: { icon: SI; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d={icon.path} />
    </svg>
  );
}

export function TechChip({ name, icon }: { name: string; icon: SI }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-card">
      <Icon icon={icon} className="h-5 w-5 shrink-0 opacity-80" />
      {name}
    </li>
  );
}

/* ---------- nav ---------- */

export const navItems = [
  ["Work", "/#work"],
  ["Services", "/#services"],
  ["About", "/about"],
  ["Contact", "/#contact"],
] as const;

function NavLink({ href, className, children, onClick }: { href: string; className: string; children: ReactNode; onClick?: () => void }) {
  if (href === "/about") {
    return (
      <Link to="/about" className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/85 py-3 backdrop-blur-md" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="/#top" className="text-[15px] font-semibold tracking-tight">
          Maduka Jesse<span className="text-muted-foreground">.</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navItems.map(([l, h]) => (
            <NavLink key={h} href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </NavLink>
          ))}
          <a
            href="/#contact"
            className="group inline-flex items-center gap-1.5 rounded-full border border-primary px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Let's Work Together <Arrow />
          </a>
        </nav>
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="animate-rise fixed inset-x-0 top-16 h-[calc(100vh-4rem)] bg-background px-6 pt-10 md:hidden">
          {navItems.map(([l, h], i) => (
            <NavLink
              key={h}
              href={h}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-border py-5 text-4xl font-semibold tracking-tight"
            >
              {l} <span className="eyebrow">0{i + 1}</span>
            </NavLink>
          ))}
          <div className="mt-10">
            <Btn href="/#contact">Let's Work Together <Arrow /></Btn>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- contact & footer ---------- */

export function Contact({ id = "contact" }: { id?: string }) {
  return (
    <section id={id} className="px-4 pb-4 md:px-6 md:pb-6">
      <div className="grain overflow-hidden rounded-3xl bg-primary px-6 py-24 text-primary-foreground md:px-16 md:py-36">
        <Reveal className="relative mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] opacity-60">Contact</p>
          <h2 className="display mt-8 text-[clamp(3rem,9vw,8rem)]">
            Have an idea
            <br />
            worth building?
          </h2>
          <p className="mt-8 text-xl opacity-75">Let's turn it into something real.</p>
          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Start a Project <Arrow />
            </a>
            <a
              href={`mailto:${links.email}`}
              className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Email Me <Arrow />
            </a>
          </div>
          <p className="mt-10 font-mono text-sm opacity-60">{links.email}</p>
        </Reveal>
      </div>
    </section>
  );
}

const linkedinIcon: SI = {
  title: "LinkedIn",
  path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
};
const mailIcon: SI = {
  title: "Email",
  path: "M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 2.4V18h18V6.4l-9 6.3-9-6.3zM4.6 6 12 11.2 19.4 6H4.6z",
};

export function Footer() {
  const social: [string, string, SI][] = [
    ["WhatsApp", links.whatsapp, siWhatsapp],
    ["GitHub", links.github, siGithub],
    ["X", links.x, siX],
    ["LinkedIn", links.linkedin, linkedinIcon],
    ["Email", `mailto:${links.email}`, mailIcon],
  ];
  return (
    <footer className="mx-auto max-w-7xl px-6 py-14 md:px-10">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-semibold">Maduka Jesse</p>
          <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
        </div>
        <nav className="flex flex-col gap-2 text-sm md:col-span-3" aria-label="Footer">
          {navItems.map(([l, h]) => (
            <NavLink key={h} href={h} className="text-muted-foreground hover:text-foreground">
              {l}
            </NavLink>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm md:col-span-4">
          {social.map(([l, h, icon]) => (
            <a key={l} href={h} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Icon icon={icon} className="h-3.5 w-3.5" />
              {l} <Arrow />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">© 2026 Maduka Jesse. All rights reserved.</p>
    </footer>
  );
}
