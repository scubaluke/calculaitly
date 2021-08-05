import React from 'react'
import { Table } from 'semantic-ui-react'

export default function TotalsTable({items, purchaseCost, gross, net}) {
    return (
        <>
            <Table.Header>
                <Table.HeaderCell>Total Items</Table.HeaderCell>
                <Table.HeaderCell>Total Purchase Cost</Table.HeaderCell>
                <Table.HeaderCell>Gross</Table.HeaderCell>
                <Table.HeaderCell>Net</Table.HeaderCell>
                <Table.HeaderCell>Total Time</Table.HeaderCell>
                <Table.HeaderCell>$ / Hour</Table.HeaderCell>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                       <Table.Cell>{items}</Table.Cell>
                       <Table.Cell>{purchaseCost}</Table.Cell>
                        <Table.Cell>{gross}</Table.Cell>
                        <Table.Cell>{net}</Table.Cell>
                </Table.Row>
            </Table.Body>
       </>
    )
}
