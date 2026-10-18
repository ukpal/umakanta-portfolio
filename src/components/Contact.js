
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Mail,
} from "lucide-react";
import site from "@/data/site";

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const socialLinks = [
    {
      label: "GitHub",
      href: site.githubUrl,
      icon: ExternalLink,
    },
    {
      label: "LinkedIn",
      href: site.linkedinUrl,
      icon: ExternalLink,
    },
  ].filter((link) => link.href);

  return (
    <section id="contact" className="contact-section">
      <div className="container section-padding">
        <div className="section-eyebrow">Let's connect</div>

        <div className="contact-layout">
          <motion.div
            className="contact-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
          >
            <h2 className="contact-title">
              Good engineering
              <br />
              starts with
              <br />
              <span>a conversation.</span>
            </h2>

            <p className="contact-description">
              Interested in backend engineering, full-stack
              applications, or building something useful?
              I'd be glad to connect.
            </p>

            {site.email ? (
              <a
                href={`mailto:${site.email}`}
                className="button-lime contact-email-button"
              >
                <Mail size={18} />
                Get in touch
                <ArrowUpRight size={18} />
              </a>
            ) : (
              <p className="contact-setup-note">
                Add your email in src/data/site.js to enable
                direct contact.
              </p>
            )}
          </motion.div>

          <motion.div
            className="contact-panel"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.12,
            }}
          >
            <div className="contact-panel-heading">
              <span className="font-mono">CONTACT / 001</span>
              <ArrowDownRight size={19} />
            </div>

            <div className="contact-panel-body">
              <span className="contact-panel-label">
                SOFTWARE ENGINEER
              </span>

              <h3>{site.name}</h3>

              <p>
                Backend systems. Thoughtful architecture.
                Practical software.
              </p>

              {site.email && (
                <a
                  href={`mailto:${site.email}`}
                  className="contact-detail-link"
                >
                  <Mail size={17} />
                  <span>{site.email}</span>
                  <ArrowUpRight size={16} />
                </a>
              )}

              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="contact-detail-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={17} />
                    <span>{link.label}</span>
                    <ArrowUpRight size={16} />
                  </a>
                );
              })}

              {!site.email && socialLinks.length === 0 && (
                <p className="contact-setup-note">
                  Add your email and profile URLs to activate
                  your contact links.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
