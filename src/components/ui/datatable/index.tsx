import React, { useState } from 'react'
import CheckBox from '@/components/ui/checkbox' // CheckBox 컴포넌트 임포트

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
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full border border-border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b bg-gray-200 text-center text-sm font-semibold">
              <div className="flex justify-center">
                <CheckBox label="" name="selectAll" value="selectAll" checked={selectAll} onChange={handleSelectAll} />
              </div>
            </th>
            {columns.map((column) => (
              <th key={column.header} className="py-2 px-4 border-b bg-gray-200 text-left text-sm font-semibold">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-sm">
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
              {columns.map((column) => (
                <td key={column.accessor as string} className="py-2 px-4 border-b text-sm">
                  {row[column.accessor] as string | number | React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
