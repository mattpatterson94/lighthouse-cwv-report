import TestDetail from '../TestDetail/TestDetail'
import AuditScore from '../AuditScore/AuditScore'

export default function TestDetails({ performanceTest }) {
  const { lighthouseResult } = performanceTest

  return (
    <div className="flex-1 h-100 bg-white rounded-lg shadow px-5 py-6 sm:px-6">
      <TestDetail title="URL">{ lighthouseResult.finalUrl }</TestDetail>
      <TestDetail title="Form Factor">{ lighthouseResult.configSettings.formFactor }</TestDetail>
      <TestDetail title="Performance">
        <div className="flex gap-2 items-center">
          <AuditScore audit={lighthouseResult.categories.performance} size='small' />
          { lighthouseResult.categories.performance.score * 100 } / 100
        </div>
      </TestDetail>
      <TestDetail title="Total Blocking Time"><span className="lowercase">{ lighthouseResult.audits['total-blocking-time'].displayValue }</span></TestDetail>
      <TestDetail title="Categories">{ lighthouseResult.configSettings.onlyCategories.join(', ') }</TestDetail>
    </div>
  )
}
