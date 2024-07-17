import Link from "next/link";
import { HomeIcon, GlobeIcon } from "@radix-ui/react-icons";

export default function ProjectDetails() {
  // Simular datos de proyecto
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
      imagenes: [
        "/images/screenshot1.png",
        "/images/screenshot2.png",
        "/images/screenshot3.png",
        "/images/screenshot4.png",
      ],
      despliegueUrl: "https://fast-food-front-deploy.vercel.app/",
      repositorioUrl: "https://github.com/ZaidNc/PI-DOGS-HENRY",
    },
    {
      id: 2,
      nombre: "Pi-Dogs",
      descripcion:
        "Desarrollo de una aplicación para buscar raza de perros, filtrados por tamaño, peso, temperamento.",
      tecnologias: ["React", "Redux", "PostgreSQL", "CSS"],
      imagenes: [
        "/images/screenshot1.png",
        "/images/screenshot2.png",
        "/images/screenshot3.png",
        "/images/screenshot4.png",
      ],
      despliegueUrl: "https://github.com/ZaidNc/PI-DOGS-HENRY",
      repositorioUrl: "https://github.com/ZaidNc/PI-DOGS-HENRY",
    },
    {
      id: 3,
      nombre: "Rick and Morty App",
      descripcion:
        "Desarrollo de una aplicación para visualizar personajes de la serie Rick and Morty.",
      tecnologias: ["React", "Redux", "CSS"],
      imagenes: [
        "/images/screenshot1.png",
        "/images/screenshot2.png",
        "/images/screenshot3.png",
        "/images/screenshot4.png",
      ],
      despliegueUrl: "https://github.com/ZaidNc/Rick-and-Morty-Frond",
      repositorioUrl: "https://github.com/ZaidNc/Rick-and-Morty-Frond",
    },
  ];

  return (
    <div className="flex min-h-screen w-full">
      <aside className="bg-background border-r border-border w-64 p-6 hidden md:block">
        <h2 className="text-lg font-medium mb-4">Mis Proyectos</h2>
        <nav className="space-y-2">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id}>
              <Link href={`#${proyecto.id}`} passHref>
                <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted cursor-pointer">
                  <HomeIcon className="w-5 h-5" />
                  <span>{proyecto.nombre}</span>
                </button>
              </Link>
            </div>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} id={proyecto.id.toString()}>
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{proyecto.nombre}</h1>
                <p className="text-muted-foreground">{proyecto.descripcion}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-medium mb-4">
                    Capturas de Pantalla
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {proyecto.imagenes.map((imagen, index) => (
                      <img
                        key={index}
                        src={imagen}
                        width="300"
                        height="200"
                        alt={`Captura de pantalla ${index + 1}`}
                        className="rounded-md"
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-medium mb-4">
                    Detalles del Proyecto
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Descripción</h3>
                      <p className="text-muted-foreground">
                        {proyecto.descripcion}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        Tecnologías Utilizadas
                      </h3>
                      <ul className="list-disc pl-6 text-muted-foreground">
                        {proyecto.tecnologias.map((tecnologia, index) => (
                          <li key={index}>{tecnologia}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-4">
                      <Link href={proyecto.despliegueUrl} passHref>
                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white bg-primary border border-transparent rounded-md hover:bg-primary-dark">
                          <GlobeIcon className="w-4 h-4 mr-2" />
                          Ver Despliegue
                        </button>
                      </Link>
                      <Link href={proyecto.repositorioUrl} passHref>
                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-primary border border-transparent rounded-md hover:bg-primary-light">
                          <GlobeIcon className="w-4 h-4 mr-2" />
                          Ver Repositorio
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-200" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
