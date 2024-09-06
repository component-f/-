import React, { useState } from 'react'
import { CheckBox } from '@/components/ui/checkbox' // CheckBox 컴포넌트 임포트

type DataTableProps<T> = {
  data: T[]
  columns: {
    header: string
    accessor: keyof T
  }[]
  className?: string
}

const DataTable = <T,>({ data, columns, className }: DataTableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([])
  const [selectAll, setSelectAll] = useState(false)

  const handleSelectRow = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((row) => row !== index))
    } else {
      setSelectedRows([...selectedRows, index])
    }
  }

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([])
      setSelectAll(false)
    } else {
      setSelectedRows(data.map((_, index) => index))
      setSelectAll(true)
    }
  }

  return (
    <div className={`overflow-x-auto rounded-lg border ${className}`}>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b bg-accent text-accent-foreground text-center text-sm font-semibold rounded-tl-lg">
              <div className="flex justify-center">
                <CheckBox label="" name="selectAll" value="selectAll" checked={selectAll} onChange={handleSelectAll} />
              </div>
            </th>
            {columns.map((column, index) => (
              <th
                key={column.header}
                className={`py-2 px-4 border-b bg-accent text-accent-foreground text-left text-sm font-semibold ${
                  index === columns.length - 1 ? 'rounded-tr-lg' : ''
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const isLastRow = rowIndex === data.length - 1

            return (
              <tr
                key={rowIndex}
                className={`hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                  isLastRow ? '' : 'border-b'
                }`}
              >
                <td className={`py-2 px-4 text-sm ${isLastRow ? 'rounded-bl-lg' : 'border-b'}`}>
                  <div className="flex justify-center">
                    <CheckBox
                      label=""
                      name={`selectRow-${rowIndex}`}
                      value={`${rowIndex}`}
                      checked={selectedRows.includes(rowIndex)}
                      onChange={() => handleSelectRow(rowIndex)}
                    />
                  </div>
                </td>
                {columns.map((column, cellIndex) => (
                  <td
                    key={column.accessor as string}
                    className={`py-2 px-4 text-sm ${
                      isLastRow && cellIndex === columns.length - 1 ? 'rounded-br-lg' : isLastRow ? '' : 'border-b'
                    }`}
                  >
                    {row[column.accessor] as string | number | React.ReactNode}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
