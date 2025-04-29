import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function EmergencyNotice() {
  const payload = await getPayload({ config: configPromise })

  const emergencyNotice = await payload.findGlobal({
    slug: 'emergency-notice',
  })

  const items = emergencyNotice?.items || []

  if (items.length === 0) return

  return (
    <ul className="flex flex-col bg-red-500">
      {items.map((item) => (
        <li className="px-4 py-2" key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  )
}
