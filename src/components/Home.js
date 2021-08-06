import React, { useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import TableRows from './TableRows';
import TotalsTable from './TotalsTable';

export default function Home() {
    // get items from local storage and set it as state
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || [])

    // render table rows and calculate net / totals 
    let net = 0;
    let totalTime = 0;
    let totalPerHr = 0;
    let totalCost = 0;
    let gross = 0;
    const RenderRows = items.map(({item, cost, soldFor, time}, i) => {
        net += (soldFor - cost)
        totalTime += parseInt(time)
        totalPerHr += parseInt( (soldFor - cost) / time)
        totalCost += parseInt(cost)
        gross += parseInt(soldFor)
        
        return  <TableRows index={i} key={i} item={item} cost={cost} soldFor={soldFor} time={time} total={parseInt(soldFor) - parseInt(cost)} setItems={setItems} />
    }) 

    return (
        <div style={{margin: '20px'}}>
            <h1>Calculaitly!</h1>
            <h3>Calculate Your Online Sales</h3>
            {!Boolean(items.length) ? <h1>Add items to get started</h1> 
            : (
            <Table>
                 <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Item Name</Table.HeaderCell>
                    <Table.HeaderCell>Purchase Price</Table.HeaderCell>
                    <Table.HeaderCell>Sale Price</Table.HeaderCell>
                    <Table.HeaderCell>Profit / Loss</Table.HeaderCell>
                    <Table.HeaderCell>Time Spent</Table.HeaderCell>
                    <Table.HeaderCell>$ / Hour</Table.HeaderCell>
                    <Table.HeaderCell>Remove</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                      {RenderRows}
                </Table.Body>
                    <TotalsTable items={items.length} purchaseCost={totalCost} gross={gross} net={net} totalTime={totalTime} totalPerHr={totalPerHr} setItems={setItems} />
            </Table>
            )}
            <hr />
    
            <Link to='/new'><Button primary >Add Item</Button></Link>
        </div>
    )
}
