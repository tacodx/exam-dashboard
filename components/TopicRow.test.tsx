import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TopicRow from './TopicRow'
import type { Topic } from '@/lib/types'

const topic: Topic = {
  id: 'netzwerke-osi',
  label: 'Netzwerke & OSI/TCP-IP',
  section: 'betrieb',
  subtopics: ['OSI'],
}

describe('TopicRow', () => {
  it('renders topic label', () => {
    render(<TopicRow topic={topic} checked={false} isOwner={true} onCheck={vi.fn()} onDetail={vi.fn()} />)
    expect(screen.getByText('Netzwerke & OSI/TCP-IP')).toBeInTheDocument()
  })

  it('calls onCheck when checkbox clicked by owner', async () => {
    const onCheck = vi.fn()
    render(<TopicRow topic={topic} checked={false} isOwner={true} onCheck={onCheck} onDetail={vi.fn()} />)
    await userEvent.click(screen.getByRole('checkbox'))
    expect(onCheck).toHaveBeenCalledWith('netzwerke-osi', true)
  })

  it('checkbox is disabled when not owner', () => {
    render(<TopicRow topic={topic} checked={false} isOwner={false} onCheck={vi.fn()} onDetail={vi.fn()} />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('calls onDetail when detail button clicked', async () => {
    const onDetail = vi.fn()
    render(<TopicRow topic={topic} checked={false} isOwner={true} onCheck={vi.fn()} onDetail={onDetail} />)
    await userEvent.click(screen.getByRole('button', { name: /details/i }))
    expect(onDetail).toHaveBeenCalledWith(topic)
  })
})
