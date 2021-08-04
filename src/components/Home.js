import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import TableRows from './TableRows';

export default function Home() {
    const items = JSON.parse(localStorage.getItem('items')) || []
    console.log(items);
    const RenderedRows = items.map(({item, cost, soldFor, time}) => {
        return  <TableRows item={item} cost={cost} soldFor={soldFor} time={time} />

    })
    return (
        <>
            <h1>Calculaitly</h1>
            <h3>Calculate Your Online Sales</h3>
            <Table>
                 <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Item Name</Table.HeaderCell>
                    <Table.HeaderCell>Purchase Price</Table.HeaderCell>
                    <Table.HeaderCell>Sale Price</Table.HeaderCell>
                    <Table.HeaderCell>Profit / Loss</Table.HeaderCell>
                    <Table.HeaderCell>Time Spent</Table.HeaderCell>
                    <Table.HeaderCell>$ / Hour</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                      {RenderedRows}
                </Table.Body>
            </Table>
          
            <hr />
            <Link to='/new'><Button primary >Add Item</Button></Link>
        </>
    )
}
