import 'tailwindcss/tailwind.css'
import ApiKey from '../components/ApiKey/ApiKey'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [apiKey, setApiKey] = useState(null)

  return (
    <div>
     <style jsx global>{`
        body {
          background: #eeeeee;
        }
     `}</style>
      <div className="bg-gray-800 pb-32">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="border-b border-gray-700">
              <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Core Web Vitals Test
              </h1>
            </div>
            <div>
              <ApiKey updateFunc={setApiKey} />
            </div>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <Component apiKey={apiKey} {...pageProps} />
        </div>
      </main>
    </div>

  )
}

export default MyApp
