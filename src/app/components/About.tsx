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
  {
    title: "Git",
    link: "https://git-scm.com/",
    thumbnail: "/Git-logo.svg",
  },
  {
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    thumbnail: "/HTML5_logo_and_wordmark.svg",
  },
  {
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    thumbnail: "/CSS3_logo_and_wordmark.svg",
  },
  {
    title: "Redux",
    link: "https://redux.js.org/",
    thumbnail: "/Redux.png",
  },
  {
    title: "PostgreSQL",
    link: "https://www.postgresql.org/",
    thumbnail: "/Postgresql_elephant.svg",
  },
  {
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    thumbnail: "/JavaScript-logo.png",
  },
  {
    title: "Material UI",
    link: "https://mui.com/",
    thumbnail: "/material-ui-1.svg",
  },
];

export default function About() {
  return (
    <section id="about" className="w-full">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <HeroParallax products={technologies} />
      </div>
    </section>
  );
}
