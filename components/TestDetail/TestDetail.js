export default function TestDetail({ title, children }) {
  return (
    <div className="my-5">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        { title }
      </h3>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p className="capitalize">{ children }</p>
      </div>
    </div>
  )
}
