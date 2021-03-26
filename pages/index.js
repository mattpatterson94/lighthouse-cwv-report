import Head from 'next/head'
import { useState } from 'react'
import AddressBox from '../components/AddressBox/AddressBox'
import PerformanceTestResults from '../components/PerformanceTestResults/PerformanceTestResults'
import runPerformanceTest from '../lib/runPerformanceTest'

export default function Home({ apiKey }) {
  const [performanceTest, setPerformanceTest] = useState(null)
  const [loading, setLoading] = useState(false)

  async function startPerformanceTest(e, url) {
    e.preventDefault()

    setPerformanceTest(null)
    setLoading(true)

    const testResults = await runPerformanceTest(url, apiKey)

    console.log(testResults)

    setLoading(false)

    setPerformanceTest(testResults)
  }

  return (
    <div>
      <Head>
        <title>Lighthouse Core Web Vitals Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AddressBox onSubmitFunc={startPerformanceTest} />
      <div className='mt-10'>
        <PerformanceTestResults performanceTest={performanceTest} loading={loading} />
      </div>
    </div>
  )
}
