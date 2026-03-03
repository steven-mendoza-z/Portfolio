// Portfolio experience data
import * as techs from "../data/techs";

export const experience = [
  {
    company: "NetForemost",
    role: "Software Engineer (Full-Stack)",
    date: "Oct 2025 – Present",
    location: "Remote",
    logo: "experience/netforemost.jpg",

        
    description:
      "Contributing to a **production-grade multi-tenant SaaS platform** for workforce management, supporting time tracking and payroll systems in early client adoption stage.",

    bullets: [
      "Stabilized production authentication and onboarding flows after resolving inconsistencies in signup and invitation logic.",
      "Implemented **organization-scoped signup and login workflows** across the client and ASP.NET Core API, including OTP-based verification, company provisioning, and token-based invitation handling",
      "Introduced **onboarding recovery mechanisms** to allow users to resume incomplete registration flows, reducing friction and preventing account creation failures",
      "Enforced multi-tenant account state validation (verified account + active company membership) before granting access.",
      "Performed **database schema evolution through controlled migrations** to support updated authentication and company lifecycle requirements"
    ],


    techs: [
      {
        img: techs.dotnet.img,
        name: ".NET (ASP.NET Core)",
      },
      techs.postgresql,
      techs.docker,
      techs.gcp,
      techs.react,
      techs.flutter,
    ],

    tags: ["SaaS Platform", "Authentication", "End-to-End Feature Ownership"],
  },
];
