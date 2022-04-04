
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserDetails} from '../actions/userActions'
import { getOrderDetails} from '../actions/orderActions'
import { withRouter } from 'react-router-dom';
import {Container, Row, Col, ListGroup, Card, Image} from 'react-bootstrap'





class ShippingReceipt extends React.PureComponent {


   componentDidMount() {

      const { match: { params } } = this.props

     console.log('PARAMS',params._id)
       if (params._id) {
        this.props.getOrderDetails(params._id)

    }
    
    
   }

   

  render() {

    const  orderDetails  = this.props.orderDetails
    const { order} = orderDetails
    const userDetails  = this.props.userDetails
    const { user} = userDetails

     //console.log('ORDER', orderDetails)
    console.log('USER-DETAILS', orderDetails)


   //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

   order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  
    
    
    return (
      <Container className='text-center'>
     
      <Row  >
        <Col  md={6} className='text-center'>
          {/* <ListGroup variant='flush'> */}
            <ListGroup.Item>
              <h4 style={{ flexWrap: "wrap", color: '#18bc9c'}} className='mt-3 text-center' >Order {order.orderId}</h4>
              <h2 className='mb-2'> Shipping Address</h2>

              <hr />
              <p style={{fontWeight: 'bold', fontSize: 18}}>
                {/* <strong>Name: </strong>  */}
                {order.user.name}
              </p>
              {/* <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p> */}
              
                {/* <strong>Address:</strong> */}
                <p>{order.shippingAddress.address}</p>
                <p>{order.shippingAddress.city}</p>
                <p>{order.shippingAddress.postalCode}</p>
                <p>{order.shippingAddress.country}</p>
             
                
              
            </ListGroup.Item>
            {/* </ListGroup> */}
          </Col>

          <Col md={6}>
          <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
             
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col>
                        
                            {item.name}
                         
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              
            </ListGroup.Item>
          {/* </ListGroup> */}
        </Col>
        <Col md={12} className='mt-3'>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

            </ListGroup>
             </Card>
            </Col>
        </Row>

      
      </Container>
    )
  }
}


ShippingReceipt.propTypes = {
  getUserDetails: PropTypes.func.isRequired,
  orderDetails: PropTypes.object.isRequired,
  userDetails: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
  orderDetails: state.orderDetails,
  userDetails: state.userDetails,
  
})

export default connect(mapStateToProps, {getUserDetails, getOrderDetails})(withRouter(ShippingReceipt ))




