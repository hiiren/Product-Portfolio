import { caseStudies } from "@/_data/case-studies";
import CaseStudyCard from "@/_components/CaseStudyCard";

const domains = [...new Set(caseStudies.map((s) => s.domain))];

export default function CaseStudies() {
  return (
    <section className="py-20 dark:bg-[#0a0f1a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Case Studies
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            {caseStudies.length} products across {domains.length} domains — each
            with measurable impact.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
