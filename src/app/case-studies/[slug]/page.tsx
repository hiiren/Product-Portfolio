import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/_data/case-studies";
import type { Metadata } from "next";
import SectionHeading from "@/_components/SectionHeading";
import ResultsTable from "@/_components/ResultsTable";
import ImageGallery from "@/_components/ImageGallery";
import LiveDemoEmbed from "@/_components/LiveDemoEmbed";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — ${study.subtitle} | Hiiren Rathod`,
    description: study.tldr,
  };
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-[#0f172a]">
      <div className="text-xl font-bold tracking-tight text-secondary md:text-2xl">{value}</div>
      <div className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">{label}</div>
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const stats = [
    ...study.results.slice(0, 4).map((r) => ({
      value: r.after,
      label: r.metric,
    })),
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {study.heroVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={study.heroVideo} type="video/mp4" />
          </video>
        ) : study.heroImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${study.heroImage})` }}
          />
        ) : null}
        <div
          className="relative"
          style={
            !study.heroImage && !study.heroVideo
              ? { background: study.bgGradient }
              : undefined
          }
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16">
            <Link
              href="/case-studies"
              className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              &larr; All case studies
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{ background: study.accent, color: "#fff" }}
              >
                {study.type}
              </span>
              <span className="text-xs font-medium text-white/60">{study.domain}</span>
              <span className="text-xs font-medium text-white/60">&middot;</span>
              <span className="text-xs font-medium text-white/60">{study.status}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {study.title}
            </h1>
            <p className="mt-2 text-lg font-medium" style={{ color: study.accent }}>
              {study.subtitle}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              {study.tldr}
            </p>
            {study.techStack && (
              <div className="mt-6 flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            {study.timeline && <span>Timeline: {study.timeline}</span>}
            {study.team && <span>Team: {study.team}</span>}
            {study.role.length > 0 && (
              <span>Role: {study.role[0]}</span>
            )}
          </div>
        </div>
      </section>

      {/* Download / Prototype Bar */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-6 dark:border-zinc-800 dark:bg-[#0a0f1a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-3">
            <a
              href={study.pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download Full Case Study (PDF)
            </a>
            {study.prototypeUrl && (
              <a
                href={study.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                View Prototype
              </a>
            )}
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                View Live Site
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading title="Problem" subtitle="What was broken and why it mattered" />
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{study.problem}</p>
        </div>
      </section>

      {/* Research */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-[#0a0f1a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading title="Research" subtitle="Understanding users and the problem space" />
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{study.research}</p>
        </div>
      </section>

      {/* My Role */}
      <section className="border-b border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading title="My Role" subtitle="What I owned and delivered" />
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {study.role.map((item) => (<li key={item}>{item}</li>))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-[#0a0f1a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading title="Solution" subtitle="What I built and how it works" />
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{study.solution}</p>
        </div>
      </section>

      {/* Live Demo Embed */}
      {study.embedUrl && (
        <section className="border-b border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-[#0f172a]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeading title="Live Demo" subtitle="See it in action" />
            <LiveDemoEmbed url={study.embedUrl} label={study.title} />
          </div>
        </section>
      )}

      {/* Gallery */}
      {study.gallery && study.gallery.length > 0 && (
        <section className="border-b border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-[#0a0f1a]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading title="Screenshots" subtitle="Real screens from the build" />
            <ImageGallery items={study.gallery} bgColor={study.bgGradient} />
          </div>
        </section>
      )}

      {/* Results */}
      <section className="border-b border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading title="Results" subtitle="Measurable impact before vs after" />
          <ResultsTable results={study.results} />
        </div>
      </section>

      {/* Learnings */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-[#0a0f1a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading title="Learnings" subtitle="What this project taught me" />
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {study.learnings.map((item) => (<li key={item}>{item}</li>))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="border-b border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-[#0f172a]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-700 dark:bg-zinc-900">
              <svg className="mb-4 h-8 w-8 text-secondary/40" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">&ldquo;{study.testimonial.quote}&rdquo;</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{study.testimonial.author}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{study.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PRD Download */}
      {study.prdFile && (
        <section className="border-b border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-[#0f172a]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-700 dark:bg-zinc-900">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Product Requirement Document (PRD)</h2>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Full PRD covering problem statement, market analysis, competitor research, solution design,
                  RICE prioritisation, success metrics, and roadmap.
                </p>
              </div>
              <a
                href={study.prdFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Download PRD (PDF)
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Wireframes / Figma Prototype */}
      {(study.figmaUrl || (study.wireframes && study.wireframes.length > 0)) && (
        <section className="border-b border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-[#0a0f1a]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              title="Wireframes & Design Process"
              subtitle="Exploring the design before code"
            />
            {study.figmaUrl && (
              <div className="mb-8">
                <a
                  href={study.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
                  View Figma Prototype
                </a>
              </div>
            )}
            {study.wireframes && study.wireframes.length > 0 && (
              <ImageGallery items={study.wireframes} bgColor={study.lightBg} />
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Want to discuss this project or work together?</p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-opacity hover:opacity-80">
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
