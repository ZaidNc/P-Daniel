import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { CldImage } from "next-cloudinary";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export default function ProjectDetails() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="bg-background border-r border-border w-64 p-6 hidden md:block">
        <h2 className="text-lg font-medium mb-4">Mis Proyectos</h2>
        <nav className="space-y-2">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            prefetch={false}
          >
            <HomeIcon className="w-5 h-5" />
            <span>Proyecto 1</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            prefetch={false}
          >
            <BookOpenIcon className="w-5 h-5" />
            <span>Proyecto 2</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            prefetch={false}
          >
            <LayoutPanelLeftIcon className="w-5 h-5" />
            <span>Proyecto 3</span>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">FastFood App</h1>
            <p className="text-muted-foreground">
              Desarrollo de una aplicación para facilitar la compra de
              alimentos.
            </p>
          </div>
          <div className="mb-8">
            <CldImage
              src="FastFood"
              width="1000"
              height="500"
              crop="fill"
              quality="auto"
              alt="FastFood App"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Tecnologías Utilizadas</h2>
            <div className="flex flex-wrap gap-2">
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
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Descripción del Proyecto</h2>
            <p className="text-muted-foreground">
              Desarrollo de una aplicación para facilitar la compra de
              alimentos. Este proyecto incluye una descripción detallada de lo
              que se hizo y los desafíos enfrentados durante el proceso de
              desarrollo.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Enlaces</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://fast-food-front-deploy.vercel.app/"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Visitar la Aplicación
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/ZaidNc/PI-DOGS-HENRY"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Ver Código en GitHub
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <Link href="/projects">
              <Button>Regresar a Todos los Proyectos</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
