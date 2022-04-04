import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardGroup, Button  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { createOrder, getOrderDetails, payOrder } from '../../actions/orderActions'
//import { CART_REMOVE_ALL_ITEMS }  from '../../constants/cartConstants'
//import { ORDER_CREATE_RESET } from '../constants/orderConstants'
//import { USER_DETAILS_RESET } from '../constants/userConstants'

const Success = ({history, location}) => {

   const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  console.log('CART', cart)

   //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))

  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)



  // const orderDetails = useSelector((state) => state.orderDetails)
  // const { order, loading, error } = orderDetails

   const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  // const orderPay = useSelector((state) => state.orderPay)
  // const { loading: loadingPay, success: successPay } = orderPay

  // const orderDeliver = useSelector((state) => state.orderDeliver)
  // const { loading: loadingDeliver, success: successDeliver } = orderDeliver


   useEffect(() => {
    if (!userInfo ) {
       history.push('/login')
    } 
  }, [history, userInfo])
  
  useEffect(() => {

    if(!userInfo ) {
      //&& cart.cartItems && cart.cartItems === 0
      history.push('/login')
    } else {    

      dispatch(createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        //paymentMethod: cart.paymentMethod,
        paymentMethod: 'Stripe',
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice
      }))

      //dispatch({ type: CART_REMOVE_ALL_ITEMS })

      // window.localStorage.removeItem( "cartItems") //remove one item   
       //window.localStorage.removeItem("paymentMethod") //remove one item  
       //window.localStorage.removeItem( "shippingAddress") //remove one item   

    }
  }, [
        history,
        userInfo,
        dispatch,
        cart.cartItems,
        cart.shippingAddress,
        cart.paymentMethod,
        cart.itemsPrice,
        cart.shippingPrice,
        cart.taxPrice,
        cart.totalPrice
  ])

  //   const orderId = order._id

  //   useEffect(() => {
  //   if (!userInfo ) {
  //      history.push('/login')
  //   } else {
  //     dispatch(getOrderDetails(orderId))
  //     dispatch(payOrder(orderId))
  //   }
  // }, [history, userInfo, dispatch, orderId])
      

  

    
    
  


  

 
    




  return (
    
    <>
    <CardGroup>
                
                <Card className="text-center">
                    <Card.Header as="h4">Payment Successful</Card.Header>
                
                    <i className="fas fa-hand-holding-usd fa-lg py-3" ></i>
                    <Card.Body>
                    <Card.Title>Thank you for your order</Card.Title>
                    <Card.Text>
                        We are currently processing your order and 
                        will send you a confirmation email shortly
                    </Card.Text>
                    <Card.Text>
                       If you have any questions, please email {''}
                          <a href="mailto:ocartorders@example.com"><span style={{color: 'green'}}>ocartorders@example.com</span></a>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <LinkContainer to='/'>
                        <Button variant="primary">Continue Shopping</Button>
                    </LinkContainer>
                    
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
  );
}

export default withRouter(Success);