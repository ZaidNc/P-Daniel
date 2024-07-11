import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CldImage } from "next-cloudinary";
import { FlipWords } from "@/app/components/ui/flip-words";
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";

export default function Hero() {
  const words = [
    "Desarrollador Full Stack",
    "Desarrollador Front - End",
    "Diseñador Gráfico",
  ];

  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4 md:px-6">
        <div className="flex-shrink-0">
          <CldImage
            src="Daniel Navarro"
            width="300"
            height="300"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
        <div className="text-left space-y-4 lg:flex-grow">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Daniel Navarro /{" "}
              <FlipWords words={words} className="text-black" />
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Desarrollador Full Stack y diseñador gráfico con experiencia en
              crear soluciones digitales atractivas y funcionales.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Link
              href="https://github.com/ZaidNc"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white text-black shadow transition-all duration-300 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-110"
              prefetch={false}
            >
              <FaGithub className="w-8 h-8 text-black" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/danielnavarrozt/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white text-black shadow transition-all duration-300 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-110"
              prefetch={false}
            >
              <FaLinkedin className="w-8 h-8 text-black" />
            </Link>
            <HoverBorderGradient>
              <a href="/CV.pdf" target="_blank">
                Descargar CV
              </a>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </section>
  );
}
