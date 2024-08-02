"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Projects } from './components/Projects';
import About from "./components/About";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
}