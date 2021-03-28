import LogIcon from '../LogIcon/LogIcon'
import ScoreIcon from '../ScoreIcon/ScoreIcon'
import { SCORE_CLASSES } from '../../lib/constants'

export default function AuditScore({ audit, size }) {
  const score = scoreAudit(audit)

  if(audit.warnings && audit.warnings.length > 0) {
    return <LogIcon size={size} type='warning' />
  }

  if(audit.scoreDisplayMode === 'informative') {
    return <LogIcon size={size} type='info' />
  }

  return <ScoreIcon type={score} size={size} />
}

function scoreAudit({ score }) {
  if(score < 0.5) return 'slow'
  if(score < 0.75) return 'average'

  return 'fast'
}

export function auditScoreClass(audit) {
  return SCORE_CLASSES[scoreAudit(audit)]
}
