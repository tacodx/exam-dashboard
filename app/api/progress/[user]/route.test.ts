import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/kv', () => ({
  getProgress: vi.fn(),
  setProgress: vi.fn(),
}))

import { getProgress, setProgress } from '@/lib/kv'
import { GET, POST } from './route'

function makeRequest(method: string, body?: object) {
  return new Request(`http://localhost/api/progress/danja`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
}

const params = Promise.resolve({ user: 'danja' })

beforeEach(() => vi.clearAllMocks())

describe('GET /api/progress/[user]', () => {
  it('returns progress for valid user', async () => {
    const progress = { 'netzwerke-osi': true }
    vi.mocked(getProgress).mockResolvedValue(progress)

    const res = await GET(makeRequest('GET'), { params })
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data).toEqual(progress)
  })

  it('returns 400 for invalid user', async () => {
    const badParams = Promise.resolve({ user: 'unknown' })
    const res = await GET(makeRequest('GET'), { params: badParams })
    expect(res.status).toBe(400)
  })
})

describe('POST /api/progress/[user]', () => {
  it('updates progress and returns updated map', async () => {
    const updated = { 'netzwerke-osi': true }
    vi.mocked(setProgress).mockResolvedValue(updated)

    const req = makeRequest('POST', { topicId: 'netzwerke-osi', checked: true })
    const res = await POST(req, { params })
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data).toEqual(updated)
    expect(setProgress).toHaveBeenCalledWith('danja', 'netzwerke-osi', true)
  })

  it('returns 400 for missing topicId', async () => {
    const req = makeRequest('POST', { checked: true })
    const res = await POST(req, { params })
    expect(res.status).toBe(400)
  })

  it('returns 400 for invalid user', async () => {
    const badParams = Promise.resolve({ user: 'unknown' })
    const req = makeRequest('POST', { topicId: 'netzwerke-osi', checked: true })
    const res = await POST(req, { params: badParams })
    expect(res.status).toBe(400)
  })
})
