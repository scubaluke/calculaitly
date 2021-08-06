import React from 'react'
import { Table, Button,Icon } from 'semantic-ui-react'

export default function TotalsTable({items, purchaseCost, gross, net, totalTime, totalPerHr, setItems}) {
    const profit = Math.sign(net) < 0
    const onClearAll = () => {
        localStorage.clear()
        setItems([])
    }
    
    return (
        <>
            <Table.Header>
                <Table.HeaderCell>Total Items</Table.HeaderCell>
                <Table.HeaderCell>Total Purchase Cost</Table.HeaderCell>
                <Table.HeaderCell>Gross</Table.HeaderCell>
                <Table.HeaderCell>Net</Table.HeaderCell>
                <Table.HeaderCell>Total Time</Table.HeaderCell>
                <Table.HeaderCell>$ / Hour</Table.HeaderCell>
                {!!items ? <Table.HeaderCell>Clear All</Table.HeaderCell> : <Table.HeaderCell></Table.HeaderCell>}
            </Table.Header>
            <Table.Body>
                <Table.Row error={profit}>
                       <Table.Cell>{items}</Table.Cell>
                       <Table.Cell>{purchaseCost}</Table.Cell>
                        <Table.Cell>{gross}</Table.Cell>
                        <Table.Cell>{net}</Table.Cell>
                        <Table.Cell>{totalTime} hr</Table.Cell>
                        <Table.Cell>{totalPerHr} hr</Table.Cell>
                       {!!items && ( 
                       <Table.Cell>
                            <Button size='tiny' onClick={onClearAll} >
                                <Icon color='red' name='x'/>
                            </Button>
                        </Table.Cell>)}
                        
                </Table.Row>
            </Table.Body>
       </>
    )
}
