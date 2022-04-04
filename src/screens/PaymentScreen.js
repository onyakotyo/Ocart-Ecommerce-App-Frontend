import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'


const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if(!shippingAddress){
      history.push('/shipping')
  }

  //const [paymentMethod, setPaymentMethod ] = useState('PayPal')

   const [stripePaymentMethod, setStripePaymentMethod ] = useState('')

  
  
  const dispatch = useDispatch()

  // if(stripePaymentMethod) {

  //   const submitHandler = (e) => {
  //   e.preventDefault()
  //   dispatch(savePaymentMethod(stripePaymentMethod))
  //   history.push('/placeorder')

  // }

  // } else {

  //   const submitHandler = (e) => {
  //   e.preventDefault()
  //   dispatch(savePaymentMethod(paymentMethod))
  //   history.push('/placeorder')
  // }

  // }

    const submitHandler = (e) => {
    e.preventDefault()
    //dispatch(savePaymentMethod(paymentMethod))
    dispatch(savePaymentMethod(stripePaymentMethod))
     //history.push('/placeorder')
    history.push('/checkout')

    }

  
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3/>
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
        
        <Col>
            {/* <Form.Check
                type= 'radio'
                label='PayPal or Creadit Card'
                id='PayPal'
                name='paymentMethod'
                value='PayPal'
                checked
                Change={(e) => setPaymentMethod(e.target.value)}
            > 
            </Form.Check> */}

             <Form.Check
                 type= 'radio'
                 label='Stripe'
                 id='Stripe'
                 name='stripePaymentMethod'
                 required = {true}
                 onChange={(e) => setStripePaymentMethod(e.target.value)}
             > 
             </Form.Check>
        </Col>

        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>

        </Form>
     
    </FormContainer>
  )
}

export default PaymentScreen