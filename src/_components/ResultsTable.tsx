export default function ResultsTable({
  results,
}: {
  results: { metric: string; before: string; after: string }[]
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-zinc-100 dark:bg-zinc-900">
            <th className="px-5 py-3 font-semibold text-zinc-900 dark:text-zinc-100">Metric</th>
            <th className="px-5 py-3 font-semibold text-zinc-500 dark:text-zinc-400">Before</th>
            <th className="px-5 py-3 font-semibold text-secondary">After</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {results.map((r) => (
            <tr key={r.metric}>
              <td className="px-5 py-3 font-medium text-zinc-900 dark:text-zinc-100">{r.metric}</td>
              <td className="px-5 py-3 text-zinc-500 dark:text-zinc-400">{r.before}</td>
              <td className="px-5 py-3 font-medium text-secondary">{r.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
