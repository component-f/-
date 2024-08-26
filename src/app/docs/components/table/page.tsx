import React from 'react'
import Table from '@/components/ui/table'

const TablePage: React.FC = () => {
  const headers = ['table 1', 'table 2', 'table 3', 'table 4']
  const data = [
    { 'table 1': 'table 1', 'table 2': 'table 2', 'table 3': 'table 3', 'table 4': 'table 4' },
    { 'table 1': 'table 1', 'table 2': 'table 2', 'table 3': 'table 3', 'table 4': 'table 4' },
    { 'table 1': 'table 1', 'table 2': 'table 2', 'table 3': 'table 3', 'table 4': 'table 4' },
    { 'table 1': 'table 1', 'table 2': 'table 2', 'table 3': 'table 3', 'table 4': 'table 4' },
  ]

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Table</h1>
      <Table headers={headers} data={data} />
    </div>
  )
}

export default TablePage
