import React from 'react'
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-semantic-ui-react';

export default function New({history}) {
   const validate = values => {
        let error = {}
        if (values.item === '') {
            error.item = 'Please enter an item name'
        }
        if (values.cost  === '') {
            error.cost = 'Please enter a value'
        }
        if (values.soldFor === '') {
            error.soldFor = 'Please enter a value'
        } 
        if (values.time === '') {
            error.time  = 'Please enter a value'
        }
       return error;
    }


    const onSubmit = (values) => {
        // e.preventDefault()
      
        let items = JSON.parse(localStorage.getItem('items')) || []
        let {item, cost, soldFor, time} = values
        let itemObj = {item, cost, soldFor, time}

        items.push(itemObj)
        localStorage.setItem('items', JSON.stringify(items))
        history.push("/");
      }

    const initialValues = {item:'', cost: '', soldFor: '', time : ''}
    return (
        <div  style={{margin: '20px'}} >
        <Formik  
            initialValues={initialValues}
            onSubmit={(values) => onSubmit(values)}
            validate={values => validate(values)}
            >
        <Form  >
            <Input 
                label='Item Name' 
                name='item'
                placeholder='Item' 
                errorPrompt
            />
            <Input 
                label='Your Cost' 
                name='cost'
                type='number' 
                min='0'
                placeholder='Cost' 
                errorPrompt
            />
             <Input 
                label='Item Sold for:' 
                name='soldFor'
                type='number' 
                min='0'
                placeholder='Sold For' 
                errorPrompt

            />
             <Input 
                label='Time Spent on Sale' 
                name='time'
                type='number' 
                min='0'
                placeholder='Hours' 
                errorPrompt
            />
             <SubmitButton primary
             >Submit</SubmitButton>
        </Form>
        </Formik>
        </div>
    )
}
