import LogIcon from '../LogIcon/LogIcon'
import { LOG_CLASSES } from '../../lib/constants'

export default function Banner({ type, children }) {
  const cssClass = LOG_CLASSES[type]

  return (
    <div className={`bg-${cssClass}-50 border-l-4 border-${cssClass}-400 p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <LogIcon type={type} />
        </div>
        <div className="ml-3">
          <p className={`text-sm text-${cssClass}-700`}>
            { children }
          </p>
        </div>
      </div>
    </div>
  )
}
