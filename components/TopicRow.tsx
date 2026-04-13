import type { Topic } from '@/lib/types'

interface Props {
  topic: Topic
  checked: boolean
  isOwner: boolean
  onCheck: (topicId: string, checked: boolean) => void
  onDetail: (topic: Topic) => void
}

export default function TopicRow({ topic, checked, isOwner, onCheck, onDetail }: Props) {
  return (
    <div className="flex items-center gap-3 mb-2 group">
      <input
        type="checkbox"
        checked={checked}
        disabled={!isOwner}
        onChange={e => onCheck(topic.id, e.target.checked)}
        className="w-4 h-4 rounded accent-current cursor-pointer disabled:cursor-default"
      />
      <span className={`text-sm flex-1 ${checked ? 'text-[#e2e8f0]' : 'text-[#555]'}`}>
        {topic.label}
      </span>
      <button
        onClick={() => onDetail(topic)}
        aria-label="Details"
        className="text-[#444] hover:text-[#888] transition-colors opacity-40 hover:opacity-100 text-xs ml-auto flex-shrink-0"
      >
        ↗
      </button>
    </div>
  )
}
