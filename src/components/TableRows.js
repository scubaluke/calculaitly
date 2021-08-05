import React from 'react'
import { Table } from 'semantic-ui-react'

export default function TableRows({item, cost, soldFor, time}) {
    const total = soldFor - cost
    const loss = Math.sign(total) !== 1
    
    return (
    <Table.Row positive={!loss} error={loss} >
        <Table.Cell>{item}</Table.Cell>
        <Table.Cell>{cost}</Table.Cell>
        <Table.Cell>{soldFor}</Table.Cell>
         <Table.Cell>{total}</Table.Cell>
        <Table.Cell>{time}</Table.Cell>
        <Table.Cell>${(total / time).toFixed(2)}/ hour</Table.Cell>
      </Table.Row>
    )
}
