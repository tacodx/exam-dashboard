import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TopicDetailPanel from './TopicDetailPanel'
import type { Topic } from '@/lib/types'

const mockTopic: Topic = {
  id: 'netzwerke-osi',
  label: 'Netzwerke & OSI/TCP-IP Schichtenmodell',
  section: 'betrieb',
  subtopics: ['OSI-Schichtenmodell', 'IPv4 / IPv6', 'Routing'],
}

describe('TopicDetailPanel', () => {
  it('renders topic label and subtopics when open', () => {
    render(<TopicDetailPanel topic={mockTopic} onClose={vi.fn()} />)
    expect(screen.getByText('Netzwerke & OSI/TCP-IP Schichtenmodell')).toBeInTheDocument()
    expect(screen.getByText('OSI-Schichtenmodell')).toBeInTheDocument()
    expect(screen.getByText('IPv4 / IPv6')).toBeInTheDocument()
  })

  it('calls onClose when close button clicked', async () => {
    const onClose = vi.fn()
    render(<TopicDetailPanel topic={mockTopic} onClose={onClose} />)
    await userEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalled()
  })
})
