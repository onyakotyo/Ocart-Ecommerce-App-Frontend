import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardGroup, Button  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {useSelector } from 'react-redux'


const Canceled = ({history}) => {

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo ) {
       history.push('/login')
    } 
  }, [history, userInfo])

  return (
    <>
    <CardGroup>
                
                <Card className="text-center">
                    <Card.Header as="h4">Payment Unsuccessful</Card.Header>
                
                    <i className="fas fa-hand-holding-usd fa-lg py-3" ></i>
                    <Card.Body>
                    <Card.Title>Payment was not successful</Card.Title>
                    <Card.Text>
                        Please try again
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <LinkContainer to='/cart'>
                        <Button variant="dark">Try again to Checkout</Button>
                    </LinkContainer>
                    
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
  );
}

export default withRouter(Canceled);