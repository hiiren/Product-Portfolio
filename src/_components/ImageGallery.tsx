'use client'

import { useState } from 'react'
import type { GalleryItem } from '@/_data/case-studies'

export default function ImageGallery({ items, bgColor }: { items: GalleryItem[]; bgColor?: string }) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white text-left dark:border-zinc-800 dark:bg-[#0f172a]"
          >
            <div
              className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900"
              style={bgColor ? { background: bgColor } : undefined}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-4xl font-black text-zinc-200 dark:text-zinc-800">
                    ?
                  </span>
                </div>
              )}
            </div>
            {item.caption && (
              <div className="p-3">
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {item.caption}
                </p>
              </div>
            )}
          </button>
        ))}
      </div>

      {selected !== null && items[selected] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl bg-white dark:bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <img
              src={items[selected].src}
              alt={items[selected].alt}
              className="max-h-[80vh] w-full object-contain"
            />
            {items[selected].caption && (
              <div className="border-t border-zinc-200 p-4 dark:border-zinc-800">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {items[selected].caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
