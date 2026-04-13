interface Props {
  user: 'danja' | 'kacper'
  checked: number
  total: number
}

const COLORS = {
  danja: 'bg-[#6ee7b7]',
  kacper: 'bg-[#93c5fd]',
}

const TEXT_COLORS = {
  danja: 'text-[#6ee7b7]',
  kacper: 'text-[#93c5fd]',
}

export default function ProgressBar({ user, checked, total }: Props) {
  const pct = total === 0 ? 0 : Math.round((checked / total) * 100)
  return (
    <div className="flex-1">
      <div className={`flex justify-between mb-1 text-xs ${TEXT_COLORS[user]}`}>
        <span>{user.toUpperCase()}</span>
        <span>{pct}%</span>
      </div>
      <div className="bg-[#1e1e1e] h-1 rounded-full">
        <div
          className={`${COLORS[user]} h-1 rounded-full transition-all`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
