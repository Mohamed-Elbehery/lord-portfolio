"use client";

import { workExperience } from "@/constants/work-experience";
import { useGSAP } from "@gsap/react";
import SingleProject from "./SingleProject";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
  useGSAP(() => {
    const projects = gsap.utils.toArray(".project");

    gsap.to(projects, {
      opacity: 1,
      duration: 2,
      ease: "elastic",
      delay: 1.75,
      scrollTrigger: {
        trigger: ".work-experience-section-title",
        start: "top 50%",
      },
      stagger: 0.25,
    });
  });

  return (
    <div className="work-experience-projects-container">
      {workExperience.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </div>
  );
}
