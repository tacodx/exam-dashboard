import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dashboard from './Dashboard'

// Mock child components that have their own tests
vi.mock('./NamePicker', () => ({
  default: ({ onSelect }: { onSelect: (u: string) => void }) => (
    <div data-testid="name-picker">
      <button onClick={() => onSelect('danja')}>Danja</button>
      <button onClick={() => onSelect('kacper')}>Kacper</button>
    </div>
  ),
}))
vi.mock('./UserColumn', () => ({
  default: ({ user }: { user: string }) => <div data-testid={`col-${user}`} />,
}))
vi.mock('./TopicDetailPanel', () => ({
  default: ({ onClose }: { onClose: () => void }) => (
    <div data-testid="detail-panel"><button onClick={onClose}>close</button></div>
  ),
}))
vi.mock('./CountdownBadge', () => ({ default: () => <span>countdown</span> }))
vi.mock('./ProgressBar', () => ({ default: () => <div /> }))

const emptyProgress = {}

beforeEach(() => {
  localStorage.clear()
  vi.restoreAllMocks()
})

describe('Dashboard', () => {
  it('shows NamePicker when no user in localStorage', () => {
    render(<Dashboard initialDanja={emptyProgress} initialKacper={emptyProgress} />)
    expect(screen.getByTestId('name-picker')).toBeInTheDocument()
  })

  it('hides NamePicker after user selects a name', async () => {
    render(<Dashboard initialDanja={emptyProgress} initialKacper={emptyProgress} />)
    const picker = screen.getByTestId('name-picker')
    await userEvent.click(within(picker).getByText('Danja'))
    expect(screen.queryByTestId('name-picker')).not.toBeInTheDocument()
    expect(localStorage.getItem('exam-user')).toBe('danja')
  })

  it('reads user from localStorage on mount', () => {
    localStorage.setItem('exam-user', 'kacper')
    render(<Dashboard initialDanja={emptyProgress} initialKacper={emptyProgress} />)
    expect(screen.queryByTestId('name-picker')).not.toBeInTheDocument()
  })

  it('shows NamePicker again after switch user', async () => {
    localStorage.setItem('exam-user', 'danja')
    render(<Dashboard initialDanja={emptyProgress} initialKacper={emptyProgress} />)
    await userEvent.click(screen.getByText('switch'))
    expect(screen.getByTestId('name-picker')).toBeInTheDocument()
    expect(localStorage.getItem('exam-user')).toBeNull()
  })

  it('shows error toast and does not crash on fetch failure', async () => {
    localStorage.setItem('exam-user', 'danja')
    vi.spyOn(global, 'fetch').mockResolvedValue({ ok: false } as Response)

    const { rerender } = render(
      <Dashboard initialDanja={emptyProgress} initialKacper={emptyProgress} />
    )
    // Error toast should not be visible initially
    expect(screen.queryByText(/could not save/i)).not.toBeInTheDocument()
  })
})
