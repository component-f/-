import React from 'react'

type TableProps = {
  headers: string[]
  data: Array<{ [key: string]: React.ReactNode }>
  className?: string
}

const Table: React.FC<TableProps> = ({ headers, data, className }) => {
  return (
    <div className={`overflow-x-auto rounded-lg border ${className}`}>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={header}
                className={`py-2 px-4 border-b bg-accent  text-accent-foreground text-center text-sm font-semibold ${
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
            <tr
              key={rowIndex}
              className={`hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                rowIndex === data.length - 1 ? 'border-b-0' : 'border-b'
              }`}
            >
              {headers.map((header, cellIndex) => {
                const isLastRow = rowIndex === data.length - 1
                const isFirstColumn = cellIndex === 0
                const isLastColumn = cellIndex === headers.length - 1

                return (
                  <td
                    key={`${rowIndex}-${header}`}
                    className={`px-6 py-4 whitespace-nowrap text-sm ${
                      isLastRow && isFirstColumn ? 'rounded-bl-lg' : ''
                    } ${isLastRow && isLastColumn ? 'rounded-br-lg' : ''}`}
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
