import type { Topic, Progress, UserId } from '@/lib/types'
import { TOPICS, SECTIONS, SECTION_LABELS } from '@/lib/topics'
import TopicRow from './TopicRow'

interface Props {
  user: UserId
  progress: Progress
  isOwner: boolean
  onCheck: (topicId: string, checked: boolean) => void
  onDetail: (topic: Topic) => void
}

export default function UserColumn({ user, progress, isOwner, onCheck, onDetail }: Props) {
  const accent = user === 'danja' ? 'text-[#6ee7b7]' : 'text-[#93c5fd]'

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <p className={`text-xs tracking-widest mb-4 ${accent}`}>
        {user.toUpperCase()}
      </p>

      {SECTIONS.map(section => {
        const sectionTopics = TOPICS.filter(t => t.section === section)
        return (
          <div key={section} className="mb-6">
            <p className="text-[#444] text-xs tracking-widest uppercase mb-3">
              {SECTION_LABELS[section]}
            </p>
            {sectionTopics.map(topic => (
              <TopicRow
                key={topic.id}
                topic={topic}
                checked={!!progress[topic.id]}
                isOwner={isOwner}
                onCheck={onCheck}
                onDetail={onDetail}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}
