import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import _ from 'lodash'
//import xlsx from 'xlsx'
import XLSX from 'xlsx';

const ProductInsertExcelScreen = () => {

    const [files, setFiles] = useState('')
    const [uploading, setUploading] = useState(false)

    const productUpdate = useSelector((state) => state.productUpdate)

    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = productUpdate


    const uploadFileHandler = async (e) => {
        
     let { files } = e.target

    //  //console.log('FORMDATA-FILES', files )
    
    // const formData = new FormData()
    //     for (let i = 0; i < files.length; i++) {
    //         formData.append('images', files[i]) 
    //         // console.log('FILES', files[i])                     
    //     }

    //if(e.target.files){

        const reader = new FileReader();

        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, {type: 'array'});
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet);
            console.log('JSON DATA',json)

            const jsonArray =[]

           

            //  json.map((jsn,index) => 
            //     (
                  
            //       (jsn && index === index) ?
                
            //        jsonArray.push(jsn.imageOne, jsn.imageTwo, jsn.imageThree, jsn.imageFour, jsn.imageFive) : null
            //     )
         
            //    )

              //  json.filter(jsn => jsn.includes('images')).map(filteredjsn => (

              //      jsonArray.push(filteredjsn )

              // ))

              //  console.log('JSON-ARRAY', jsonArray )
        }

         reader.readAsArrayBuffer(files[0])

               
    
  
    //}

        

 


      
    
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

        console.log('JSON PRODUCT FILE', reader)
      //const { data } = await axios.post('/api/upload',reader, config)

     //console.log('AXIOS-PHOTOS', data )

      //setFiles(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    // dispatch(
    //   updateProduct({
       
    //   })
    // )
  }






  return(
    <>
    
        <Link to='/admin/productlist' className='btn btn-primary my-3'>
        Go Back
      </Link>
      <Card>
        <Card.Header  as="h4" style={{textAlign: 'center'}}>Add Multiple Products</Card.Header>
        <Card.Body style={{  alignSelf: 'center'}}>

          {/* <FormContainer > */}
           
            {/* {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : ( */}
              <Form onSubmit={submitHandler}>
                {/* <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='price'>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></Form.Control>
                </Form.Group> */}
              
                <Form.Group controlId='file' style={{margin: 6}}>
                  <Form.Label style={{color: '#18bc9c'}}>Only Excel File can be uploaded.</Form.Label>
                  
                  {/* <Form.Control
                    type='file'
                    placeholder='Upload file'
                    value={files}
                    onChange={(e) => setFiles(e.target.value)}
                  ></Form.Control> */}
                  
                  <Form.File
                    multiple
                    id='excel-file'
                    //label='Choose Files'
                    custom
                    onChange={uploadFileHandler}
                  ></Form.File>
                  {uploading && <Loader />}
                </Form.Group>
              
    {/* 
                <Form.Group controlId='brand'>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter brand'
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  ></Form.Control>
                </Form.Group> */}

                {/* <Form.Group controlId='countInStock'>
                  <Form.Label>Count In Stock</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter countInStock'
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='category'>
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='description'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Form.Control>
                </Form.Group> */}

                <Button type='submit' variant='primary' style={{marginTop: 6}}>
                  Upload Products
                </Button>
              </Form>
            {/* ) */}
            {/* } */}
          {/* </FormContainer> */}
          </Card.Body>
      </Card>
    </>
  ) 

};

export default ProductInsertExcelScreen;
