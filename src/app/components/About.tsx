import { HeroParallax } from "@/app/components/ui/hero-parallax";

const technologies = [
  {
    title: "React",
    link: "https://reactjs.org/",
    thumbnail: "/React-icon.svg",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org/",
    thumbnail: "/next.svg",
  },
  {
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    thumbnail: "/Tailwind_CSS_Logo.svg",
  },
  {
    title: "Node.js",
    link: "https://nodejs.org/",
    thumbnail: "/Node.js_logo.svg",
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
    thumbnail: "/Typescript_logo_2020.svg",
  },
  // Agrega más tecnologías según sea necesario
];

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <HeroParallax products={technologies} />
      </div>
    </section>
  );
}