import React from 'react'
import { Table } from 'semantic-ui-react'

export default function TableRows({item, cost, soldFor, time}) {
    const total = soldFor - cost
    const sign = Math.sign(total)
    console.log(sign);
    return (
    <Table.Row>
        <Table.Cell>{item}</Table.Cell>
        <Table.Cell>{cost}</Table.Cell>
        <Table.Cell>{soldFor}</Table.Cell>
         <Table.Cell>{total}</Table.Cell>
        <Table.Cell>{time}</Table.Cell>
        <Table.Cell>${(total / time).toFixed(2)}/ hour</Table.Cell>
      </Table.Row>
    )
}
