import { describe, it, expect } from 'vitest'
import { TOPICS, TOPIC_IDS, getTopic } from './topics'

describe('topics', () => {
  it('has exactly 16 topics', () => {
    expect(TOPICS.length).toBe(16)
  })

  it('all topic ids are unique', () => {
    const ids = TOPICS.map(t => t.id)
    expect(new Set(ids).size).toBe(16)
  })

  it('all topics have id, label, section, and subtopics', () => {
    for (const topic of TOPICS) {
      expect(topic.id).toBeTruthy()
      expect(topic.label).toBeTruthy()
      expect(topic.section).toBeTruthy()
      expect(Array.isArray(topic.subtopics)).toBe(true)
      expect(topic.subtopics.length).toBeGreaterThan(0)
    }
  })

  it('TOPIC_IDS contains all 16 ids', () => {
    expect(TOPIC_IDS.length).toBe(16)
  })

  it('getTopic returns the correct topic', () => {
    const t = getTopic('netzwerke-osi')
    expect(t?.label).toContain('OSI')
  })

  it('getTopic returns undefined for unknown id', () => {
    expect(getTopic('nonexistent')).toBeUndefined()
  })
})
