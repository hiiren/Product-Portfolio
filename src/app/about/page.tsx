import Link from "next/link";

const skills = [
  { category: "Product", items: ["PRD Writing", "RICE Prioritisation", "MoSCoW MVP Definition", "User Research", "Competitive Analysis", "Roadmapping", "Market Sizing"] },
  { category: "Design", items: ["Figma Wireframing", "Information Architecture", "Heuristic Evaluation", "User Flow Mapping", "Interaction Design"] },
  { category: "Technical", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Shopify", "AWS Amplify", "Vibe Coding"] },
  { category: "Analytics", items: ["Google Analytics", "Funnel Analysis", "Heatmap Analysis", "KPI Tracking", "Conversion Optimisation"] },
  { category: "Domain", items: ["Fintech", "InsurTech", "EdTech", "E-Commerce", "SMB Operations", "RegTech", "AI/ML Products"] },
];

const experience = [
  {
    period: "Feb 2024 – Present",
    title: "Associate Product Manager",
    company: "Fuds International · Mumbai",
    description:
      "End-to-end product ownership across 10 products. Built and shipped the company's first digital platform (Shopify, 7 service lines) and AI-powered field service dashboard (AWS Amplify). Client engagements spanning PRD authorship, UX research, full-stack development via vibe coding (Claude + Antigravity). 3.5× lead growth, 60% conversion, ~40% retention.",
  },
  {
    period: "Sep 2022 – Jan 2024",
    title: "Acting PM, Falcon Platform",
    company: "Shaadi.com · Mumbai",
    description:
      "15 months of acting PM ownership on the Falcon Platform. Led product strategy, user research, backlog grooming, and sprint planning. Coordinated cross-functional teams across engineering, design, and QA. Drove feature prioritisation using RICE and MoSCoW frameworks.",
  },
  {
    period: "Jan 2019 – Aug 2022",
    title: "Senior QA Lead",
    company: "Shaadi.com · Mumbai",
    description:
      "Led QA for India's largest matchmaking platform. Built automation frameworks using Selenium WebDriver, Appium, and TestNG with Page Object Model. Managed CI/CD pipelines and mentored a team of 5 QA engineers. Drove defect reduction and release quality improvements.",
  },
  {
    period: "May 2016 – Jan 2019",
    title: "Quality Analyst",
    company: "Ridlr App (Birds Eye Systems) · Mumbai",
    description:
      "QA ownership for Ridlr — a real-time public transit app acquired by Ola. Designed test strategies for GPS-based features, live bus tracking, and payment integrations. Contributed to the product's growth to 1M+ users before acquisition.",
  },
  {
    period: "Nov 2012 – Jan 2016",
    title: "IT Consultant – QA",
    company: "Cinime Ltd. · UK",
    description:
      "QA consultant for a cinema technology startup in the UK. Tested interactive second-screen experiences for major cinema chains. Built automated test suites and managed cross-platform testing across iOS, Android, and web.",
  },
  {
    period: "Jul 2011 – Oct 2012",
    title: "Test & Network Engineer",
    company: "Yummi Media Group · UK",
    description:
      "First role in tech. Managed network infrastructure testing and QA for a media technology company. Gained foundational experience in software testing methodologies, network protocols, and system administration.",
  },
];

export default function About() {
  return (
    <>
      <section className="border-b border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              About Me
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m an Associate Product Manager with 2+ years of direct PM
                experience, 15 months of acting PM ownership at Shaadi.com, and
                11 years in software quality engineering. What makes my work
                different: I don&apos;t just write PRDs — I build the products too.
              </p>
              <p>
                Using vibe coding (Claude, Antigravity, Gemini AI Studio), I
                have independently shipped production systems — from a Shopify
                e-commerce platform to an AI-powered field service dashboard on
                AWS Amplify. My approach combines rigorous product discipline
                (user research, RICE prioritisation, competitive analysis) with
                a builder&apos;s ability to ship working software.
              </p>
              <p>
                My career spans 14 years across the UK and India — from QA
                engineering at Ridlr (acquired by Ola) and Shaadi.com, to
                product management at Fuds International. This portfolio
                contains 10 products spanning AI, fintech, insurtech, edtech,
                and SMB operations — each documented with full product thinking,
                research, prioritisation, and measured outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-[#0a0f1a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Experience
            </h2>
            <div className="mt-8 space-y-10">
              {experience.map((exp) => (
                <div key={exp.period} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:border-2 before:border-secondary before:bg-white before:content-[''] after:absolute after:left-[5px] after:top-6 after:h-full after:w-px after:bg-zinc-200 last:after:hidden dark:before:bg-zinc-900 dark:after:bg-zinc-800">
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    {exp.period}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-secondary">{exp.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Skills & Expertise
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-secondary">
                    {group.category}
                  </h3>
                  <ul className="space-y-1.5">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-[#0a0f1a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Want to work together?
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              I&apos;m always open to discussing new products, problems to
              solve, or collaboration opportunities.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
