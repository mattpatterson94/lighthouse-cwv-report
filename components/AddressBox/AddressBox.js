import { useState } from 'react'

export default function AddressBox({ onSubmitFunc }) {
  const [url, setUrl] = useState('')
  return (
    <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
      <div className="border-4 border-dashed border-gray-200 rounded-lg flex px-6 py-6 items-center justify-center">
        <form action="#" className="w-full" onSubmit={(e) => onSubmitFunc(e, url)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="address" className="sr-only">URL</label>
              <input id="address" name="address" type="url" value={url} onChange={e => setUrl(e.target.value)} required className="w-full appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-md" placeholder="Enter in Web Address" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
