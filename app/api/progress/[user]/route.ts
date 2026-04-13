import { NextResponse } from 'next/server'
import { getProgress, setProgress } from '@/lib/kv'
import type { UserId } from '@/lib/types'

const VALID_USERS: UserId[] = ['danja', 'kacper']

function isValidUser(user: string): user is UserId {
  return VALID_USERS.includes(user as UserId)
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ user: string }> }
) {
  const { user } = await params
  if (!isValidUser(user)) {
    return NextResponse.json({ error: 'Invalid user' }, { status: 400 })
  }
  const progress = await getProgress(user)
  return NextResponse.json(progress)
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ user: string }> }
) {
  const { user } = await params
  if (!isValidUser(user)) {
    return NextResponse.json({ error: 'Invalid user' }, { status: 400 })
  }

  const body = await req.json().catch(() => null)
  const { topicId, checked } = body ?? {}

  if (typeof topicId !== 'string' || typeof checked !== 'boolean') {
    return NextResponse.json({ error: 'Missing topicId or checked' }, { status: 400 })
  }

  const updated = await setProgress(user, topicId, checked)
  return NextResponse.json(updated)
}
