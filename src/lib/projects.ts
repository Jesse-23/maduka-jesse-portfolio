export type ProjectCategory = "web" | "mobile";
export type ProjectFilter = "all" | ProjectCategory;

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "drivefleet",
    title: "DriveFleet",
    description: "A modern car rental platform for browsing and booking vehicles with ease.",
    category: "web",
    tags: ["TypeScript", "Express", "Node.js", "PostgreSQL"],
    image: "/images/drivefleet.jpeg",
    liveUrl: "https://drive-fleet.pxxl.click/",
    sourceUrl: "https://github.com/madukajesse",
    featured: true,
  },
  {
    slug: "luxe-bags",
    title: "Luxe Bags",
    description: "An elegant high-end storefront built for seamless shopping journeys.",
    category: "web",
    tags: ["TypeScript", "React", "Supabase", "Stripe"],
    image: "/images/luxe-bags.png",
    liveUrl: "https://luxe-bags.vercel.app/",
    sourceUrl: "https://github.com/madukajesse",
  },
  {
    slug: "propertyhub",
    title: "PropertyHub",
    description: "An all-in-one platform for property operations and tenant management.",
    category: "web",
    tags: ["React", "TypeScript", "Supabase", "Paystack"],
    image: "/images/propertyhub.png",
    liveUrl: "https://propertyhub-ecru.vercel.app/",
    sourceUrl: "https://github.com/Jesse-23",
  },
  {
    slug: "t-fx",
    title: "T-FX",
    description: "A forex trading platform for professional traders and beginners.",
    category: "web",
    tags: ["React", "Tailwind CSS", "Git"],
    image: "/images/t-fx.png",
    liveUrl: "https://t-fx.vercel.app/",
    sourceUrl: "https://github.com/Jesse-23",
  },
  {
    slug: "kyrian-tech",
    title: "Kyrian Tech",
    description: "A laptop store that helps people find the machine that fits their lifestyle.",
    category: "web",
    tags: ["React", "Node.js", "Tailwind CSS"],
    image: "/images/kyrian-tech.png",
    liveUrl: "https://kyrian-tech-frontend.vercel.app/",
    sourceUrl: "https://github.com/Jesse-23",
  },
  {
    slug: "aurea",
    title: "Auréa",
    description: "A clean, user-friendly website for a skincare brand.",
    category: "web",
    tags: ["JavaScript", "Tailwind CSS", "HTML/CSS"],
    image: "/images/skin-care-project.png",
    liveUrl: "https://skin-care-project-beta.vercel.app/",
    sourceUrl: "https://github.com/Jesse-23",
  },
  {
    slug: "fernworld",
    title: "Fernworld",
    description: "A modern, responsive front-end for a fashion brand.",
    category: "web",
    tags: ["JavaScript", "Tailwind CSS", "HTML/CSS"],
    image: "/images/fernworld.png",
    liveUrl: "https://fashion-project-ten.vercel.app/",
    sourceUrl: "https://github.com/Jesse-23",
  },
];

export function filterProjects(list: Project[], filter: ProjectFilter): Project[] {
  return filter === "all" ? list : list.filter((p) => p.category === filter);
}

export const links = {
  email: "madukajesse14@gmail.com",
  github: "https://github.com/madukajesse",
  x: "https://x.com/Dev_JesseMaduka",
  linkedin: "https://www.linkedin.com/in/jesse-maduka-b38183344/",
  whatsapp: "https://wa.link/0imrn5",
};
