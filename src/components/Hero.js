
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Activity,
  Code2,
  Database,
  Terminal,
} from "lucide-react";

const technologies = ["Node.js", "NestJS", "PostgreSQL", "Next.js"];

const entrance = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: "hidden",
    animate: "visible",
    variants: entrance,
    transition: {
      duration: reduceMotion ? 0 : 0.75,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section id="home" className="hero-section">
      <div className="hero-layout container">
        <div className="hero-copy">
          <motion.div
            className="section-eyebrow hero-eyebrow"
            {...reveal(0.1)}
          >
            Software engineer <span className="hero-slash">/</span> India
          </motion.div>

          <motion.h1
            className="hero-title"
            {...reveal(0.22)}
          >
            Building
            <br />
            <span className="hero-title-outline">the systems</span>
            <br />
            <span className="hero-title-accent">
              behind ideas<span className="hero-period">.</span>
            </span>
          </motion.h1>

          <motion.p
            className="hero-description"
            {...reveal(0.36)}
          >
            I'm Umakanta Pal — a software engineer who turns
            complex requirements into practical applications,
            dependable APIs, and thoughtfully designed systems.
          </motion.p>

          <motion.div
            className="hero-actions"
            {...reveal(0.48)}
          >
            <a href="#work" className="button-lime hero-primary">
              Explore my work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="button-outline">
              Let's connect
              <ArrowDownRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="hero-meta"
            {...reveal(0.6)}
          >
            <span className="hero-meta-label">
              MY ENGINEERING FOCUS
            </span>
            <span>Backend systems</span>
            <span className="hero-meta-separator">/</span>
            <span>Full-stack applications</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: reduceMotion ? 0 : 0.35,
          }}
        >
          <div className="hero-orbit hero-orbit-outer" />
          <div className="hero-orbit hero-orbit-inner" />

          <motion.div
            className="hero-orbit-dot"
            animate={reduceMotion ? {} : { rotate: 360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span />
          </motion.div>

          <motion.div
            className="engineering-panel"
            animate={
              reduceMotion
                ? {}
                : { y: [0, -8, 0], rotate: [0, 0.4, 0] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="engineering-panel-header">
              <div className="panel-window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="font-mono">ENGINEERING / 001</span>
            </div>

            <div className="engineering-panel-body">
              <div className="panel-greeting">
                <Terminal size={18} />
                <span>BUILD_MODE = "ON"</span>
              </div>

              <div className="panel-code">
                <div>
                  <span className="code-line-number">01</span>
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-variable">engineer</span>{" "}
                  = {"{"}
                </div>
                <div>
                  <span className="code-line-number">02</span>
                  &nbsp;&nbsp;focus:{" "}
                  <span className="code-string">"backend"</span>,
                </div>
                <div>
                  <span className="code-line-number">03</span>
                  &nbsp;&nbsp;mindset:{" "}
                  <span className="code-string">"systems"</span>,
                </div>
                <div>
                  <span className="code-line-number">04</span>
                  &nbsp;&nbsp;approach:{" "}
                  <span className="code-string">"build + refine"</span>
                </div>
                <div>
                  <span className="code-line-number">05</span>
                  {"}"}
                </div>
              </div>

              <div className="panel-divider" />

              <div className="panel-status">
                <div className="panel-status-icon">
                  <Activity size={17} />
                </div>
                <div>
                  <div className="panel-status-title">
                    SYSTEMS THINKING
                  </div>
                  <div className="panel-status-subtitle">
                    Design · Build · Improve
                  </div>
                </div>
                <span className="panel-status-indicator" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="floating-chip floating-chip-top"
            animate={reduceMotion ? {} : { y: [0, -7, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code2 size={17} />
            <span>Clean architecture</span>
          </motion.div>

          <motion.div
            className="floating-chip floating-chip-bottom"
            animate={reduceMotion ? {} : { y: [0, 7, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Database size={17} />
            <span>Data-driven systems</span>
          </motion.div>

          <div className="hero-tech-stack">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </motion.div>

        <div className="hero-bottom-label">
          <span>INDEPENDENT THINKING. PRACTICAL ENGINEERING.</span>
          <a href="#about">
            DISCOVER MORE <ArrowDownRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
