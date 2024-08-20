import React from 'react'
import Table from '@/components/ui/table'

const TablePage: React.FC = () => {
  const headers = ['Name', 'Age', 'Email']
  const data = [
    { Name: 'John Doe', Age: 28, Email: 'john@example.com' },
    { Name: 'Jane Smith', Age: 34, Email: 'jane@example.com' },
    { Name: 'Mike Johnson', Age: 45, Email: 'mike@example.com' },
  ]

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User Table</h1>
      <Table headers={headers} data={data} />
    </div>
  )
}

export default TablePage
