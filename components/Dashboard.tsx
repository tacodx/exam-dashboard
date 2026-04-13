'use client'

import { useState, useEffect, useCallback } from 'react'
import type { Topic, UserId, Progress } from '@/lib/types'
import { TOPIC_IDS } from '@/lib/topics'
import NamePicker from './NamePicker'
import UserColumn from './UserColumn'
import TopicDetailPanel from './TopicDetailPanel'
import CountdownBadge from './CountdownBadge'
import ProgressBar from './ProgressBar'

interface Props {
  initialDanja: Progress
  initialKacper: Progress
}

export default function Dashboard({ initialDanja, initialKacper }: Props) {
  const [currentUser, setCurrentUser] = useState<UserId | null>(null)
  const [progress, setProgress] = useState({ danja: initialDanja, kacper: initialKacper })
  const [detailTopic, setDetailTopic] = useState<Topic | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Load user from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('exam-user') as UserId | null
    if (stored === 'danja' || stored === 'kacper') {
      setCurrentUser(stored)
    }
  }, [])

  const handleSelectUser = (user: UserId) => {
    localStorage.setItem('exam-user', user)
    setCurrentUser(user)
  }

  const handleSwitchUser = () => {
    localStorage.removeItem('exam-user')
    setCurrentUser(null)
  }

  const handleCheck = useCallback(async (topicId: string, checked: boolean) => {
    if (!currentUser) return

    // Optimistic update
    setProgress(prev => ({
      ...prev,
      [currentUser]: { ...prev[currentUser], [topicId]: checked },
    }))
    setError(null)

    try {
      const res = await fetch(`/api/progress/${currentUser}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicId, checked }),
      })
      if (!res.ok) throw new Error('Failed to save')
      const updated: Progress = await res.json()
      setProgress(prev => ({ ...prev, [currentUser]: updated }))
    } catch {
      // Revert optimistic update
      setProgress(prev => ({
        ...prev,
        [currentUser]: { ...prev[currentUser], [topicId]: !checked },
      }))
      setError('Could not save — check your connection')
    }
  }, [currentUser])

  const countChecked = (p: Progress) =>
    TOPIC_IDS.filter(id => p[id]).length

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col">
      {/* Name picker modal */}
      {!currentUser && <NamePicker onSelect={handleSelectUser} />}

      {/* Header */}
      <div className="bg-[#111] border-b border-[#222] px-4 py-3 flex items-center justify-between">
        <span className="text-white font-bold text-sm">Abschlussprüfung Teil 2</span>
        <CountdownBadge examDate="2026-04-29" />
        <div className="flex items-center gap-2">
          {currentUser && (
            <button
              onClick={handleSwitchUser}
              className="text-[#444] hover:text-[#777] text-xs transition-colors"
            >
              switch
            </button>
          )}
          <span className="text-[#6ee7b7] text-xs border border-[#333] rounded-full px-3 py-1">
            Danja
          </span>
          <span className="text-[#93c5fd] text-xs border border-[#333] rounded-full px-3 py-1">
            Kacper
          </span>
        </div>
      </div>

      {/* Error toast */}
      {error && (
        <div className="bg-red-900/50 border-b border-red-700 px-4 py-2 text-red-300 text-xs text-center">
          {error}
        </div>
      )}

      {/* Progress bars */}
      <div className="bg-[#111] border-b border-[#1a1a1a] px-4 py-3 flex gap-6">
        <ProgressBar user="danja" checked={countChecked(progress.danja)} total={TOPIC_IDS.length} />
        <ProgressBar user="kacper" checked={countChecked(progress.kacper)} total={TOPIC_IDS.length} />
      </div>

      {/* Split view */}
      <div className="flex flex-1 divide-x divide-[#1a1a1a] overflow-hidden">
        <UserColumn
          user="danja"
          progress={progress.danja}
          isOwner={currentUser === 'danja'}
          onCheck={handleCheck}
          onDetail={setDetailTopic}
        />
        <UserColumn
          user="kacper"
          progress={progress.kacper}
          isOwner={currentUser === 'kacper'}
          onCheck={handleCheck}
          onDetail={setDetailTopic}
        />
      </div>

      {/* Detail panel */}
      {detailTopic && (
        <TopicDetailPanel
          topic={detailTopic}
          onClose={() => setDetailTopic(null)}
        />
      )}
    </div>
  )
}
