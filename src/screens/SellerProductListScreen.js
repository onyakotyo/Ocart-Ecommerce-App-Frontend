import React, {useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listSellerProducts, deleteProduct, createProduct  } from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'
import { getUserSellerDetails } from '../actions/userActions'




const SellerProductListScreen = ({ history, match }) => {



    const dispatch = useDispatch()

   const productCreate = useSelector((state) => state.productCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct } = productCreate

     const productDelete = useSelector((state) => state.productDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete} = productDelete

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo} = userLogin

     const userDetails = useSelector(state => state.userDetailsSeller)
    const { user} = userDetails

    const productListSeller = useSelector((state) => state.productListSeller)
    const { loading, error, sellerProducts} = productListSeller



     console.log('USER-DETAILS-SELLER', productListSeller)

    useEffect(() => {
         dispatch({ type: PRODUCT_CREATE_RESET })

        if(userInfo) {
            if(!userInfo && !sellerProducts) {
                //dispatch(listSellerProducts())
                 history.push('/login')
            } 
            
             if(successCreate) {
            history.push(`/admin/product/${createdProduct._id}/edit`)
                } else {
                    dispatch(listSellerProducts())
                }
            
        } 

    
    }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct])

    


    const deleteHandler = (id) => {
        if(window.confirm('Are you sure')) {
            dispatch(deleteProduct(id))
        }
        
    }

    const createProductHandler = () => {
        dispatch(createProduct())
    }


    const addMultipleProductHandler = () => {
        // dispatch(createProduct())
         history.push('/productInsertExcel')
    }


    return (
         <>
         <Row className='align-items-center'>
             <Col>
                <h1>My Product List</h1>
             </Col>
             <Col className='text-right'>
                 <Button className='my-2' onClick={createProductHandler}>
                     <i className='fas fa-plus'></i> Add few Products
                 </Button>

             </Col>
             <Col className='text-right'>
                 <Button className='my-2' onClick={addMultipleProductHandler}>
                     <i className='fas fa-plus'></i> Add Multiple Products
                 </Button>

             </Col>
         </Row> 

         {loadingDelete && <Loader /> }
         {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

        {loadingCreate && <Loader /> }
         {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    { sellerProducts.length === 0 ? (
                    
                        <h5>No Listed seller Products</h5> )
                            
                        :
                        ( 
                        sellerProducts.map((product) => (
                        <tr key={product._id}>
                            <td>{product.productId}</td>
                            <td>{product.name}</td>
                            <td>
                            ${product.price}
                            </td>
                            <td>
                                {product.category}
                            </td>
                            <td>{product.brand}</td>
                             <td>
                            <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                <Button variant='light' className='btn-sm'>
                                <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>
                            <Button
                                variant='danger'
                                className='btn-sm'
                                onClick={() => deleteHandler(product._id)}
                            >
                                <i className='fas fa-trash'></i>
                            </Button>
                            </td>
                        </tr>
                        ))
                        )
                    }
                    
                </tbody>
                </Table>
                
                </>
            )}
            </>
    )
}

export default SellerProductListScreen
