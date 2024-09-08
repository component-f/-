import React, { useState, useEffect } from 'react'
import { CheckBox } from '@/components/ui/checkbox' // CheckBox 컴포넌트 임포트

type DataTableColumn<T> = {
  header: string
  accessor: keyof T
  visible?: boolean
}

type DataTableProps<T> = {
  data: T[]
  columns: DataTableColumn<T>[]
  className?: string
  onSelectedRowsChange?: (selectedRows: T[]) => void // 선택된 행을 부모에게 전달하는 콜백
}

const DataTable = <T,>({ data, columns, className, onSelectedRowsChange }: DataTableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<T[]>([])

  useEffect(() => {
    if (onSelectedRowsChange) {
      onSelectedRowsChange(selectedRows)
    }
  }, [selectedRows, onSelectedRowsChange])

  const handleSelectRow = (row: T) => {
    const rowString = JSON.stringify(row)
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.some((r) => JSON.stringify(r) === rowString)
        ? prevSelectedRows.filter((r) => JSON.stringify(r) !== rowString)
        : [...prevSelectedRows, row],
    )
  }

  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(data)
    }
  }

  const isRowSelected = (row: T) => {
    return selectedRows.some((r) => JSON.stringify(r) === JSON.stringify(row))
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
              <div className="flex justify-start">
                <CheckBox
                  label=""
                  name="selectAll"
                  value="selectAll"
                  checked={selectedRows.length === data.length}
                  onChange={handleSelectAll}
                />
              </div>
            </th>
            {columns
              .filter((column) => column.visible !== false)
              .map((column) => (
                <th key={column.header} className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                  {column.header}
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`hover:bg-gray-50 ${isRowSelected(row) ? 'bg-gray-100' : ''}`} // 선택된 행의 배경 색상을 변경
            >
              <td className="py-3 px-4 text-sm text-gray-700 border-t border-gray-300">
                <div className="flex justify-start">
                  <CheckBox
                    label=""
                    name={`selectRow-${rowIndex}`}
                    value={`${rowIndex}`}
                    checked={isRowSelected(row)}
                    onChange={() => handleSelectRow(row)}
                  />
                </div>
              </td>
              {columns
                .filter((column) => column.visible !== false)
                .map((column) => (
                  <td
                    key={column.accessor as string}
                    className="py-3 px-4 text-sm text-gray-700 border-t border-gray-300"
                  >
                    {String(row[column.accessor])}
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
