import { useState } from 'react'

export default function AddressBox({ onSubmitFunc }) {
  const [url, setUrl] = useState('')
  const [strategy, setStrategy] = useState('mobile')

  return (
    <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
      <div className="border-4 border-dashed border-gray-200 rounded-lg flex px-6 py-6 items-center justify-center">
        <form action="#" className="w-full" onSubmit={(e) => onSubmitFunc(e, url, strategy)}>
          <div className="rounded-md shadow-sm flex -space-y-px">
            <div className='flex-grow'>
              <label htmlFor="address" className="sr-only">URL</label>
              <input id="address" name="address" type="url" value={url} onChange={e => setUrl(e.target.value)} required className="w-full appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-l-md focus:outline-none focus:ring-gray-800 focus:border-gray-800 focus:z-10 sm:text-md" placeholder="Enter in Web Address" />
            </div>
            <select value={strategy} onChange={e => setStrategy(e.target.value)} className='focus:ring-gray-800 focus:border-gray-800 px-2 relative block rounded-none bg-transparent focus:z-10 sm:text-sm border-t-2 border-b-2'>
              <option value='mobile'>Mobile</option>
              <option value='desktop'>Desktop</option>
            </select>
            <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800">
              <span>Go</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
