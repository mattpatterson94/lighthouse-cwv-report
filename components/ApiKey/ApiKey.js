import { useEffect, useState } from 'react'

export default function ApiKey({ updateFunc }) {
  const [apiKey, setApiKey] = useState('')

  useEffect(() => {
    const localApiKey = localStorage.getItem('apiKey')

    if(localApiKey) {
      setApiKey(localApiKey)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('apiKey', apiKey)
    updateFunc(apiKey)
  }, [apiKey])

  return (
    <input id="apiKey" name="apiKey" type="text" value={apiKey} onChange={e => setApiKey(e.target.value)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter API Key" />
  )
}
