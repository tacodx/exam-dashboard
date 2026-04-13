import type { UserId } from '@/lib/types'

interface Props {
  onSelect: (user: UserId) => void
}

export default function NamePicker({ onSelect }: Props) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-[#111] border border-[#222] rounded-xl p-10 flex flex-col items-center gap-6">
        <h1 className="text-white text-xl font-bold">Who are you?</h1>
        <div className="flex gap-4">
          <button
            onClick={() => onSelect('danja')}
            className="px-8 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-[#6ee7b7] font-semibold hover:bg-[#222] transition-colors"
          >
            Danja
          </button>
          <button
            onClick={() => onSelect('kacper')}
            className="px-8 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-[#93c5fd] font-semibold hover:bg-[#222] transition-colors"
          >
            Kacper
          </button>
        </div>
      </div>
    </div>
  )
}
