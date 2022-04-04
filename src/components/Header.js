import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Route } from 'react-router-dom'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox  from './SearchBox'
import { getUserDetails } from '../actions/userActions'
import { useHistory } from "react-router-dom"
import { CART_REMOVE_ALL_ITEMS }  from '../constants/cartConstants'
import Logo from './Logo'
//import SearchButtons from '../components/SearchButtons'


const Header = ({ match }) => {

    const history = useHistory()

    //const userId = match.params.id

    const dispatch = useDispatch()

     //const productId = match.params.id

  //const qty = history.location.search ? Number(history.location.search.split('=')[1]) : 1


  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  //console.log('CART', cartItems )


  

    const userDetails = useSelector(state => state.userDetails)
    const { success, user} = userDetails

    


      //console.log('User', user.isSeller)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
        } else {
            if (userInfo) {
                dispatch(getUserDetails(userInfo._id))
            } else{
               
               
            }
        }
    }, [dispatch, history, userInfo, success])


    const logoutHandler = () => {
         //history.push('/') 
        dispatch(logout())
       
        dispatch({ type: CART_REMOVE_ALL_ITEMS })
        window.localStorage.clear(); //clear all localstorage
        //window.localStorage.removeItem("my_item_key"); //remove one item   
        
    }


    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/' >
                        {/* <Navbar.Brand ></Navbar.Brand> */}
                        <Nav.Link><Logo /></Nav.Link>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Route render={({ history }) => <SearchBox history={history}  />} />

                   
                     
                    <Nav className="m-auto">
                    {!userInfo ? (
                        <LinkContainer to="/login"> 
                            <Nav.Link>
                                {/* <i className="fas fa-hand-holding-usd fa-lg "></i>  */}
                                Sell
                            </Nav.Link>
                    </LinkContainer>   

                    ) : user.isSeller ? (
                         <LinkContainer to="/sellingHow"> 
                            <Nav.Link>
                                {/* <i className="fas fa-hand-holding-usd fa-lg "></i>  */}
                                Sell
                            </Nav.Link>
                    </LinkContainer>   
                    ) :

                    (
                         <LinkContainer to="/sellerRegister"> 
                            <Nav.Link>
                                <i className="fas fa-hand-holding-usd fa-lg "></i> Sell
                            </Nav.Link>
                    </LinkContainer>   
                    )
                
                }

                    { user && user.sellerConfirmation && user.isSeller ? (
                        <LinkContainer to="/selllerProductlist"> 
                            <Nav.Link>
                                My Product List
                            </Nav.Link>
                    </LinkContainer>   
                    ) 
                    : (
                         null
                    )
                    }

                     { user && user.sellerConfirmation && user.isSeller ? (
                        <LinkContainer to='/sellerOrders'> 
                            <Nav.Link>
                                Seller Orders List
                            </Nav.Link>
                    </LinkContainer>   
                    ) 
                    : (
                         null
                    )
                    }

                    
                     
                    <LinkContainer to="/cart">  
                        <Nav.Link>
                            <i className= 'fas fa-shopping-cart'></i> Cart {' '}
                            {/* <Badge variant="danger"> {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}</Badge> */}
                            <span className="badge rounded-pill bg-danger">{cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}</span>
                        </Nav.Link>
                        {/* <h6>
                            ({cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
                            items
                        </h6> */}
                    </LinkContainer>
                    { 
                    userInfo ? (
                        
                        <NavDropdown title= { userInfo.name }  id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item><i className= 'fas fa-user'></i> Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={ logoutHandler }> Logout</NavDropdown.Item>
                        </NavDropdown>   

                                        )
                    : 
                        <LinkContainer to="/login"> 
                            <Nav.Link>
                                <i className= 'fas fa-user'></i> Sign In
                            </Nav.Link>
                        </LinkContainer>    
                    }

                    {userInfo && userInfo.isAdmin && (
                        <NavDropdown title= 'Admin'  id='adminmenu'>
                            <LinkContainer to='/admin/userlist'>
                                <NavDropdown.Item><i className= 'fas fa-users'></i> Users</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/productlist'>
                                <NavDropdown.Item>Products</NavDropdown.Item>
                            </LinkContainer>
                              <LinkContainer to='/admin/orderlist'>
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                            </LinkContainer>
                            
                        </NavDropdown>   
                    )
                    }
                    
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
