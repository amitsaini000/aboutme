import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vdxtsudio from "@/public/vdxtsudio.jpeg";
import summitapp from "@/public/summitapp.jpeg";
import expo9 from "@/public/expo9.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Grapes Digital",
    location: "Delhi, INDIA",
    description:
      "I started my career with grapes software, where I developed lots of ecommerce websites.I have used Java, JSP,Servlet, Ajax, jQuery, JavaScript ,MY SQL",
    icon: React.createElement(LuGraduationCap),
    date: "May 2008 - Feb 2010",
  },
  {
    title: "Front-End Developer",
    location: "MapMy India, Delhi, INDIA",
    description:
      "I worked as a front-end developer for 8 months here. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb-2010 - Dec-2010",
  },
  {
    title: "Full-Stack Developer",
    location: "VDX.TV, Noida, INDIA",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Dec 2010 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "VDX Studio development of Next.js",
    description:
      "I worked as a full-stack developer on this project for 5 years.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: vdxtsudio,
  },
  {
    title: "VDX Summit App",
    description:
      `Developed React Native mobile app from scratch, optimizing performance. Achieved
500K+ downloads in 2 months, securing $1M series A funding. Robust architecture
and efficient state management for seamless user experience`,
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: summitapp,
  },
  {
    title: "Expo9 UI",
    description:
      `Developed internal design system consisting of highly reusable UI componentswith
high visual consistency across Web and mobileplatforms`,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: expo9,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
