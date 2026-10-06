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
    slug: "harbideck-aluminium",
    title: "Harbideck Aluminium",
    description: "A professional corporate platform showcasing premium aluminium fabrication services, product catalogs, and client portfolios.",
    category: "web",
    tags: ["TypeScript", "Express", "Node.js", "PostgreSQL"],
    image: "/images/harbideck-aluminium.png",
    liveUrl: "https://harbideck-alumium.vercel.app/",
    sourceUrl: "https://github.com/madukajesse",
    featured: true,
  },
  {
    slug: "onyintex-generators",
    title: "Onyintex Generators",
    description: "A robust e-commerce and showcase platform for high-performance power generation equipment and industrial generators.",
    category: "web",
    tags: ["TypeScript", "React", "Supabase", "Stripe"],
    image: "/images/onyitex-generators.png",
    liveUrl: "https://onyitex-generators.vercel.app/",
    sourceUrl: "https://github.com/madukajesse",
  },
  {
    slug: "saviour-furnitures",
    title: "Saviour Furnitures",
    description: "A modern e-commerce platform offering premium, handcrafted furniture for contemporary living spaces and offices.",
    category: "web",
    tags: ["React", "Node.js", "Tailwind CSS"],
    image: "/images/saviour-furnitures.png",
    liveUrl: "https://saviour-furnitures.vercel.app/",
    sourceUrl: "https://github.com/Jesse-23",
  },
  {
    slug: "leo9homesandfurnitures",
    title: "Leo9 Homes and Furnitures",
    description: "A comprehensive digital storefront and management system for luxury home interiors, décor, and custom furniture collections.",
    category: "web",
    tags: ["React", "TypeScript", "Supabase", "Paystack"],
    image: "/images/leo9homesandfurnitures.png",
    liveUrl: "https://leo9-homesnandfurniture-gamma.vercel.app/",
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