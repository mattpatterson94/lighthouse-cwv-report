import TestResultAccordion from '../TestResultAccordion/TestResultAccordion'
import TestResultTable from '../TestResultTable/TestResultTable'

export default function TestResult({ audit, children }) {
  if(audit.scoreDisplayMode === 'notApplicable') {
    return null
  }

  if(audit.score && audit.score === 1 && audit.numericValue === 0) {
    return null
  }

  return (
    <TestResultAccordion audit={audit}>
      { children ? <div>Something</div> : <TestResultTable audit={audit} /> }
    </TestResultAccordion>
  )
}
