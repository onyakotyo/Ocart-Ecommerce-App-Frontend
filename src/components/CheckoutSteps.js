import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


 
const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className = 'justify-content-center mb-4 ' >
            <Nav.Item>
                { step1 ? (
                    <LinkContainer  to='/login' style={{color:'green'}}>
                       
                        <Nav.Link >
                            <i class="fas fa-check-circle m-1"></i>
                            Sign In
                        </Nav.Link>
                    </LinkContainer>
                ) : (<Nav.Link disabled>
                     <i class="far fa-check-circle m-1"></i>
                    Sign In
                    </Nav.Link>)}
            </Nav.Item>
            <Nav.Item>
                { step2 ? (
                    <LinkContainer to='/shipping' style={{color:'green'}}>
                        <Nav.Link style={{color:'green'}}>
                        <i class="fas fa-check-circle m-1"></i>
                            Shipping
                            
                        </Nav.Link>
                    </LinkContainer>
                ) : (<Nav.Link disabled>
                    <i class="far fa-check-circle m-1"></i>
                    Shipping
                    
                    </Nav.Link>)}
            </Nav.Item>
            <Nav.Item>
                { step3 ? (
                    <LinkContainer to='/payment' style={{color:'green'}}>
                        <Nav.Link>
                        <i class="fas fa-check-circle m-1"></i>
                            Payment
                        </Nav.Link>
                    </LinkContainer>
                ) : (<Nav.Link disabled>
                    <i class="far fa-check-circle m-1"></i>
                    Payment
                    </Nav.Link>)}
            </Nav.Item>
            <Nav.Item>
                { step4 ? (
                    <LinkContainer to='/placeorder' style={{color:'green'}}>
                        <Nav.Link>
                        <i class="fas fa-check-circle m-1"></i>
                            Place Order
                        </Nav.Link>
                    </LinkContainer>
                ) : (<Nav.Link disabled>
                    <i class="far fa-check-circle m-1"></i>
                    Place Order
                    </Nav.Link>)}
            </Nav.Item>
            
        </Nav>
    )
}

export default CheckoutSteps
