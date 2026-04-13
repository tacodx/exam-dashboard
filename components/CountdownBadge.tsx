interface Props {
  examDate: string // 'YYYY-MM-DD'
}

export default function CountdownBadge({ examDate }: Props) {
  const now = new Date()
  const exam = new Date(examDate)
  const diffMs = exam.getTime() - now.getTime()
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

  const isUrgent = days <= 7
  const label = days <= 0 ? 'Heute!' : `${days} Tage`

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-bold text-white ${
        isUrgent ? 'bg-red-500' : 'bg-[#333]'
      }`}
    >
      {label}
    </span>
  )
}
