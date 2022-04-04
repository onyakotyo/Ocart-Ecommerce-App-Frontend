import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {  Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders } from '../actions/orderActions'
import moment from 'moment'

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList
  

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  return (
    <>
      
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>EMAIL</th>
              <th>DATE CREATED</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.orderId}</td>
                 <td>{order.user.name }</td>
                <td>{order.user.email }</td>
                <td>
                  {/* {order.createdAt.substring(0, 10)} */}
                  {moment(order.createdAt).format("DD/MM/YYYY , h:mm a")}
               
                  </td>
                <td>${order.totalPrice.toFixed(2)}</td>
                <td>
                  {order && order.isPaid ? (
                    //order.paidAt.substring(0, 10) 
                    //order.paidAt
                    `${moment(order.paidAt).format("DD/MM/YYYY , h:mm a")}`
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {order && order.isDelivered ? (
                    // order.deliveredAt.substring(0, 10)
                    `${moment(order.deliveredAt).format("DD/MM/YYYY , h:mm a")}`

                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='success' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>

        </Table>
        
      )}
      
    </>
  )
}

export default OrderListScreen