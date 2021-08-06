import React from 'react';
import { Formik } from 'formik';
import { Form, Input, SubmitButton, ResetButton } from 'formik-semantic-ui-react';
import { Label } from 'semantic-ui-react';

export default function TestForm() {
  const initialValues = {
    email: '',
    password: '',
  };
 
 function validateUsername(value) {
   let error;
   if (value === 'admin') {
     error = 'Nice try!';
   }
   return error;
 }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={ ()=>{ console.log('Form Submit' )} }
      >
        <Form size="large">
          <Input
            name="email"
            placeholder="Email"
            errorPrompt
            validate={validateUsername}
          />     
       <Input
            name="password"
            type="password"
            placeholder="Password"
            errorPrompt
          />
          <SubmitButton fluid primary>
            Login
          </SubmitButton>
          <ResetButton fluid secondary>
            Reset
          </ResetButton>
        </Form>
      </Formik>
    </div>
  );
};