import React, {useState} from 'react'
import { Form, Button } from 'semantic-ui-react'

export default function New() {
    const { Group, Input } = Form;
    const [item, setItem] = useState('')
    const [cost, setCost] = useState('')
    const [soldFor, setSoldFor] = useState('')
    const [time, setTime] = useState('')
    // const [itemObj, setItemObj] = useState({})
   
  
    const onSubmit = e => {
        e.preventDefault()
        console.log('submit');
        // setItemObj({item, cost, soldFor, time})
        // console.log(itemObj);
        let items = JSON.parse(localStorage.getItem('items')) || []
        let itemObj = {item, cost, soldFor, time}
        console.log(items);
        items.push(itemObj)
        localStorage.setItem('items', JSON.stringify(items))
    }

    return (
        <Form onSubmit={onSubmit} >
            <Input fluid label='Item' placeholder='Item' onChange={e => setItem(e.target.value)} />
            <Input fluid label='Your Cost' type='number' placeholder='Cost' onChange={e => setCost(e.target.value)} />
             <Input fluid label='Item Sold for:' type='number' placeholder='Sold For' onChange={e => setSoldFor(e.target.value)} />
             <Input fluid label='Time Spent on Sale' type='number' placeholder='Hours' onChange={e => setTime(e.target.value)} />
             <Button primary >Create</Button>
        </Form>
    )
}
