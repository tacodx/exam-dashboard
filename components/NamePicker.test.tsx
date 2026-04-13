import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NamePicker from './NamePicker'

describe('NamePicker', () => {
  it('renders the prompt and both user buttons', () => {
    render(<NamePicker onSelect={vi.fn()} />)
    expect(screen.getByText(/who are you/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /danja/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /kacper/i })).toBeInTheDocument()
  })

  it('calls onSelect with "danja" when Danja is clicked', async () => {
    const onSelect = vi.fn()
    render(<NamePicker onSelect={onSelect} />)
    await userEvent.click(screen.getByRole('button', { name: /danja/i }))
    expect(onSelect).toHaveBeenCalledWith('danja')
  })

  it('calls onSelect with "kacper" when Kacper is clicked', async () => {
    const onSelect = vi.fn()
    render(<NamePicker onSelect={onSelect} />)
    await userEvent.click(screen.getByRole('button', { name: /kacper/i }))
    expect(onSelect).toHaveBeenCalledWith('kacper')
  })
})
