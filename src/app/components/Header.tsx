import Link from "next/link";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { CldImage } from "next-cloudinary";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export default function Header() {
  return (
    <header className="bg-primary/90 px-4 lg:px-6 h-12 flex items-center shadow-sm rounded-xl fixed top-5 left-0 right-0 z-10 transition-all duration-300 max-w-2xl mx-auto w-full">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <CldImage
          src="ZT Icon"
          width="24"
          height="24"
          alt="ZT Icon"
          className="h-5 w-5 text-primary-foreground"
        />
        <span className="sr-only">Mi Portafolio</span>
      </Link>
      <div className="flex w-full justify-center">
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Sobre mí
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Proyectos
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Contacto
          </Link>
        </nav>
      </div>
      <div className="ml-auto flex gap-2">
        <Link
          href="https://github.com/ZaidNc"
          target="_blank"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary-foreground text-sm font-medium text-primary shadow transform transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          <GitHubLogoIcon className="w-4 h-4" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/danielnavarrozt/"
          target="_blank"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary-foreground text-sm font-medium text-primary shadow transform transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          <LinkedInLogoIcon className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
