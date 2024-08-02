import Link from "next/link";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { CldImage } from "next-cloudinary";
import { FlipWords } from "@/app/components/ui/flip-words";
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";

export default function Hero() {
  const words = [
    "Desarrollador Full Stack",
    "Desarrollador Front - End",
    "Desarrollador Back - End"
  ];

  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col items-center justify-center relative"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 md:px-8 text-center lg:text-left">
        <div className="flex-shrink-0 mb-8 lg:mb-0">
          <CldImage
            src="Daniel Navarro"
            width="360"
            height="360"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover mx-auto lg:mx-0"
          />
        </div>
        <div className="text-left space-y-6 lg:flex-grow">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Daniel Navarro /{" "}
              <FlipWords words={words} className="text-black" />
            </h1>
            <p className="text-muted-foreground md:text-2xl lg:text-lg xl:text-2xl">
              <strong> Desarrollador Full Stack y diseñador UI / UX </strong> de
              Colombia, Bogotá.
            </p>
            <p className="text-muted-foreground md:text-2xl lg:text-lg xl:text-2xl">
              Con experiencia en crear soluciones digitales atractivas y
              funcionales
            </p>
          </div>
          <div className="flex gap-6 items-center justify-center lg:justify-start">
            <Link
              href="https://github.com/ZaidNc"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white text-black shadow transition-all duration-300 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-110"
              prefetch={false}
            >
              <FaGithub className="w-10 h-10 text-black" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/danielnavarrozt/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white text-black shadow transition-all duration-300 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-110"
              prefetch={false}
            >
              <FaLinkedin className="w-10 h-10 text-black" />
            </Link>
            <HoverBorderGradient>
              <a href="/CV.pdf" target="_blank" className="text-lg">
                Descargar CV
              </a>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
      <a
        href="#projects"
        className="absolute bottom-8 flex flex-col items-center"
      >
        <FaArrowDown className="w-8 h-8 text-black animate-bounce" />
        <span className="text-sm mt-2 text-black">Desplazarse hacia abajo</span>
      </a>
    </section>
  );
}
