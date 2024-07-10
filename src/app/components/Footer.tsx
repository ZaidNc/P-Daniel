export default function Footer() {
  return (
    <footer id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-6 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trabajemos juntos
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Si tienes un proyecto en mente y crees que puedo ayudarte, estaré
              encantado de escucharte. ¡Hablemos!
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <form
              action="https://formsubmit.co/danielkristopher0563@gmail.com"
              method="POST"
              className="grid gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <textarea
                name="message"
                placeholder="Mensaje"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                rows={4}
                required
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
      </div>
    </footer>
  );
}
