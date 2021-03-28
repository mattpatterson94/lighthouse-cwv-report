export default function TestResultTable({ audit }) {
  return (
    <div>
      { audit.warnings && (
        <div>
          { audit.warnings.map(warning => (
            <p>{ warning }</p>
          ))}
        </div>
      )}
      <div className="max-h-96 w-full overflow-y-scroll overflow-x-hidden">
        { audit.details && (
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                { audit.details.headings.map((heading, i) => (
                  <th key={`${audit.id}-heading-${i}`} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    { heading.text || heading.label }
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              { audit.details.items.map((item, i) => (
                <tr key={`${audit.id}-item-${i}`} class={`${(i%2 > 0) ? 'bg-gray-50' : 'bg-white'}`}>
                  { audit.details.headings.map((heading, j) => (
                    <td key={`${audit.id}-item-${i}-heading-${j}`} className="px-6 py-4">
                      <p className="text-sm max-w-sm whitespace-nowrap overflow-x-hidden overflow-ellipsis font-medium text-gray-900 ">
                        { itemDetail(item, heading) }
                      </p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

function itemDetail(item, heading) {
  const detail = item[heading.key]

  // if(typeof detail === 'object' && heading.subItemsHeading) {
  //   return detail[heading.subItemsHeading.key]
  // }

  if(heading.itemType === 'node') {
    return detail.selector
  }

  if(typeof detail === 'object') {
    return detail.text
  }

  if(heading.itemType === 'thumbnail') {
    return (
      <img src={detail} width="50" height="50" />
    )
  }

  if(heading.itemType === 'ms') {
    return `${(detail / 1000).toFixed(2)}s`
  }

  if(heading.itemType === 'bytes') {
    return `${Math.round(detail / 1000)}kb`
  }

  return detail
}
