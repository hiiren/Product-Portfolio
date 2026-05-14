'use client'

import { useState } from 'react'

export default function LiveDemoEmbed({
  url,
  label,
}: {
  url: string
  label?: string
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-2.5 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-green-500" />
          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {label || 'Live Demo'}
          </span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-secondary transition-opacity hover:opacity-80"
        >
          Open in new tab &rarr;
        </a>
      </div>
      <div className="relative bg-zinc-100 dark:bg-zinc-950">
        {!loaded && (
          <div className="flex aspect-video items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-secondary border-t-transparent" />
              <span className="text-xs text-zinc-500">Loading live preview...</span>
            </div>
          </div>
        )}
        <iframe
          src={url}
          className="w-full border-0"
          style={{ height: loaded ? '500px' : '0', opacity: loaded ? 1 : 0 }}
          onLoad={() => setLoaded(true)}
          allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone"
          title={label || 'Live Demo'}
        />
      </div>
    </div>
  )
}
