import Link from "next/link";
import { useState } from "react";
import { CldImage } from "next-cloudinary";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

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

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handlePrevProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1
    );
  };

  const handleNextProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === proyectos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedProject = proyectos[selectedProjectIndex];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-background p-4">
      <div className="w-full bg-muted">
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Algunos de mis trabajos
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Aquí puedes ver una selección de mis proyectos más recientes. Cada
            uno de ellos refleja mi pasión por el diseño y la tecnología.
          </p>
        </div>
      </div>

      <div className="flex flex-grow items-center justify-center pt-8">
        <div className="relative w-full max-w-xl p-6 bg-card bg-opacity-90 rounded-lg shadow-lg border border-border transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold mb-2">
              {selectedProject.nombre}
            </h1>
            <p className="text-muted-foreground mb-4">
              {selectedProject.descripcion}
            </p>
            <div className="mb-4">
              {selectedProject.imagenes.map((imagen, index) => (
                <div
                  key={index}
                  className="relative w-full h-64 overflow-hidden rounded-md"
                >
                  <CldImage
                    src={imagen}
                    width="800"
                    height="600"
                    crop="fill"
                    quality="auto"
                    alt={`Imagen ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-heading font-medium mb-2">
                  Tecnologías Utilizadas
                </h3>
                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                  {selectedProject.tecnologias.map((tecnologia, index) => (
                    <div
                      key={index}
                      className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs transition-colors duration-300 hover:bg-secondary hover:text-secondary-foreground"
                    >
                      {tecnologia}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Link
                  href={selectedProject.despliegueUrl}
                  passHref
                  legacyBehavior
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-primary-foreground bg-primary border border-transparent rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
                  >
                    <ChevronRightIcon className="w-4 h-4 mr-2" />
                    Ver Despliegue
                  </a>
                </Link>
                <Link
                  href={selectedProject.repositorioUrl}
                  passHref
                  legacyBehavior
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-primary-foreground bg-primary border border-transparent rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
                  >
                    <ChevronRightIcon className="w-4 h-4 mr-2" />
                    Ver Repositorio
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
        <button
          onClick={handlePrevProject}
          className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
        <button
          onClick={handleNextProject}
          className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
