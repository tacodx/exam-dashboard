import { createClient } from 'redis'
import type { UserId, Progress } from './types'

let _client: ReturnType<typeof createClient> | null = null

async function getClient() {
  if (!_client) {
    _client = createClient({ url: process.env.REDIS_URL })
    _client.on('error', () => {})
    await _client.connect()
  }
  return _client
}

export async function getProgress(user: UserId): Promise<Progress> {
  try {
    const redis = await getClient()
    const data = await redis.get(`progress:${user}`)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

export async function setProgress(
  user: UserId,
  topicId: string,
  checked: boolean
): Promise<Progress> {
  const current = await getProgress(user)
  const updated = { ...current, [topicId]: checked }
  const redis = await getClient()
  await redis.set(`progress:${user}`, JSON.stringify(updated))
  return updated
}
