import React from 'react'

type TableProps = {
  headers: string[]
  data: Array<{ [key: string]: React.ReactNode }>
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={header}
                className={`px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                  index === 0 ? 'rounded-tl-lg' : ''
                } ${index === headers.length - 1 ? 'rounded-tr-lg' : ''}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {headers.map((header, cellIndex) => {
                const isLastRow = rowIndex === data.length - 1
                const isFirstColumn = cellIndex === 0
                const isLastColumn = cellIndex === headers.length - 1

                return (
                  <td
                    key={`${rowIndex}-${header}`}
                    className={`px-6 py-4 whitespace-nowrap ${
                      isLastRow ? '' : 'border-b'
                    } border-grgay-200 text-sm text-gray-700 ${isLastRow && isFirstColumn ? 'rounded-bl-lg' : ''} ${
                      isLastRow && isLastColumn ? 'rounded-br-lg' : ''
                    }`}
                  >
                    {row[header]}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
