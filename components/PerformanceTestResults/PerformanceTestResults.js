import LoadingExperience from '../LoadingExperience/LoadingExperience'
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

function showPerformanceError(error) {
  return (
    <div className="bg-red-50 border-l-4 border-red-400 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-red-700">{ error.message }</p>
        </div>
      </div>
    </div>
  )
}

function showLoadingExperiences(loadingExperiences) {
  return (
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Core Web Vital Metrics
      </h3>
      <dl class="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
        <LoadingExperience experienceName='Cumulative Layout Shift' experience={loadingExperiences.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE} />
        <LoadingExperience experienceName='First Contentful Paint' experience={loadingExperiences.metrics.FIRST_CONTENTFUL_PAINT_MS} />
        <LoadingExperience experienceName='Largest Contentful Paint' experience={loadingExperiences.metrics.LARGEST_CONTENTFUL_PAINT_MS} />
        <LoadingExperience experienceName='First Input Delay' experience={loadingExperiences.metrics.FIRST_INPUT_DELAY_MS} />
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
      <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
        { showLoadingExperiences(performanceTest.loadingExperience) }
      </div>
    </div>
  )
}
