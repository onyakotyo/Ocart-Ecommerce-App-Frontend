import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {  Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listSellerOrders } from '../actions/orderActions'
import { getUserDetails } from '../actions/userActions'

const SellerOrderListScreen = ({ history }) => {

  

  const dispatch = useDispatch()

  const sellerOrderList = useSelector((state) => state.sellerOrderList)
  const { loading, error, orders } = sellerOrderList
  

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

    const userDetails = useSelector(state => state.userDetails)
    const {user} = userDetails

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserDetails(userInfo._id))
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

   useEffect(() => {
    if (userInfo && user.isSeller) {
      dispatch(listSellerOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo, user.isSeller])

  return (
    <>
      
      <h1>Seller Orders List</h1>
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
              <th>DATE</th>
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
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order && order.isPaid  ? (
                    order.paidAt.substring(0, 10) 
                    //order.paidAt
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {order && order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`} >
                    <Button variant='success' className='btn-sm '>
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

export default SellerOrderListScreen