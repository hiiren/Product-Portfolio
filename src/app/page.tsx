import Link from "next/link";
import { caseStudies } from "@/_data/case-studies";
import CaseStudyCard from "@/_components/CaseStudyCard";

const impactMetrics = [
  { value: "10", label: "Products Shipped" },
  { value: "8x", label: "Lead Growth (Max)" },
  { value: "60%", label: "Avg. Conversion" },
  { value: "3.8d→4h", label: "Review Cycle Reduction" },
];

const featured = caseStudies.slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-zinc-50 to-white py-24 dark:border-zinc-800 dark:from-[#0f172a] dark:to-[#0a0f1a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-block rounded-full border border-zinc-200 bg-white px-4 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
              Product Manager &bull; Builder &bull; Strategist
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50">
              I turn complex problems into{" "}
              <span className="text-secondary">shipped products</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Product manager with a builder mindset. I go from problem discovery
              to shipped code across AI, fintech, edtech, and SMB operations —
              delivering measurable impact for every product I touch.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href="/case-studies"
                className="rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                View Case Studies
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
                  {metric.value}
                </div>
                <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-[#0a0f1a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Featured Case Studies
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              A selection of products I&apos;ve built and shipped.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-opacity hover:opacity-80"
            >
              View all {caseStudies.length} case studies &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
