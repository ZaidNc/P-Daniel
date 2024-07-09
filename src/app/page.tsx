"use client";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaServer,
  FaLaptopCode,
  FaTools,
  FaGreaterThan,
} from "react-icons/fa";
import { CldImage } from "next-cloudinary";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
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
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary-foreground text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <FaGithub className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/danielnavarrozt/"
            target="_blank"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary-foreground text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <FaLinkedin className="w-4 h-4" />
          </Link>
        </div>
      </header>
      <main className="flex-1 pt-20">
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
                  Desarrollador Full Stack y diseñador gráfico con experiencia
                  en crear soluciones digitales atractivas y funcionales.
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
        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Algunos de mis trabajos
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Aquí puedes ver una selección de mis proyectos más recientes.
                Cada uno de ellos refleja mi pasión por el diseño y la
                tecnología.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Link href="#" className="group relative" prefetch={false}>
                <div className="rounded-lg overflow-hidden relative">
                  <img
                    src="/FastFood.jpeg"
                    alt="Project 1"
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                    <div className="text-left text-white p-4 w-full">
                      <h3 className="text-lg font-bold mb-2 group-hover:underline">
                        FastFood App
                      </h3>
                      <p className="text-sm mt-2">
                        Desarrollo de una aplicación para facilitar la compra de
                        alimentos.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          Node.js
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          Express
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          PostgreSQL
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          React
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          Redux
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          CSS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group relative" prefetch={false}>
                <div className="rounded-lg overflow-hidden relative">
                  <img
                    src="/FastFood.jpeg"
                    alt="Project 2"
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                    <div className="text-left text-white p-4 w-full">
                      <h3 className="text-lg font-bold mb-2 group-hover:underline">
                        Pi Dogs
                      </h3>
                      <p className="text-sm mt-2">Api de Dogs xd</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          Node.js
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          Express
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          PostgreSQL
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          React
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          Redux
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          CSS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group relative" prefetch={false}>
                <div className="rounded-lg overflow-hidden relative">
                  <img
                    src="/FastFood.jpeg"
                    alt="Project 3"
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                    <div className="text-left text-white p-4 w-full">
                      <h3 className="text-lg font-bold mb-2 group-hover:underline">
                        Api Rick And Morty
                      </h3>
                      <p className="text-sm mt-2">Api de Rick And Morty xd</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          Node.js
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          Express
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          PostgreSQL
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          React
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          Redux
                        </div>
                        <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                          CSS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        ;
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-background/80"
        >
          <div className="container mx-auto  grid items-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Sobre mí
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Desarrollador Full Stack
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
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <FaLaptopCode className="w-5 h-5 text-primary" />
                    <span>Frontend</span>
                  </div>
                  <ul className="grid gap-4 mt-2">
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>JavaScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>HTML</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>CSS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>Tailwind</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>React</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>Material UI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>Redux</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <FaServer className="w-5 h-5 text-primary" />
                    <span>Backend</span>
                  </div>
                  <ul className="grid gap-4 mt-2">
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>Node.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>PostgreSQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>MongoDB</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>SQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>Mongoose</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>Cloudinary</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>MySQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>Sequelize</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <FaTools className="w-5 h-5 text-primary" />
                    <span>Herramientas Mágicas</span>
                  </div>
                  <ul className="grid gap-4 mt-2">
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>Visual Studio</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>Figma</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>Graphic Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>Postman</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>UX/UI Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>Git</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>GitHub</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaGreaterThan className="w-5 h-5 text-primary" />
                      <span>PL/SQL</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32  bg-muted"
        >
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted  py-1 text-sm">
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
