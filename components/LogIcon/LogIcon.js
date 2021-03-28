import { LOG_CLASSES } from '../../lib/constants'
import { CheckCircleSolid, ExclamationCircleSolid, InformationCircleSolid, XCircleSolid } from "@graywolfai/react-heroicons"

export default function LogIcon({ type, size }) {
  const iconSize = sizeClass(size)

  switch (type) {
    case 'info':
      return <InformationCircleSolid className={`h-${iconSize} w-${iconSize} text-${LOG_CLASSES['info']}-400`} />
    case 'warning':
      return <ExclamationCircleSolid className={`h-${iconSize} w-${iconSize} text-${LOG_CLASSES['warning']}-400`} />
    case 'error':
      return <XCircleSolid className={`h-${iconSize} w-${iconSize} text-${LOG_CLASSES['error']}-400`} />
    default:
      return <CheckCircleSolid className={`h-${iconSize} w-${iconSize} text-${LOG_CLASSES['success']}-400`} />
  }
}

function sizeClass(size) {
  if(size === 'small') return 5
  if(size === 'medium') return 7
  if(size === 'large') return 10

  return 5
}
