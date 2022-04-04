
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserDetails} from '../actions/userActions'
import { getOrderDetails} from '../actions/orderActions'
import { withRouter } from 'react-router-dom';
import {Container, Row, Col, ListGroup} from 'react-bootstrap'





class ShippingLabelsPages extends React.PureComponent {

  

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
    
    
    return (
      <Container className='text-center'>
     
      <Row  >
        <Col  className='text-center'>
          {/* <ListGroup variant='flush'> */}
            <ListGroup.Item>
              <h5 className='mt-5 mb-4' style={{color: '#18bc9c'}} >Order {order.orderId}</h5>
              <h5 className='mb-4' style={{color: '#18bc9c'}}> Shipping Address</h5>

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
        </Row>

      
      </Container>
    )
  }
}


ShippingLabelsPages.propTypes = {
  getUserDetails: PropTypes.func.isRequired,
  orderDetails: PropTypes.object.isRequired,
  userDetails: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
  orderDetails: state.orderDetails,
  userDetails: state.userDetails,
  
})

export default connect(mapStateToProps, {getUserDetails, getOrderDetails})(withRouter(ShippingLabelsPages))






// const ShippingLabelsPages = React.forwardRef((props, ref, match, history) => {

//   console.log('history', ref)

//   const userId = match.params.id

  

//   const dispatch = useDispatch()

//    const userDetails = useSelector(state => state.userDetails)
//   const { user} = userDetails

//     const orderDetails = useSelector((state) => state.orderDetails)
//   const { order, loading, error } = orderDetails

//    const userLogin = useSelector(state => state.userLogin)

//     const {userInfo} = userLogin


//     useEffect(() => {
//         if(!userInfo) {
//             history.push('/login')
//         } else {
//             if (!user.name || user._id !== userId) {
//                 dispatch(getUserDetails(userId))
//             } else{
               
               
//             }
//         }
//     }, [dispatch, history, userInfo, user, userId ])




//     return (
//       <Container>
//         <table ref={ref}>
//         <thead>
//           <th>ID</th>
//           <th>NAME</th>
//           <th>EMAIL</th>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{user._id}</td>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
//           </tr>
//         </tbody>
//       </table>
//       </Container>
//     )
      
//     }
//     )

//     export default ShippingLabelsPages


