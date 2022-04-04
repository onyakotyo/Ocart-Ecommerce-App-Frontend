import React from 'react'
import { useSelector } from 'react-redux'
import {ListGroup, Row, Col} from 'react-bootstrap'
import StripeCheckout from './StripeCheckout'

const CheckOut = () => {
    const order = useSelector((state) => state.order)


   //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }




         



    return (
        <>
    
          <ListGroup variant='flush'>
            <ListGroup.Item>

            <h2>Checkout Summary</h2>

              <Row className='py-2'>
                  <Col>Total Number Transactions:</Col>
                  <Col> 1 </Col>
              </Row>
             
              <Row>
                  <Col className='py-2'>Sending</Col>
                  <Col>€{order.sendAmount.fromAmount}</Col>
              </Row>

              <Row>
                  <Col>Exchange rate </Col>
                  <Col> € 1 = $ {order.sendAmount.exchangeRate} </Col>
              </Row>

              <Row className='py-2'>
                  <Col>Fee</Col>
                  <Col>${order.shippingAmount}</Col>
              </Row>
              
              <Row className='py-2'>
                  <Col>Total amount to pay</Col>
                  <Col>${order.totalAmount}</Col>
              </Row>
              <Row className='py-2'>
                  <Col>Receiver gets</Col>
                  <Col>$ {order.sendAmount.toAmount}</Col>
              </Row>

             
            </ListGroup.Item>
            <ListGroup.Item>
                 <StripeCheckout />
            </ListGroup.Item>

          </ListGroup>
          </>
        
    )
}

export default CheckOut
