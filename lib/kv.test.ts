import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock @vercel/kv before importing our module
vi.mock('@vercel/kv', () => ({
  kv: {
    get: vi.fn(),
    set: vi.fn(),
  },
}))

import { kv } from '@vercel/kv'
import { getProgress, setProgress } from './kv'

beforeEach(() => {
  vi.clearAllMocks()
})

describe('getProgress', () => {
  it('returns empty object when no progress stored', async () => {
    vi.mocked(kv.get).mockResolvedValue(null)
    const result = await getProgress('danja')
    expect(result).toEqual({})
    expect(kv.get).toHaveBeenCalledWith('progress:danja')
  })

  it('returns stored progress', async () => {
    const stored = { 'netzwerke-osi': true, 'vlan-vpn-dns-dhcp': false }
    vi.mocked(kv.get).mockResolvedValue(stored)
    const result = await getProgress('danja')
    expect(result).toEqual(stored)
  })
})

describe('setProgress', () => {
  it('merges new value into existing progress and saves', async () => {
    const existing = { 'netzwerke-osi': true }
    vi.mocked(kv.get).mockResolvedValue(existing)
    vi.mocked(kv.set).mockResolvedValue('OK')

    const result = await setProgress('danja', 'vlan-vpn-dns-dhcp', true)

    expect(kv.set).toHaveBeenCalledWith('progress:danja', {
      'netzwerke-osi': true,
      'vlan-vpn-dns-dhcp': true,
    })
    expect(result).toEqual({
      'netzwerke-osi': true,
      'vlan-vpn-dns-dhcp': true,
    })
  })

  it('can uncheck a topic', async () => {
    const existing = { 'netzwerke-osi': true }
    vi.mocked(kv.get).mockResolvedValue(existing)
    vi.mocked(kv.set).mockResolvedValue('OK')

    const result = await setProgress('danja', 'netzwerke-osi', false)
    expect(result['netzwerke-osi']).toBe(false)
  })
})
