import React from 'react'
import { Card, CardGroup, Button  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SellerRegisterSuccess = () => {



    return (
        <>
        <CardGroup>
                
                <Card className="text-center">
                    <Card.Header as="h4">Seller Registration Request Successful</Card.Header>
                
                    <i className="fas fa-hand-holding-usd fa-lg py-3" ></i>
                    <Card.Body>
                    <Card.Title>Thank you for applying to be a Seller</Card.Title>
                    <Card.Text>
                        We are currently processing your request and 
                        will send you a confirmation email shortly, also check your profile.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <LinkContainer to='/'>
                        <Button variant="dark">Go back to Home Page</Button>
                    </LinkContainer>
                    
                    </Card.Footer>
                </Card>
            </CardGroup>
            
        </>
    )
}

export default SellerRegisterSuccess
