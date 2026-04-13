import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockGet = vi.fn()
const mockSet = vi.fn()

vi.mock('redis', () => ({
  createClient: vi.fn(() => ({
    connect: vi.fn().mockResolvedValue(undefined),
    get: mockGet,
    set: mockSet,
    on: vi.fn(),
  })),
}))

import { getProgress, setProgress } from './kv'

beforeEach(() => {
  vi.clearAllMocks()
})

describe('getProgress', () => {
  it('returns empty object when no progress stored', async () => {
    mockGet.mockResolvedValue(null)
    const result = await getProgress('danja')
    expect(result).toEqual({})
    expect(mockGet).toHaveBeenCalledWith('progress:danja')
  })

  it('returns stored progress', async () => {
    const stored = { 'netzwerke-osi': true, 'vlan-vpn-dns-dhcp': false }
    mockGet.mockResolvedValue(JSON.stringify(stored))
    const result = await getProgress('danja')
    expect(result).toEqual(stored)
  })
})

describe('setProgress', () => {
  it('merges new value into existing progress and saves', async () => {
    const existing = { 'netzwerke-osi': true }
    mockGet.mockResolvedValue(JSON.stringify(existing))
    mockSet.mockResolvedValue('OK')

    const result = await setProgress('danja', 'vlan-vpn-dns-dhcp', true)

    expect(mockSet).toHaveBeenCalledWith('progress:danja', JSON.stringify({
      'netzwerke-osi': true,
      'vlan-vpn-dns-dhcp': true,
    }))
    expect(result).toEqual({
      'netzwerke-osi': true,
      'vlan-vpn-dns-dhcp': true,
    })
  })

  it('can uncheck a topic', async () => {
    const existing = { 'netzwerke-osi': true }
    mockGet.mockResolvedValue(JSON.stringify(existing))
    mockSet.mockResolvedValue('OK')

    const result = await setProgress('danja', 'netzwerke-osi', false)
    expect(result['netzwerke-osi']).toBe(false)
  })
})
