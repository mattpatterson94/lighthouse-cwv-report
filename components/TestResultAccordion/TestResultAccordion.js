import { useState } from 'react'

export default function TestResultAccordion({ audit, children}) {
  const [showAccordion, setShowAccordion] = useState(false)

  function toggleAccordion(e) {
    e.preventDefault()

    setShowAccordion(!showAccordion)
  }

  function auditResult() {
    return (
      <svg className="mr-1.5 h-7 w-7 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    )
  }

  return (
    <li>
      <a href="#" id={audit.id} onClick={toggleAccordion} className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              { auditResult() }
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-sm font-medium truncate">{ audit.title }</p>
                { audit.displayValue && (
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                    <span className="truncate">&nbsp; { audit.displayValue }</span>
                  </p>
                )}
              </div>
              <div className="hidden md:block">
                <div>
                  <p className="text-sm text-gray-900">
                    { audit.description }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            { showAccordion ? (
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            ) : (
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
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
