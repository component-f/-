'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { DataTable } from '@/components/ui/datatable'
import { Button } from '@/components/ui/button'

type Payment = {
  status: string
  email: string
  amount: string
}

// DataTableColumn 타입 정의
type DataTableColumn<T> = {
  header: string
  accessor: keyof T
  visible?: boolean
}

export default function Payments() {
  const [selectedRows, setSelectedRows] = useState<Payment[]>([])
  const [forceResetKey, setForceResetKey] = useState(0)

  const data: Payment[] = [
    { status: 'Success', email: 'abe45@gmail.com', amount: '$242.00' },
    { status: 'Processing', email: 'monserrat44@gmail.com', amount: '$837.00' },
    { status: 'Success', email: 'silas22@gmail.com', amount: '$874.00' },
    { status: 'Failed', email: 'carmella@hotmail.com', amount: '$721.00' },
    { status: 'Success', email: 'ken99@yahoo.com', amount: '$316.00' },
  ]

  const columns: DataTableColumn<Payment>[] = [
    { header: 'Status', accessor: 'status', visible: true },
    { header: 'Email', accessor: 'email', visible: true },
    { header: 'Amount', accessor: 'amount', visible: true },
  ]

  const handleSelect = () => {
    // 선택된 값을 무시하고 컴포넌트를 리셋
    setForceResetKey((prevKey) => prevKey + 1)
  }

  return (
    <Card>
      <CardHeader className="flex flex-col justify-between space-y-1.5 p-6">
        <CardTitle className="text-xl font-semibold leading-none tracking-tight">Payments</CardTitle>
        <CardDescription>Manage your payments.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center">
          <Input placeholder="Filter emails..." id="emails" className="mr-4" />
          <Select
            key={forceResetKey} // key를 업데이트하여 Select 컴포넌트를 리셋 > 임시방편, datatable과 연계가 가능하도록 수정하는 게 목표
            options={[
              { label: 'Columns', value: 'columns', hidden: true },
              { label: 'Status', value: 'status' },
              { label: 'Email', value: 'email' },
              { label: 'Amount', value: 'amount' },
            ]}
            onSelect={handleSelect}
            defaultSelected="columns"
          />
        </div>
        <div>
          <DataTable data={data} columns={columns} onSelectedRowsChange={setSelectedRows} />
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-sm mt-2 text-muted-foreground">
            {selectedRows.length} of {data.length} row(s) selected.
          </div>
          <div className="flex space-x-2">
            <Button disabled>Previous</Button>
            <Button disabled>Next</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
