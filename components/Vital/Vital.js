import { CheckCircleSolid, ExclamationCircleSolid, XCircleSolid } from "@graywolfai/react-heroicons"

export default function Vital({ audit }) {
  const [cssClass, icon] = getScoreComponents(audit)

  return (
    <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt className="text-base font-normal text-gray-900">
        { audit.title }
      </dt>
      <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
        <div className={`flex items-baseline text-2xl font-semibold text-${cssClass}-600`}>
          { audit.displayValue }
        </div>

        <div className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium text-${cssClass}-800 md:mt-2 lg:mt-0`}>
          <span className="sr-only">
            Score
          </span>
          { icon }
        </div>
      </dd>
    </div>
  )
}

function getScoreComponents(audit) {
  if(audit.score < 0.5) {
    return ['red', <XCircleSolid className={`w-5 h-5 text-red-400`} />]
  }

  if(audit.score < 0.75) {
    return ['yellow', <ExclamationCircleSolid className={`h-5 w-5 text-yellow-400`} />]
  }

  return ['green', <CheckCircleSolid className={`h-5 w-5 text-green-400`} />]
}
