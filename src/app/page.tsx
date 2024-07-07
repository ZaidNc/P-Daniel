import Link from "next/link";
import {
  FaMountain,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaPaintBrush,
  FaLayerGroup,
  FaMicrochip,
} from "react-icons/fa";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background/80 px-4 lg:px-6 h-12 flex items-center shadow-sm rounded-xl fixed top-5 left-0 right-0 z-10 transition-all duration-300 max-w-2xl mx-auto w-full">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <FaMountain className="h-5 w-5" />
          <span className="sr-only">Mi Portafolio</span>
        </Link>
        <div className="flex w-full justify-center">
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Sobre mí
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Proyectos
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contacto
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex gap-2">
          <Link
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <FaGithub className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <FaLinkedin className="w-4 h-4" />
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className=" w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <img
                src="../../public/next.svg"
                width="300"
                height="300"
                alt="Profile"
                className="mx-auto rounded-full w-40 h-40 object-cover"
              />
              <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Daniel Navarro
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Desarrollador Full Stak con experiencia en crear soluciones
                  digitales atractivas y funcionales.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <FaLinkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container grid gap-8 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Algunos de mis trabajos
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Aquí puedes ver una selección de mis proyectos más recientes.
                Cada uno de ellos refleja mi pasión por el diseño y la
                tecnología.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="#" className="group" prefetch={false}>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Project 1"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold group-hover:underline">
                    Proyecto 1
                  </h3>
                  <p className="text-muted-foreground">
                    Descripción del proyecto 1
                  </p>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Project 2"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold group-hover:underline">
                    Proyecto 2
                  </h3>
                  <p className="text-muted-foreground">
                    Descripción del proyecto 2
                  </p>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Project 3"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold group-hover:underline">
                    Proyecto 3
                  </h3>
                  <p className="text-muted-foreground">
                    Descripción del proyecto 3
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32  bg-background/80"
        >
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Sobre mí
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Desarrollador Full Stak
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Soy un profesional creativo y apasionado por la tecnología.
                Disfruto creando soluciones digitales que combinan un diseño
                elegante con una funcionalidad excepcional. Me encantan los
                desafíos y siempre estoy buscando aprender cosas nuevas.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Habilidades
              </div>
              <ul className="grid gap-4">
                <li className="flex items-center gap-2">
                  <FaCode className="w-5 h-5 text-primary" />
                  <span>Desarrollo web</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaPaintBrush className="w-5 h-5 text-primary" />
                  <span>Diseño gráfico</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaLayerGroup className="w-5 h-5 text-primary" />
                  <span>UI/UX</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaMicrochip className="w-5 h-5 text-primary" />
                  <span>Programación</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32  bg-muted"
        >
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Contacto
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trabajemos juntos
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Si tienes un proyecto en mente y crees que puedo ayudarte,
                estaré encantado de escucharte. ¡Hablemos!
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <form className="grid gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <textarea
                  placeholder="Mensaje"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                  rows={4}
                ></textarea>
                <button
                  type="submit"
                  className="inline-flex w-max items-center justify-center rounded-md border border-primary bg-background px-4 py-2 text-sm font-medium text-primary shadow transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
