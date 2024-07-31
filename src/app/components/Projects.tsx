"use client";
import { CldImage } from "next-cloudinary";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { RocketIcon } from "@radix-ui/react-icons";

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
      "Tailwind CSS",
    ],
    imagenes: ["FastFood"],
    despliegueUrl: "https://fast-food-front-deploy.vercel.app/",
    repositorioUrl: "https://github.com/ProyectoFinalH",
  },
  {
    id: 2,
    nombre: "Kataretes",
    descripcion: "Landing page para ventas de productos hechos de mostacilla.",
    tecnologias: ["Next.js", "Radix UI", "Lucide Icons", "Tailwind CSS"],
    imagenes: ["Kataretess"],
    despliegueUrl: "https://kataretes.vercel.app/",
    repositorioUrl: "https://github.com/ZaidNc/Kataretes",
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
  },
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
      <div className="text-center mb-8  p-6 md:p-10 bg-muted">
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
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <RocketIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.nombre}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.nombre}-${id}`}>
                <CldImage
                  priority
                  width={200}
                  height={200}
                  src={active.imagenes[0]}
                  alt={active.nombre}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.nombre}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.nombre}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.descripcion}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.descripcion}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.nombre}-${id}`}
                    href={active.despliegueUrl}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    Ver Proyecto
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.tecnologias.join(", ")}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {proyectos.map((proyecto, index) => (
          <motion.div
            layoutId={`card-${proyecto.nombre}-${id}`}
            key={`card-${proyecto.nombre}-${id}`}
            onClick={() => setActive(proyecto)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${proyecto.nombre}-${id}`}>
                <CldImage
                  width={100}
                  height={100}
                  src={proyecto.imagenes[0]}
                  alt={proyecto.nombre}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${proyecto.nombre}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
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
              className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white hidden md:block"
            >
              Ver Proyecto
            </motion.a>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
