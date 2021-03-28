import Vital from '../Vital/Vital'
import TestResult from '../TestResult/TestResult'
import TestDetails from '../TestDetails/TestDetails'
import TestError from '../TestError/TestError'
import Spinner from '../Spinner/Spinner'

export default function PerformanceTestResults({ performanceTest, loading }) {
  return (performanceTest || loading) && (
    <div>
      { loading && showSpinner() }

      { performanceTest && showPerformanceTestResults(performanceTest) }
    </div>
  )
}

function showSpinner() {
  return (
    <div className='w-full flex justify-center'>
      <Spinner />
    </div>
  )
}

function showPerformanceDetails(performanceTest) {
  return (
    <TestDetails performanceTest={performanceTest} />
  )
}

function showPerformanceError(error) {
  return (
    <TestError error={error} />
  )
}

function showPerformanceScreenshot(performanceTest) {
  return (
    <div>
      <img src={ performanceTest.lighthouseResult.audits['final-screenshot'].details.data } />
    </div>
  )
}

function showPerformanceThumbnails(performanceTest) {
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Thumbnails
      </h3>

      <div className="my-5 flex gap-5">
        { performanceTest.lighthouseResult.audits['screenshot-thumbnails'].details.items.map((item, i) => (
          <div key={`thumbnail-${i}`} className="relative bg-white py-1 px-1 shadow rounded-lg overflow-hidden">
            <img src={item.data} />

            <p className="text-xs pt-2 text-center">{item.timing / 1000}s</p>
          </div>
        ))}
      </div>
    </div>
  )
}


function showVitals(performanceTest) {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Vital audit={performanceTest.lighthouseResult.audits['first-contentful-paint']} />
        <Vital audit={performanceTest.lighthouseResult.audits['largest-contentful-paint']} />
        <Vital audit={performanceTest.lighthouseResult.audits['cumulative-layout-shift']} />
        <Vital audit={performanceTest.lighthouseResult.audits['max-potential-fid']} />
      </dl>
    </div>
  )
}

function showPerformanceTestResults(performanceTest) {
  if(performanceTest.error) {
    return showPerformanceError(performanceTest.error)
  }

  return (
    <div>
      { showVitals(performanceTest) }

      <div className="my-5 flex gap-5">
        { showPerformanceDetails(performanceTest) }
        { showPerformanceScreenshot(performanceTest) }
      </div>

      { showPerformanceThumbnails(performanceTest) }

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          <TestResult audit={performanceTest.lighthouseResult.audits['bootup-time']} />
          {/* <TestResult audit={performanceTest.lighthouseResult.audits['critical-request-chains']} /> */}
          {/* <TestResult audit={performanceTest.lighthouseResult.audits['diagnostics']} /> */}
          {/* <TestResult audit={performanceTest.lighthouseResult.audits['dom-size']} /> */}
          <TestResult audit={performanceTest.lighthouseResult.audits['duplicated-javascript']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['efficient-animated-content']} />
          {/* <TestResult audit={performanceTest.lighthouseResult.audits['estimated-input-latency']} /> */}
          {/* <TestResult audit={performanceTest.lighthouseResult.audits['first-cpu-idle']} /> */}
          <TestResult audit={performanceTest.lighthouseResult.audits['font-display']} />
          {/* <TestResult audit={performanceTest.lighthouseResult.audits['interactive']} /> */}
          <TestResult audit={performanceTest.lighthouseResult.audits['largest-contentful-paint-element']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['layout-shift-elements']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['legacy-javascript']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['long-tasks']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['main-thread-tasks']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['mainthread-work-breakdown']} />
          {/* <TestResult audit={performanceTest.lighthouseResult.audits['metrics']} /> */}
          <TestResult audit={performanceTest.lighthouseResult.audits['network-requests']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['network-rtt']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['network-server-latency']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['no-document-write']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['non-composited-animations']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['offscreen-images']} />
          {/* <TestResult audit={performanceTest.lighthouseResult.audits['performance-budget']} /> */}
          <TestResult audit={performanceTest.lighthouseResult.audits['preload-lcp-image']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['redirects']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['render-blocking-resources']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['resource-summary']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['server-response-time']} />
          {/* <TestResult audit={performanceTest.lighthouseResult.audits['speed-index']} /> */}
          <TestResult audit={performanceTest.lighthouseResult.audits['third-party-facades']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['third-party-summary']} />
          {/* <TestResult audit={performanceTest.lighthouseResult.audits['timing-budget']} /> */}
          <TestResult audit={performanceTest.lighthouseResult.audits['total-byte-weight']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['unminified-css']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['unminified-javascript']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['unsized-images']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['unused-css-rules']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['unused-javascript']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['user-timings']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['uses-long-cache-ttl']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['uses-optimized-images']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['uses-passive-event-listeners']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['uses-rel-preconnect']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['uses-rel-preload']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['uses-responsive-images']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['uses-text-compression']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['uses-webp-images']} />
        </ul>
      </div>
    </div>
  )
}
