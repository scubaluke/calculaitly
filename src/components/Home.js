import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import TableRows from './TableRows';
import TotalsTable from './TotalsTable';

export default function Home() {
    // get items from local storage
    const items = JSON.parse(localStorage.getItem('items')) || []
    console.log(items);
    // render table rows and calculate net / totals 
    let net = 0;
    let totalTime = 0;
    const RenderRows = items.map(({item, cost, soldFor, time}) => {
        net += (soldFor - cost)
        totalTime += parseInt(time)
        return  <TableRows item={item} cost={cost} soldFor={soldFor} time={time} />
    })
    console.log('totalTime', totalTime);
    // calculate totals 
    const totalItems = items.length
    const {totalCost} = items.reduce((acc, value) => ({totalCost: parseInt(acc.cost) + parseInt(value.cost)}))
    const {gross} = items.reduce((acc, value) => ({gross: parseInt(acc.soldFor) + parseInt(value.soldFor) }))
    
    // items.forEach(item => net += (item.soldFor - item.cost))
    console.log('net', net);
    // const {net} = items.reduce((acc, value) => ({net : parseInt(acc.)}))

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
                      {RenderRows}
                </Table.Body>
                    <TotalsTable items={totalItems} purchaseCost={totalCost} gross={gross} net={net} />
            </Table>
          <hr />
      
            <hr />
            <Link to='/new'><Button primary >Add Item</Button></Link>
        </>
    )
}
