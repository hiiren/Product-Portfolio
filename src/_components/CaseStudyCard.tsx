import Link from 'next/link'
import type { CaseStudy } from '@/_data/case-studies'

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800"
    >
      <div className="relative flex h-48 items-end overflow-hidden sm:h-56">
        {study.heroImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${study.heroImage})` }}
          />
        ) : null}
        <div
          className="absolute inset-0"
          style={
            study.heroImage
              ? { background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)' }
              : { background: study.bgGradient }
          }
        />
        <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider shadow-sm" style={{ background: study.accent, color: '#fff' }}>
            {study.type}
          </span>
        </div>
        <div className="relative z-10 p-6">
          <div className="mb-1 text-4xl font-black text-white/20">{study.number}</div>
          <h3 className="text-xl font-bold text-white">{study.title}</h3>
          <p className="text-sm font-medium" style={{ color: study.accent }}>
            {study.subtitle}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6 dark:bg-[#0f172a]">
        <div className="flex flex-wrap gap-1.5">
          {study.techStack?.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {tech}
            </span>
          ))}
          {(study.techStack?.length ?? 0) > 4 && (
            <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500">
              +{study.techStack!.length - 4}
            </span>
          )}
        </div>
        <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {study.tldr}
        </p>
        <div className="mt-auto flex items-center gap-1 pt-2">
          <span className="text-sm font-medium" style={{ color: study.color }}>
            Read case study
          </span>
          <span className="transition-transform group-hover:translate-x-1" style={{ color: study.color }}>
            &rarr;
          </span>
        </div>
      </div>
    </Link>
  )
}
