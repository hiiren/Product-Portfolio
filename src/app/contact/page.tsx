import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-20 dark:bg-[#0a0f1a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Get in Touch
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Have a project in mind, a problem to solve, or just want to connect?
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          <a
            href="mailto:hiirenrathod126@gmail.com"
            className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-secondary"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Email
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              hiirenrathod126@gmail.com
            </span>
          </a>
          <a
            href="https://linkedin.com/in/hiirenrathod"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-secondary"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              LinkedIn
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Connect with me
            </span>
          </a>
          <a
            href="https://github.com/hiiren/Product-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-secondary"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              GitHub
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              See my code
            </span>
          </a>
          <Link
            href="/case-studies"
            className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-secondary"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              <path d="M8 7h8" />
              <path d="M8 11h6" />
              <path d="M8 15h4" />
            </svg>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Case Studies
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Browse my work
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
