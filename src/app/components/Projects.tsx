import Link from "next/link";
import { CldImage } from "next-cloudinary";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Algunos de mis trabajos
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Aquí puedes ver una selección de mis proyectos más recientes. Cada
            uno de ellos refleja mi pasión por el diseño y la tecnología.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="group relative">
            <Link
              href="https://fast-food-front-deploy.vercel.app/"
              target="_blank"
            >
              <div className="rounded-lg overflow-hidden relative">
                <CldImage
                  src="FastFood"
                  width="1000"
                  height="500"
                  crop="fill"
                  quality="auto"
                  alt="FastFood App"
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
                        Tailwind CSS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="group relative">
            <Link
              href="https://github.com/ZaidNc/PI-DOGS-HENRY"
              target="_blank"
            >
              <div className="rounded-lg overflow-hidden relative">
                <CldImage
                  src="Dogs"
                  width="1000"
                  height="500"
                  crop="fill"
                  quality="auto"
                  alt="Pi-Dogs"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                  <div className="text-left text-white p-4 w-full">
                    <h3 className="text-lg font-bold mb-2 group-hover:underline">
                      Pi-Dogs
                    </h3>
                    <p className="text-sm mt-2">
                      Desarrollo de una aplicación para buscar raza de perros,
                      filtrados por tamaño, peso, temperamento
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                        React
                      </div>
                      <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                        Redux
                      </div>
                      <div className="bg-primary text-white px-2 py-1 rounded-full text-xs">
                        PostgreSQL
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

          <div className="group relative">
            <Link
              href="https://github.com/ZaidNc/Rick-and-Morty-Frond"
              target="_blank"
            >
              <div className="rounded-lg overflow-hidden relative">
                <CldImage
                  src="RickAndMorty"
                  width="1000"
                  height="500"
                  crop="fill"
                  quality="auto"
                  alt="Rick and Morty App"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                  <div className="text-left text-white p-4 w-full">
                    <h3 className="text-lg font-bold mb-2 group-hover:underline">
                      Rick and Morty App
                    </h3>
                    <p className="text-sm mt-2">
                      Desarrollo de una aplicación para visualizar personajes de
                      la serie Rick and Morty
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
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

        <div className="mt-8 text-center">
          <Link href="/ProjectDetails">
            <button className="inline-block px-6 py-3 text-sm font-medium leading-5 text-white bg-primary border border-transparent rounded-md hover:bg-primary-dark">
              Ver detalles de los proyectos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
