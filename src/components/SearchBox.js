import React, { useState } from 'react'
import { Form, Button, } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

   

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler}   className="d-flex" style={{width: '22rem'}} > 
     
      <Form.Control
        // style={{width: '60%'}}
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-2 text-center m-2'
        
      ></Form.Control>
      <Button type='submit' variant='outline-success'  
      className=' m-auto'
      >
        Search
      </Button>
     
    </Form>
  )
}

export default SearchBox