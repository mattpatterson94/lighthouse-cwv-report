import TestDetail from '../TestDetail/TestDetail'

export default function TestDetails({ performanceTest }) {
  const { lighthouseResult } = performanceTest

  return (
    <div className="flex-1 h-100 bg-white rounded-lg shadow px-5 py-6 sm:px-6">
      <TestDetail title="URL">{ lighthouseResult.finalUrl }</TestDetail>
      <TestDetail title="Form Factor">{ lighthouseResult.configSettings.formFactor } (Emulated { lighthouseResult.configSettings.emulatedFormFactor })</TestDetail>
      <TestDetail title="Performancee">{ lighthouseResult.categories.performance.score * 100 } / 100</TestDetail>
      <TestDetail title="Total Blocking Time">{ lighthouseResult.audits['total-blocking-time'].displayValue }</TestDetail>
      <TestDetail title="Categories">{ lighthouseResult.configSettings.onlyCategories.join(', ') }</TestDetail>
    </div>
  )
}
