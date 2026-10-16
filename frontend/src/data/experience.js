// Portfolio experience data

export const experience = [
{
    company: "Techcore / BlackShadow",
    role: "Software Associate Senior Engineer SASE | AI Engineer",
    date: "Oct 2026 – Present",
    location: "Remote",
    logos: [
      { src: "experience/techcore.webp", alt: "Techcore", size: "65%" },
      { src: "experience/blackshadow.webp", alt: "BlackShadow", size: "45%", radius: 0 },
    ],
    logoBackground: "#fff",

    description: "Own the delivery of a new auditing platform from concept to internal beta, translating leadership goals into a product that helps the business understand activity across company devices and respond to risk sooner.",

    bullets: [
      "Replaced manual, after-the-fact reviews with **continuous evidence of device and network activity**, helping the business identify potential risks sooner.",
      "Kept the monitoring agent lightweight at **7.7MB**, supporting deployment across company devices with minimal impact on employees.",
      "Made audit findings more dependable by validating activity before review and isolating failures, while allowing the platform to expand as business needs grow.",
      "Presented activity in a **real-time dashboard** that helps non-technical stakeholders recognize and investigate risk without interpreting raw logs.",
      "Prepared the platform for internal beta with a repeatable release process, helping the team deliver updates consistently."
    ],

    tags: ["Product Ownership", "System Architecture", "Real-Time Data", "Security & Auditing", "Applied AI"],
  },

  {
    company: "NetForemost",
    role: "Software Engineer (Full-Stack)",
    date: "Oct 2025 – Oct 2026",
    location: "Remote",
    logos: [
      { src: "experience/netforemost.png", alt: "NetForemost", size: "80%" },
    ],
    logoBackground: "#fff",

        
    description:
      "Help improve a workforce management platform that supports client operations for time tracking and payroll, with a focus on making account setup and access reliable.",

    bullets: [
      "Resolved signup and invitation issues that disrupted production onboarding, improving the reliability of new client and employee access.",
      "Aligned registration and login with company membership, verification, and invitations so users enter the correct organization from the start.",
      "Added ways to resume incomplete registrations, reducing onboarding friction and preventing abandoned account setup.",
      "Validated account and company membership before granting access, helping protect organization data.",
      "Updated account and company workflows through controlled releases to support evolving client requirements."
    ],


    tags: ["SaaS Platform", "Authentication", "End-to-End Feature Ownership"],
  },
];
