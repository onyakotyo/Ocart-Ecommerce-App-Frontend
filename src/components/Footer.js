import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
     
        <footer >
            <Container  style={{backgroundColor: '#232F3E', height: '10rem',  color: '#ffffff',   }} fluid >
                <Row>
                    <Col className='text-center m-4'   expand="lg" >
                    <p><Link style = {{color: '#ffffff', textDecoration: 'none'}} to="/privacy" >Privacy</Link></p>


                    <p><Link style = {{color: '#ffffff', textDecoration: 'none'}} to="/terms" >Terms of Service</Link></p>

                    <p>Copyright &copy; {new Date().getFullYear()}  Ocart </p>
                            
                    </Col>
                </Row>

            </Container>
            
        </footer>
      
      
    )
}

export default Footer
