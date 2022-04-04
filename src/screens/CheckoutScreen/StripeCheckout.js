import React, {useState} from 'react'
import {  useStripe } from '@stripe/react-stripe-js'
import { useSelector } from 'react-redux'
import { fetchFromAPI }  from './StripeHelper'
import {Button, Form } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import FormContainer from '../../components/FormContainer'
import CheckoutSteps from '../../components/CheckoutSteps'
//import Stripe from 'stripe'
//import { LinkContainer } from 'react-router-bootstrap'


const StripeCheckout = () => {

  

    const userLogin = useSelector(state => state.userLogin)

    const { loading, error, userInfo } = userLogin


   
    const [email, setEmail] = useState('')

       
        const cart = useSelector((state) => state.cart)
         const { cartItems } = cart

         console.log('CART STRIPE', cartItems)

        const stripe = useStripe()

        const checkoutHandler  = async (e) => {
            e.preventDefault();

            const line_items = cartItems.map(item => {
            return {
                quantity: item.qty,
                price_data: {
                currency: 'usd',
                unit_amount: item.price * 100, // amount is in cents
                product_data: {
                    name: item.name,
                    description: item.description,
                    images: [item.image]
                    //images:  '/Users/onesmusnyakotyo/ocart/frontend/public/images/airpods.jpg'
                    
                },
                
                }
            }
            });


            console.log('LINEITEMS', line_items )
       

        const response = await fetchFromAPI('create-checkout-session', {
             body: { line_items, customer_email: email },
            });

            console.log('RESPONSE', response )


        const { sessionId } = response;

           console.log('SESSIONID', sessionId )

        const { error } = await stripe.redirectToCheckout({
             sessionId
            });

         if(error) {
            console.log(error);
            }


         
        }

    return (
        <>
            <FormContainer>

               <CheckoutSteps step1 step2 step3 step4 />

               {error && <Message variant='danger'>{error}</Message>}
               {loading && <Loader />}
                   
                <h4 className='text-center py-3 m-3'>Please Checkout Below</h4>
                 
                     

                <Form  onSubmit={checkoutHandler}> 
                <Form.Group className='text-center'>
  
                    <Form.Control 
                        type="email" 
                        placeholder="Email"  
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <br />
    
                    <Button type='submit' variant='primary'>
                            Checkout
                    </Button>
  
                </Form.Group>
                </Form>  
            </FormContainer>
            </>
    )
}

export default StripeCheckout


