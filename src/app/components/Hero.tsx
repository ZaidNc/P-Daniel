import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CldImage } from "next-cloudinary";

export default function Hero() {
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
              Daniel Navarro
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
              className="inline-flex items-center justify-center rounded-full bg-white text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <FaGithub className="w-8 h-8 text-black" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/danielnavarrozt/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <FaLinkedin className="w-8 h-8 text-black" />
            </Link>
            <Link
              href="/CV.pdf"
              download="CV.pdf"
              className="inline-flex items-center justify-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md shadow-sm hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Descargar CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
