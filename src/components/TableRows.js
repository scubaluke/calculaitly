import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'

export default function TableRows({item, cost, soldFor, time, total, index, setItems}) {
    const loss = Math.sign(total) !== 1

    const onRemoveItem = () => {
        const localItems = JSON.parse(localStorage.getItem('items'))
        localItems.splice(index, 1)
        localStorage.setItem('items', JSON.stringify(localItems))

        setItems(localItems)
    }

    return (
    <Table.Row positive={!loss} error={loss} >
        <Table.Cell>{item}</Table.Cell>
        <Table.Cell>{cost}</Table.Cell>
        <Table.Cell>{soldFor}</Table.Cell>
         <Table.Cell>{total}</Table.Cell>
        <Table.Cell>{time}</Table.Cell>
        <Table.Cell>${(total / time).toFixed(2)}/ hour</Table.Cell>
        <Table.Cell>
            <Button size='tiny' onClick={onRemoveItem} >
                <Icon color='red' name='x'/>
            </Button>
        </Table.Cell>
                    

      </Table.Row>
    )
}
