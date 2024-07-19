import Link from "next/link";
import {
  HomeIcon,
  GlobeIcon,
  GitHubLogoIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { CldImage } from "next-cloudinary";

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
    nombre: "Pi-Dogs",
    descripcion:
      "Desarrollo de una aplicación para buscar raza de perros, filtrados por tamaño, peso, temperamento.",
    tecnologias: ["React", "Redux", "PostgreSQL", "CSS"],
    imagenes: ["Dogs"],
    despliegueUrl: "https://github.com/ZaidNc/PI-DOGS-HENRY",
    repositorioUrl: "https://github.com/ZaidNc/PI-DOGS-HENRY",
  },
  {
    id: 3,
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
  const [selectedProject, setSelectedProject] = useState(proyectos[0]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="text-center mb-8 p-6 md:p-10 bg-muted">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Algunos de mis trabajos
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Aquí puedes ver una selección de mis proyectos más recientes. Cada uno
          de ellos refleja mi pasión por el diseño y la tecnología.
        </p>
      </div>
      <div className="flex flex-1 w-full">
        <aside className="bg-background border-r border-border w-64 p-6 hidden md:block">
          <h2 className="text-lg font-medium mb-4">Mis Proyectos</h2>
          <nav className="space-y-2">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.id}
                onClick={() => setSelectedProject(proyecto)}
              >
                <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted cursor-pointer">
                  <HomeIcon className="w-5 h-5" />
                  <span>{proyecto.nombre}</span>
                </button>
              </div>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <div key={selectedProject.id}>
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">
                  {selectedProject.nombre}
                </h1>
                <p className="text-muted-foreground">
                  {selectedProject.descripcion}
                </p>
              </div>
              <div className="mb-8">
                {selectedProject.imagenes.map((imagen, index) => (
                  <CldImage
                    key={index}
                    src={imagen}
                    width="1000"
                    height="500"
                    crop="fill"
                    quality="auto"
                    alt={`Imagen ${index + 1}`}
                    className="rounded-md w-full h-auto"
                  />
                ))}
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Tecnologías Utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.tecnologias.map((tecnologia, index) => (
                      <div
                        key={index}
                        className="bg-primary text-white px-2 py-1 rounded-full text-xs"
                      >
                        {tecnologia}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Link href={selectedProject.despliegueUrl} passHref>
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white bg-primary border border-transparent rounded-md hover:bg-primary-dark">
                      <RocketIcon className="w-4 h-4 mr-2" />
                      Ver Despliegue
                    </button>
                  </Link>
                  <Link href={selectedProject.repositorioUrl} passHref>
                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white bg-primary border border-transparent rounded-md hover:bg-primary-dark">
                      <GitHubLogoIcon className="w-4 h-4 mr-2" />
                      Ver Repositorio
                    </button>
                  </Link>
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
