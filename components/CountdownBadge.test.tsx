import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import CountdownBadge from './CountdownBadge'

afterEach(() => vi.restoreAllMocks())

describe('CountdownBadge', () => {
  it('shows correct days remaining', () => {
    // Mock current date to 10 days before exam (2026-04-19)
    vi.setSystemTime(new Date('2026-04-19T10:00:00Z'))
    render(<CountdownBadge examDate="2026-04-29" />)
    expect(screen.getByText(/10 Tage/i)).toBeInTheDocument()
  })

  it('shows red styling when 7 or fewer days remain', () => {
    vi.setSystemTime(new Date('2026-04-22T10:00:00Z'))
    render(<CountdownBadge examDate="2026-04-29" />)
    const badge = screen.getByText(/7 Tage/i)
    expect(badge.className).toContain('bg-red-500')
  })

  it('shows "Heute!" on exam day', () => {
    vi.setSystemTime(new Date('2026-04-29T08:00:00Z'))
    render(<CountdownBadge examDate="2026-04-29" />)
    expect(screen.getByText(/heute/i)).toBeInTheDocument()
  })
})
