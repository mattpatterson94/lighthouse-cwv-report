export default function LoadingExperience({ experienceName, experience }) {
  const cssClass = getCssClass(experience)
  const icon = getIcon(experience, cssClass)
  const experienceMetric = getExperienceMetric(experienceName, experience)

  return (
    <div className="relative bg-white pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt className="text-base font-normal text-gray-900">
        { experienceName }
      </dt>
      <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
        <div className={`flex items-baseline text-2xl font-semibold text-${cssClass}-600`}>
          { experienceMetric }
        </div>

        <div className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium text-${cssClass}-800 md:mt-2 lg:mt-0`}>
          <span className="sr-only">
            Score
          </span>
          { icon }
        </div>
      </dd>
    </div>
  )
}

function getExperienceMetric(experienceName, experience) {
  if(experienceName === 'Cumulative Layout Shift') {
    return experience.percentile / 1000
  }

  return `${experience.percentile / 1000} s`
}

function getIcon(experience, cssClass) {
  switch (experience.category) {
    case 'SLOW':
      return (
        <svg className={`w-5 h-5 text-${cssClass}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      )
    case 'AVERAGE':
      return (
        <svg className={`h-5 w-5 text-${cssClass}-400`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
      )
    default:
      return (
        <svg className={`w-5 h-5 text-${cssClass}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      )
  }
}

function getCssClass(experience) {
  switch (experience.category) {
    case 'SLOW':
      return 'red'
    case 'AVERAGE':
      return 'yellow'
    default:
      return 'green'
  }
}
