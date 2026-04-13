import { kv } from '@vercel/kv'
import type { UserId, Progress } from './types'

export async function getProgress(user: UserId): Promise<Progress> {
  const data = await kv.get<Progress>(`progress:${user}`)
  return data ?? {}
}

export async function setProgress(
  user: UserId,
  topicId: string,
  checked: boolean
): Promise<Progress> {
  const current = await getProgress(user)
  const updated = { ...current, [topicId]: checked }
  await kv.set(`progress:${user}`, updated)
  return updated
}
