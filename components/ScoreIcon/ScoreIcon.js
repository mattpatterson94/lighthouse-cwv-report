import { SCORE_CLASSES, SIZE_CLASSES } from '../../lib/constants'
import { CheckCircleSolid, ExclamationCircleSolid, XCircleSolid } from "@graywolfai/react-heroicons"

export default function ScoreIcon({ type, size }) {
  const sizeClass = SIZE_CLASSES[size]
  const iconClass = SCORE_CLASSES[type]

  if(type === 'slow') {
    return <XCircleSolid className={`h-${sizeClass} w-${sizeClass} text-${iconClass}-400`} />
  }

  if(type === 'average') {
    return <ExclamationCircleSolid className={`h-${sizeClass} w-${sizeClass} text-${iconClass}-400`} />
  }

  return <CheckCircleSolid className={`h-${sizeClass} w-${sizeClass} text-${iconClass}-400`} />
}
