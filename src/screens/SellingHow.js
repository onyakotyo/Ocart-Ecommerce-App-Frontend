import React from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'

const SellingHow = () => {
    return (
        <>
            
             <Row className='mt-5'>
                <Col className='text-center mt-5' >
                    <h3 style={{color: 'green', fontWeight: 'bold'}}>Sell on Ocart</h3>
                </Col>
                <Col className='text-center mt-5' >
                    <LinkContainer to='/selllerProductlist' className='btn btn-primary'>
                    <Button variant='warning'>
                        Start Selling
                    </Button>
                    
                </LinkContainer>
                </Col>
            </Row>
               
                
           

            <h4 className='text-center mt-5' style={{color: 'orange', fontWeight: 'bold'}}>Reach new customers on Ocart, start now!</h4>

            <Row >
                <Col className='mt-4 mb-2' sm={12} md={6} lg={6}>
                    <Card   border="primary" >
                        <Card.Header>How It Works</Card.Header>
                            <Card.Body>
                                <Card.Title> Card Title </Card.Title>
                                <Card.Text >
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col  className='mt-4 mb-2'sm={12} md={6} lg={6}>
                    <Card border="primary" >
                        <Card.Header>How It Works</Card.Header>
                            <Card.Body>
                                <Card.Title> Card Title </Card.Title>
                                <Card.Text >
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            
                <Col className='mt-4 mb-4'  sm={12} md={6} lg={6}>
                    <Card border="primary" >
                        <Card.Header>How It Works</Card.Header>
                            <Card.Body>
                                <Card.Title> Card Title </Card.Title>
                                <Card.Text >
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col  className='mt-4 mb-2' sm={12} md={6} lg={6}>
                    <Card border="primary" >
                        <Card.Header>How It Works</Card.Header>
                            <Card.Body>
                                <Card.Title> Card Title </Card.Title>
                                <Card.Text >
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            
            

    
            
        </>
    )
}

export default SellingHow
