
"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Braces,
  Database,
  Globe,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    id: "backend",
    label: "Backend",
    icon: Braces,
    description: "Building server-side applications and APIs.",
    skills: [
      { name: "JavaScript", detail: "Core language" },
      { name: "TypeScript", detail: "Typed application development" },
      { name: "Node.js", detail: "JavaScript runtime" },
      { name: "Express.js", detail: "HTTP APIs" },
      { name: "NestJS", detail: "Modular backend applications" },
      { name: "REST APIs", detail: "API design" },
      { name: "GraphQL", detail: "Queries and resolvers" },
      { name: "JWT", detail: "Authentication" },
    ],
  },
  {
    id: "data",
    label: "Databases",
    icon: Database,
    description: "Working with persistent data and data access.",
    skills: [
      { name: "PostgreSQL", detail: "Relational database" },
      { name: "MongoDB", detail: "Document database" },
      { name: "MySQL", detail: "Relational database" },
      { name: "Sequelize", detail: "ORM" },
      { name: "Mongoose", detail: "MongoDB ODM" },
      { name: "Redis", detail: "In-memory data store" },
      { name: "SQL", detail: "Queries and data modelling" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Globe,
    description: "Building responsive web application interfaces.",
    skills: [
      { name: "React", detail: "UI development" },
      { name: "Next.js", detail: "React framework" },
      { name: "Bootstrap", detail: "Responsive layouts" },
      { name: "HTML", detail: "Web structure" },
      { name: "CSS", detail: "Styling and layouts" },
      { name: "Zustand", detail: "Client state management" },
    ],
  },
  {
    id: "infra",
    label: "Infrastructure",
    icon: Cloud,
    description: "Running applications in containerized and cloud environments.",
    skills: [
      { name: "Docker", detail: "Containerization" },
      { name: "AWS EC2", detail: "Cloud compute" },
      { name: "AWS S3", detail: "Object storage" },
      { name: "Git", detail: "Version control" },
      { name: "Linux", detail: "Server environment" },
      { name: "PM2", detail: "Node.js process management" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("backend");
  const reduceMotion = useReducedMotion();

  const active = categories.find(
    (category) => category.id === activeCategory
  );

  return (
    <section
      id="skills"
      className="skills-section"
    >
      <div className="container section-padding">
        <div className="section-eyebrow">Technical toolkit</div>

        <div className="skills-heading">
          <h2 className="section-title">
            The tools behind
            <br />
            <span className="text-lime">the solutions.</span>
          </h2>

          <p>
            A practical toolkit spanning backend development,
            data, interfaces, and deployment.
          </p>
        </div>

        <div className="skills-explorer">
          <div
            className="skills-tabs"
            role="tablist"
            aria-label="Technical skill categories"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const selected = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`tab-${category.id}`}
                  aria-selected={selected}
                  aria-controls="skills-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`skills-tab ${selected ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <Icon size={17} />
                  <span>{category.label}</span>
                  <span className="skills-tab-count">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="skills-panel"
            id="skills-panel"
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory}`}
            tabIndex={0}
          >
            <div className="skills-panel-heading">
              <div>
                <span className="font-mono skills-panel-index">
                  / {active.id.toUpperCase()}
                </span>
                <h3>{active.label}</h3>
                <p>{active.description}</p>
              </div>

              <span className="skills-count">
                {String(active.skills.length).padStart(2, "0")} SKILLS
              </span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                className="skills-grid"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.22,
                }}
              >
                {active.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                  >
                    <div className="skill-item-top">
                      <span className="skill-index font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <ArrowUpRight size={15} className="skill-arrow" />
                    </div>

                    <h4>{skill.name}</h4>
                    <p>{skill.detail}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="skills-disclaimer">
          Technologies shown reflect my development toolkit.
          Depth of experience varies by technology.
        </p>
      </div>
    </section>
  );
}
