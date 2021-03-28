import { useState } from 'react'
import AuditScore from '../AuditScore/AuditScore'
import LogIcon from '../LogIcon/LogIcon'
import { ChevronRightSolid, ChevronDownSolid  } from "@graywolfai/react-heroicons"

export default function TestResultAccordion({ audit, children}) {
  const [showAccordion, setShowAccordion] = useState(false)

  function toggleAccordion(e) {
    e.preventDefault()

    setShowAccordion(!showAccordion)
  }

  return (
    <li>
      <a href="#" id={audit.id} onClick={toggleAccordion} className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              <AuditScore audit={audit} size='medium' />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-sm font-medium truncate">{ audit.title }</p>
                { audit.displayValue && (
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    <LogIcon type='info' />
                    <span className="truncate">&nbsp; { audit.displayValue }</span>
                  </p>
                )}
              </div>
              <div className="hidden md:block">
                <div>
                  <p className="text-sm text-gray-900">
                    { audit.id }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            { showAccordion ? (
              <ChevronDownSolid className='h-5 w-5 text-gray-400' />
            ) : (
              <ChevronRightSolid className='h-5 w-5 text-gray-400' />
            )}
          </div>
        </div>
      </a>
      <div className={`${showAccordion ? 'block' : 'hidden'} p-5`}>
        { children }
      </div>
    </li>
  )
}
