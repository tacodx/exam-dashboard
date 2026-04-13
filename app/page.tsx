import { getProgress } from '@/lib/kv'
import Dashboard from '@/components/Dashboard'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const [danja, kacper] = await Promise.all([
    getProgress('danja'),
    getProgress('kacper'),
  ])

  return <Dashboard initialDanja={danja} initialKacper={kacper} />
}
