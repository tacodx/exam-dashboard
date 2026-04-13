import type { Topic } from '@/lib/types'

interface Props {
  topic: Topic
  onClose: () => void
}

export default function TopicDetailPanel({ topic, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      {/* Backdrop */}
      <div className="flex-1 bg-black/50" onClick={onClose} />

      {/* Panel — slides in from right */}
      <div className="w-96 bg-[#111] border-l border-[#222] h-full overflow-y-auto flex flex-col animate-slide-in-right">
        <div className="flex items-start justify-between p-5 border-b border-[#1a1a1a]">
          <h2 className="text-white text-sm font-semibold leading-snug pr-4">
            {topic.label}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-[#555] hover:text-white transition-colors text-lg leading-none flex-shrink-0"
          >
            ✕
          </button>
        </div>

        <div className="p-5">
          <p className="text-[#555] text-xs uppercase tracking-widest mb-4">
            Themenkreise
          </p>
          <ul className="space-y-3">
            {topic.subtopics.map((sub, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#aaa]">
                <span className="text-[#444] mt-0.5">—</span>
                <span>{sub}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
