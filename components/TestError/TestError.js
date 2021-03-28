import { ExclamationCircleSolid } from "@graywolfai/react-heroicons"

export default function TestError({ error }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-400 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationCircleSolid className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-400">{ error.message }</p>
        </div>
      </div>
    </div>
  )
}
