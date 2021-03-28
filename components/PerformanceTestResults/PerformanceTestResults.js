import LoadingExperience from '../LoadingExperience/LoadingExperience'
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


function showLoadingExperiences({ loadingExperience }) {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <LoadingExperience experienceName='Cumulative Layout Shift' experience={loadingExperience.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE} />
        <LoadingExperience experienceName='First Contentful Paint' experience={loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS} />
        <LoadingExperience experienceName='Largest Contentful Paint' experience={loadingExperience.metrics.LARGEST_CONTENTFUL_PAINT_MS} />
        <LoadingExperience experienceName='First Input Delay' experience={loadingExperience.metrics.FIRST_INPUT_DELAY_MS} />
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
      { showLoadingExperiences(performanceTest) }

      <div className="my-5 flex gap-5">
        { showPerformanceDetails(performanceTest) }
        { showPerformanceScreenshot(performanceTest) }
      </div>

      { showPerformanceThumbnails(performanceTest) }

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          <TestResult audit={performanceTest.lighthouseResult.audits['bootup-time']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['long-tasks']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['mainthread-work-breakdown']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['network-requests']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['render-blocking-resources']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['resource-summary']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['server-response-time']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['third-party-facades']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['third-party-summary']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['total-byte-weight']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['unsized-images']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['unused-css-rules']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['unused-javascript']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['uses-optimized-images']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['uses-responsive-images']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['uses-webp-images']} />
          <TestResult audit={performanceTest.lighthouseResult.audits['uses-rel-preconnect']} />
        </ul>
      </div>

      {/* <div className="my-5">
        <h3 className="text-lg leading-6 mb-2 font-medium text-gray-900">
          Critical Request Chain
        </h3>

        <p className="mb-2">
          { performanceTest.lighthouseResult.audits['critical-request-chains'].displayValue}
        </p>

        <p className="mb-5">
          Longest Chain: { performanceTest.lighthouseResult.audits['critical-request-chains'].details.longestChain.length} ({ (performanceTest.lighthouseResult.audits['critical-request-chains'].details.longestChain.duration / 1000).toFixed(2) }s)
        </p>
      </div> */}

      {/* TODO: METRICS */}
    </div>
  )
}
