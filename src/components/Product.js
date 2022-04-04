import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'


const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                {product.images?.map((image, index) => 
                
                <ul key={index} style={{alignItems:'center', justifyContent: 'center', padding: 2}} >
                    { index === 0 && (<Card.Img src={image} variant='top' style={{height: '12rem', width: '100%'}} />  )}
                </ul>
                
                
                )}
                {/* <Card.Img  src={product.image} variant='top' /> */}
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name} </strong>
                        
                    </Card.Title>  
                </Link>

                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


export default Product
