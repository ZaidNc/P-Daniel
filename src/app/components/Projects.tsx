"use client";
import { CldImage } from "next-cloudinary";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { CrossCircledIcon } from "@radix-ui/react-icons";

const proyectos = [
  {
    id: 1,
    nombre: "FastFood App",
    descripcion:
      "Desarrollo de una aplicación para facilitar la compra de alimentos.",
    tecnologias: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "React",
      "Redux",
      "Tailwind CSS"
    ],
    imagenes: ["FastFood"],
    despliegueUrl: "https://fast-food-front-deploy.vercel.app/",
    repositorioUrl: "https://github.com/ProyectoFinalH",
    descripcionCompleta:
      "Es una aplicación desarrollada por un equipo de seis personas para facilitar la compra de alimentos de varios restaurantes en una sola plataforma. Permite a los usuarios registrarse con Google, seleccionar restaurantes y productos, pagar con MercadoPago y calificar sus compras. Los restaurantes pueden gestionar su información, actualizar menús y controlar la disponibilidad de productos, mientras que los administradores tienen control total sobre usuarios, restaurantes y productos. La aplicación está diseñada para ofrecer una experiencia fluida tanto para los usuarios como para los restaurantes y administradores."
  },
  {
    id: 2,
    nombre: "Kataretes",
    descripcion: "Landing page para ventas de productos hechos de mostacilla.",
    tecnologias: ["Next.js", "Radix UI", "Lucide Icons", "Tailwind CSS"],
    imagenes: ["Kataretess"],
    despliegueUrl: "https://kataretes.vercel.app/",
    repositorioUrl: "https://github.com/ZaidNc/Kataretes",
    descripcionCompleta:
      "Kataretes es una plataforma en línea dedicada a ofrecer una colección exclusiva de aretes artesanales elaborados con mostacilla. Nuestro sitio web permite a los usuarios explorar, seleccionar y comprar aretes únicos, además de conocer más sobre nuestra tienda y contactarnos directamente."
  },
  {
    id: 3,
    nombre: "Pi-Dogs",
    descripcion:
      "Desarrollo de una aplicación para buscar raza de perros, filtrados por tamaño, peso, temperamento.",
    tecnologias: ["React", "Redux", "PostgreSQL", "CSS"],
    imagenes: ["Dogs"],
    despliegueUrl: "https://github.com/ZaidNc/PI-DOGS-HENRY",
    repositorioUrl: "https://github.com/ZaidNc/PI-DOGS-HENRY",
    descripcionCompleta: ""
  },
  {
    id: 4,
    nombre: "Rick and Morty App",
    descripcion:
      "Desarrollo de una aplicación para visualizar personajes de la serie Rick and Morty.",
    tecnologias: ["React", "Redux", "CSS"],
    imagenes: ["RickAndMorty"],
    despliegueUrl: "https://github.com/ZaidNc/Rick-and-Morty-Frond",
    repositorioUrl: "https://github.com/ZaidNc/Rick-and-Morty-Frond",
    descripcionCompleta: ""
  }
];

export function Projects() {
  const [active, setActive] = useState<
    (typeof proyectos)[number] | boolean | null
  >(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div className="text-center mb-8 p-6 md:p-10 bg-muted fade-in-down">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Algunos de mis trabajos
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Aquí puedes ver una selección de mis proyectos más recientes. Cada uno
          de ellos refleja mi pasión por el diseño y la tecnología.
        </p>
      </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.nombre}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8"
              onClick={() => setActive(null)}
            >
              <CrossCircledIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.nombre}-${id}`}
              ref={ref}
              className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.nombre}-${id}`}>
                <CldImage
                  priority
                  width={1000}
                  height={900}
                  src={active.imagenes[0]}
                  alt={active.nombre}
                  className="w-full h-100 object-cover object-left"
                />
              </motion.div>

              <div>
                <div className="flex flex-col justify-between items-start p-4">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.nombre}-${id}`}
                      className="font-bold text-3xl text-neutral-700 dark:text-neutral-200 mb-2"
                    >
                      {active.nombre}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.descripcion}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 mb-4"
                    >
                      {active.descripcion}
                    </motion.p>
                    <motion.p
                      layoutId={`full-description-${active.descripcionCompleta}-${id}`}
                      className="text-lg text-neutral-600 dark:text-neutral-400 mb-6"
                    >
                      {active.descripcionCompleta}
                    </motion.p>
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <motion.a
                      layoutId={`button-project-${active.nombre}-${id}`}
                      href={active.despliegueUrl}
                      target="_blank"
                      className="inline-flex h-9 items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Visitar Sitio
                    </motion.a>
                    <motion.a
                      layoutId={`button-repo-${active.nombre}-${id}`}
                      href={active.repositorioUrl}
                      target="_blank"
                      className="inline-flex h-9 items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Github
                    </motion.a>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base flex flex-wrap gap-2 h-40 md:h-fit pb-10 items-center overflow-auto dark:text-neutral-400"
                  >
                    <span className="font-bold">Tecnologías:</span>
                    {active.tecnologias.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-100 dark:bg-neutral-800 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-5xl mx-auto w-full gap-4">
        {proyectos.map((proyecto, index) => (
          <motion.div
            layoutId={`card-${proyecto.nombre}-${id}`}
            key={`card-${proyecto.nombre}-${id}`}
            onClick={() => setActive(proyecto)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-xl cursor-pointer transition-colors duration-300"
          >
            <div className="flex gap-4 flex-col md:flex-row w-full">
              <motion.div
                layoutId={`image-${proyecto.nombre}-${id}`}
                className="w-full md:w-2/5"
              >
                <CldImage
                  width={1000}
                  height={900}
                  src={proyecto.imagenes[0]}
                  alt={proyecto.nombre}
                  className="h-30 w-full rounded-lg object-cover object-left"
                />
              </motion.div>
              <div className="flex-1 p-4">
                <motion.h3
                  layoutId={`title-${proyecto.nombre}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-600 text-center md:text-left"
                >
                  {proyecto.nombre}
                </motion.h3>
                <motion.p
                  layoutId={`description-${proyecto.descripcion}-${id}`}
                  className="text-neutral-500 dark:text-neutral-400 hidden md:block"
                >
                  {proyecto.descripcion}
                </motion.p>
              </div>
            </div>
            <motion.a
              layoutId={`button-${proyecto.nombre}-${id}`}
              href={proyecto.despliegueUrl}
              target="_blank"
              className="px-4 py-3 text-sm rounded-full font-bold bg-white dark:bg-neutral-900 text-white hidden md:block"
            >
              Ver
            </motion.a>
          </motion.div>
        ))}
      </ul>
    </>
  );
}