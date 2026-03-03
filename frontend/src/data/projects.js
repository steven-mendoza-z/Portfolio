// Portfolio projects data
import * as techs from "../data/techs";

export const projects = [
  {
    // Meta + Content
    type: "full",
    title: "Hermes Services",
    subtitle: "(PyPI Package Framework & Dev-Friendly Platform)",
    mainImage: "hermes-service/hermes_mockup1.png",


    // Overview Section
    description: [
      "A declarative DevOps framework that orchestrates multi-server deployments using YAML-defined infrastructure specifications. Includes a Python CLI (published on PyPI) and a web platform to automate provisioning, deployment execution, and CI/CD workflows."
    ],
    overviewImages: [
      "hermes-service/hermes_mockup1.png",
      "hermes-service/hermes_mockup2.png",
    ],
    stack: [
      {
        img: techs.python.img,
        name: "Python (PyPI package core)",
      },
      {
        img: techs.django.img,
        name: "Django REST Framework + Channels",
      },
      techs.postgresql,
      techs.redis,
      techs.nginx,
      {
        img: techs.docker.img,
        name: "Docker + Docker Compose",
      },
      techs.githubActions,
      techs.gcp, 
      {
        img: techs.react.img,
        name: "React (SPA)",
      }
    ],
    links: {
      "View Platform": "https://hermes.purpleblue.site/",
      "Package (PyPI)": "https://pypi.org/project/hermes-deployer/",
      "Platform Repo": "https://github.com/steven-mendoza-z/hermes-deploy-service.git",
      "Package Repo": "https://github.com/steven-mendoza-z/DHermes.git",
    },
    tags: ["System Design", "DevOps", "Orchestration", "Infrastructure"],


    // Images Section
    galleryImages: [
      // "hermes-service/network-diagram.webp",
      "hermes-service/architecture/context_diagram.png",
      "hermes-service/architecture/containers_diagram.png",
      "hermes-service/architecture/cicd_pipelines.png",
      "hermes-service/hermes_view1.png",
    ],

    // context: {
    //   name: "Hermes Services (Platform) & hermes-deployer (PyPI Framework)",      
    //   role: "End-to-end owner: problem analysis, system architecture design (framework + platform), CLI package development, backend/frontend implementation, infrastructure setup, and CI/CD pipeline configuration.",
    //   context: "Self-initiated DevOps-as-Code system aimed at standardizing multi-server deployments for small teams without dedicated DevOps engineers.",
    //   problem: "Multi-environment and multi-server deployments become complex, repetitive, and error-prone for small teams. Managing dockerized services, environment configuration, and infrastructure preparation often requires advanced DevOps expertise, creating friction and operational inconsistency.",
    //   highLevelDescription: "Hermes is a declarative DevOps framework and platform that orchestrates multi-server deployments using a YAML-based infrastructure specification. The Python CLI bootstraps servers and distributes dockerized services via SSH, while the web platform enhances usability through real-time execution visibility and workflow simplification. The package is published on PyPI and both dev and prod environments are deployed.",
    //   coreFocus: [
    //     "Reproducible deployments",
    //     "Environment standardization",
    //     "Infrastructure abstraction",
    //     "Operational simplification"
    //   ]
    // },
  
    // architecture: [
    //   {
    //     title: "C4 Model Level 1:  Context diagram",
    //     image: "projects/hermes-service/architecture/context_diagram.png"
    //   },
    //   {
    //     title: "C4 Model Level 2:  Containers diagram",
    //     image: "projects/hermes-service/architecture/containers_diagram.png"
    //   }
    // ],
    // keyDecisions: [

    // ],
    // reliability: [

    // ],
  },

  {
    // Meta + Content
    type: "full",
    title: "Quackternion",
    mainImage: "quackternion/quackternion_mockup1.png",


    // Overview Section
    description: [
      "A mathematical simulation platform that computes quaternion-based spatial transformations, persists simulation states, and generates automated PDF/LaTeX exports with step-by-step results."
    ],
    overviewImages: [
      "quackternion/quackternion_mockup1.png",
      "quackternion/quackternion_mockup2.png",
    ],
    links: {
      "View App": "https://quackternion.purpleblue.site/",
      "Repo": "https://github.com/steven-mendoza-z/Quackternion.git",
    },
    stack: [
      techs.django,
      techs.postgresql,
      techs.nginx,
      {
        img: techs.docker.img,
        name: "Docker + Docker Compose",
      },
      techs.gcp,
      techs.githubActions,
      {
        img: techs.react.img,
        name: "React (SPA)",
      },
      {
        img: techs.latex.img,
        name: "LaTeX (PDF export pipeline)",
      }
    ],
    tags: ["Math", "Simulation", "Education", "Automation"],


    // Images Section
    galleryImages:[
      "quackternion/quackternion_mockup3.png",
      "quackternion/quackternion_mockup4.png",
    ],

  },

  {
    // Meta + Content
    type: "full",
    title: "Eulerian Hades",
    mainImage: "eulerian/eulerian_mockup1.png",


    // Overview Section
    description: [
      "A modular learning platform for structured educational content and problem sets, featuring a mathematical expression engine for evaluating user inputs."    
    ],
    overviewImages: [
      "eulerian/eulerian_mockup1.png",
      "eulerian/eulerian_mockup2.png",
      "eulerian/eulerian_mockup3.png",
      "eulerian/eulerian_mockup4.png",
    ],
    links: {
      "View App": "https://eulerian-hades.purpleblue.site/",
      "Repo": "https://github.com/steven-mendoza-z/Eulerian-hades.git",
    },
    stack: [
      techs.django,
      techs.postgresql,
      techs.redis,
      techs.nginx,
      {
        img: techs.docker.img,
        name: "Docker + Docker Compose",
      },
      techs.gcp,
      techs.githubActions,
      {
        img: techs.react.img,
        name: "React (SPA)",
      },
    ],
    tags: ["Math", "Education"],


    // Images Section
    galleryImages: [
      "eulerian/eulerian_view1.png",
      "eulerian/eulerian_view2.png",
      "eulerian/eulerian_view3.png",
      "eulerian/eulerian_view4.png",
    ],

  },
];
