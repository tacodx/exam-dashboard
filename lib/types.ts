export type UserId = 'danja' | 'kacper'

export type Section =
  | 'diagnose'
  | 'betrieb'
  | 'wiso'

export interface Topic {
  id: string
  label: string
  section: Section
  subtopics: string[]
}

export type Progress = Record<string, boolean>
