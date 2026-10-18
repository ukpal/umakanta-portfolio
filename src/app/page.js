
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundEffects from "@/components/BackgroundEffects";
import { ArrowUp, Code2, Database, Server } from "lucide-react";
import site from "@/data/site";
import Image from "next/image";

const focusAreas = [
  {
    number: "01",
    title: "Backend engineering",
    description:
      "APIs, authentication, business logic, and reliable services.",
    icon: Server,
  },
  {
    number: "02",
    title: "Data & performance",
    description:
      "Database design, SQL optimization, and caching strategies.",
    icon: Database,
  },
  {
    number: "03",
    title: "Full-stack delivery",
    description:
      "Taking practical applications from backend to deployment.",
    icon: Code2,
  },
];

export default function HomePage() {
  return (
    <>
      <BackgroundEffects />

      <div className="page-content">
        <Navbar />

        <main>
          <Hero />

          <section
            id="about"
            className="container section-padding focus-section"
          >

            <div className="about-profile">
              <div className="about-profile-image">
                <Image
                  src="/images/umakanta.png"
                  alt="Umakanta Pal"
                  width={180}
                  height={180}
                  priority={false}
                />
              </div>

              <div className="about-profile-copy">
                <span className="section-eyebrow">A LITTLE ABOUT ME</span>
                <h3>Hi, I’m Umakanta.</h3>
                <p>
                  I’m a software engineer focused on backend systems, APIs,
                  databases, and building practical web applications.
                </p>
              </div>
            </div>
            <div className="section-eyebrow">What I work on</div>

            <h2 className="section-title">
              Practical engineering.
              <br />
              <span className="text-lime">
                Thoughtful execution.
              </span>
            </h2>

            <div className="row g-3 mt-4">
              {focusAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div className="col-md-4" key={area.number}>
                    <article className="focus-card h-100">
                      <div className="focus-card-top">
                        <span className="font-mono text-muted-custom">
                          /{area.number}
                        </span>
                        <Icon size={22} className="text-lime" />
                      </div>

                      <h3>{area.title}</h3>
                      <p>{area.description}</p>
                    </article>
                  </div>
                );
              })}
            </div>
          </section>

          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="container site-footer">
          <a
            href="#home"
            className="brand-mark"
            aria-label={`${site.name} — back to top`}
          >
            {site.initials}<span>.</span>
          </a>

          <p>
            Designed and built with intention.
          </p>

          <a href="#home" className="footer-back-to-top">
            Back to top
            <ArrowUp size={15} />
          </a>

          <span className="font-mono">
            © 2026 {site.name}
          </span>
        </footer>
      </div>
    </>
  );
}
