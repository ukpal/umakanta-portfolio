
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Plane,
  MapPin,
  CalendarDays,
  Search,
  Layers3,
  BusFront,
  Code2,
} from "lucide-react";
import { projects } from "@/data/projects";

const visuals = {
  travel: {
    icon: Plane,
    label: "TRAVEL ECOSYSTEM",
  },
  saas: {
    icon: Layers3,
    label: "API PLATFORM",
  },
  bus: {
    icon: BusFront,
    label: "BOOKING SYSTEM",
  },
};

function TravelVisual() {
  return (
    <div className="project-visual project-visual-travel">
      <div className="travel-visual-top">
        <div className="travel-brand">
          <span className="travel-brand-mark">
            <Plane size={17} />
          </span>
          <span>TRAVEL / EXPLORE</span>
        </div>

        <span className="travel-interface-label">
          BOOKING ECOSYSTEM
        </span>
      </div>

      <div className="travel-visual-heading">
        <span>YOUR NEXT JOURNEY</span>
        <h3>
          The world,
          <br />
          <span>connected.</span>
        </h3>
      </div>

      <div className="travel-search-card">
        <div className="travel-search-field">
          <MapPin size={17} />
          <div>
            <span>DESTINATION</span>
            <strong>Discover somewhere</strong>
          </div>
        </div>

        <div className="travel-search-divider" />

        <div className="travel-search-field">
          <CalendarDays size={17} />
          <div>
            <span>TRAVEL DATES</span>
            <strong>Plan your journey</strong>
          </div>
        </div>

        <div className="travel-search-action" aria-hidden="true">
          <Search size={19} />
        </div>
      </div>

      <div className="travel-route-art" aria-hidden="true">
        <div className="travel-route-line" />
        <span className="travel-route-point route-point-one" />
        <span className="travel-route-point route-point-two" />
        <span className="travel-route-point route-point-three" />
        <span className="travel-route-caption">CONNECTED JOURNEYS</span>
      </div>

      <div className="travel-visual-footer">
        <span>FLIGHTS</span>
        <span>HOTELS</span>
        <span>ACTIVITIES</span>
        <span>MORE TO EXPLORE</span>
      </div>
    </div>
  );
}

function SaaSVisual() {
  return (
    <div className="project-visual project-visual-saas">
      <div className="mini-window-header">
        <div className="panel-window-dots">
          <span />
          <span />
          <span />
        </div>
        <span>API CONSOLE</span>
      </div>

      <div className="saas-visual-content">
        <div className="saas-visual-label">
          <Code2 size={16} />
          <span>API MANAGEMENT</span>
        </div>

        <div className="saas-endpoint">
          <span>GET</span>
          <code>/api/v1/resources</code>
          <i>200</i>
        </div>

        <div className="saas-endpoint">
          <span>POST</span>
          <code>/api/v1/requests</code>
          <i>201</i>
        </div>

        <div className="saas-usage">
          <div>
            <span>USAGE TRACKING</span>
            <strong>Subscription controls</strong>
          </div>
          <div className="saas-usage-bars" aria-hidden="true">
            {[30, 48, 38, 68, 52, 82, 61, 92, 72, 100].map(
              (height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function BusVisual() {
  return (
    <div className="project-visual project-visual-bus">
      <div className="mini-window-header">
        <div className="panel-window-dots">
          <span />
          <span />
          <span />
        </div>
        <span>SEAT RESERVATION</span>
      </div>

      <div className="bus-visual-content">
        <div className="bus-route-summary">
          <div>
            <span>FROM</span>
            <strong>Origin</strong>
          </div>
          <div className="bus-route-connector">
            <span />
            <BusFront size={17} />
            <span />
          </div>
          <div>
            <span>TO</span>
            <strong>Destination</strong>
          </div>
        </div>

        <div className="seat-layout" aria-label="Illustrative seat layout">
          {Array.from({ length: 20 }, (_, index) => (
            <span
              key={index}
              className={
                [2, 5, 11, 16].includes(index)
                  ? "seat seat-selected"
                  : [7, 13].includes(index)
                    ? "seat seat-unavailable"
                    : "seat"
              }
            />
          ))}
        </div>

        <div className="bus-visual-footer">
          <span>
            <i className="seat-legend-selected" />
            Selected
          </span>
          <span>
            <i className="seat-legend-available" />
            Available
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === "travel") return <TravelVisual />;
  if (type === "saas") return <SaaSVisual />;
  return <BusVisual />;
}

function ProjectCard({ project, index, reduceMotion }) {
  const VisualIcon = visuals[project.visual].icon;

  return (
    <motion.article
      className={`project-card ${
        project.featured ? "project-card-featured" : ""
      }`}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : index * 0.12,
      }}
    >
      <div className="project-card-top">
        <span className="project-number font-mono">
          /{project.number}
        </span>
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-card-grid">
        <div className="project-card-content">
          <div className="project-role">
            <VisualIcon size={16} />
            <span>{project.role}</span>
          </div>

          <h3>{project.name}</h3>

          <p className="project-description">
            {project.description}
          </p>

          <div className="project-capabilities">
            {project.capabilities.map((capability) => (
              <div key={capability} className="project-capability">
                <span />
                {capability}
              </div>
            ))}
          </div>

          {project.providers.length > 0 && (
            <div className="project-providers">
              <span className="project-label">TRAVEL PROVIDERS</span>
              <div className="project-provider-list">
                {project.providers.map((provider) => (
                  <span key={provider}>{provider}</span>
                ))}
              </div>
            </div>
          )}

          <div className="project-technologies">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <a
            href="#contact"
            className="project-link"
            aria-label={`Discuss the ${project.name} project`}
          >
            Discuss this project
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="project-card-art">
          <ProjectVisual type={project.visual} />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="projects-section">
      <div className="container section-padding">
        <div className="section-eyebrow">Selected work</div>

        <div className="projects-heading">
          <h2 className="section-title">
            Built through
            <br />
            <span className="text-lime">real engineering.</span>
          </h2>

          <p>
            A selection of professional experience and independent
            projects that reflect how I approach software.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <div className="projects-bottom-note">
          <span className="font-mono">
            ENGINEERING / INTEGRATION / DELIVERY
          </span>
          <a href="#contact">
            Have a project in mind?
            <ArrowDownRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
