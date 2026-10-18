
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    period: "JUL 2022 — SEP 2026",
    company: "Pixel Consultancy",
    role: "Backend Software Developer",
    type: "Full-time",
    description:
      "Professional experience in backend software development, working with JavaScript-based technologies and building server-side applications.",
    highlights: [
      "Backend application development",
      "API design and implementation",
      "Database-driven application development",
    ],
  },
];

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="container section-padding experience-section"
    >
      <div className="section-eyebrow">Career journey</div>

      <div className="experience-heading">
        <h2 className="section-title">
          Experience built
          <br />
          <span className="text-lime">through engineering.</span>
        </h2>

        <p className="experience-intro">
          A look at my professional journey and the
          engineering work that shapes how I build software.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            className="experience-entry"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : index * 0.12,
            }}
          >
            <div className="experience-marker">
              <BriefcaseBusiness size={18} />
            </div>

            <div className="experience-card">
              <div className="experience-card-top">
                <span className="experience-period font-mono">
                  {experience.period}
                </span>
                <span className="experience-type">
                  {experience.type}
                </span>
              </div>

              <h3>{experience.role}</h3>

              <div className="experience-company">
                {experience.company}
              </div>

              <p className="experience-description">
                {experience.description}
              </p>

              <ul className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="experience-note">
        <span className="experience-note-dot" />
        <p>
          Beyond professional work, I continue building practical
          projects to deepen my understanding of architecture,
          databases, APIs, and deployment.
        </p>
        <a href="#work" aria-label="Explore projects">
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
