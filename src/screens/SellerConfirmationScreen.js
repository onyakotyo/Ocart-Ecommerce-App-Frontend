import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Form, Button} from 'react-bootstrap'
//import { LinkContainer } from 'react-router-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { sellerConfirmationPost} from '../actions/userActions'
import { getUserDetails } from '../actions/userActions'
//import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'



const SellerConfirmationScreen = ({ match, history }) => {

    const userId = match.params.id

    console.log('USERID', userId)

    const [clientIdCheck, setClientIdCheck] = useState('Yes')
    const [ bankAccountCheck, setBankAccountCheck] = useState('Yes')
    const [chargeableCard,  setChargeableCard] = useState('Yes')

    
    const dispatch = useDispatch()

     const userDetails = useSelector(state => state.userDetails)
    const { success, user} = userDetails

    //console.log('USER-DETAILS', user)

     const userUpdate = useSelector((state) => state.userUpdate)
        const {
            loading: loadingUpdate,
            error: errorUpdate,
            success: successUpdate,
        } = userUpdate


    const userLogin = useSelector(state => state.userLogin)

    const {loading, error, userInfo} = userLogin

    //console.log('USER-LOGIN', userLogin)


   

    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
        } else {
            if (!user.name || user._id !== userId) {
                dispatch(getUserDetails(userId))
            } else{
               
               
            }
        }
    }, [dispatch, history, userInfo, user, success, userId ])


    useEffect(() => {
   if(!userInfo) {
            history.push('/login')
      
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
       
        
      }
    }
  }, [dispatch, history, userId, user, successUpdate, userInfo])

     const submitHandler = (e, sellerConfirmation) => {
          e.preventDefault()
        if(window.confirm('By pressing continue - you will be signing off your name against this seller and you will be signed off as the authorisation officer. Are you sure, you have you filled in all the fields correctly?')) {
            dispatch(sellerConfirmationPost(
                    userId ,
                sellerConfirmation = {
                    email: userInfo.email,
                    name: userInfo.name,
                    chargeableCard: chargeableCard, 
                    clientIdCheck: clientIdCheck,
                    bankAccountCheck: bankAccountCheck
                }
            ))
            history.push('/admin/userlist')
        }
        
     }


    return (
        <>
             <FormContainer>


                {error && <Message variant='danger'>{error}</Message>}
               {loading && <Loader />} 
                   
                <h5 className='text-center py-3 m-3'>Seller Confirmation Form</h5>
                 
                     

                <Form  onSubmit={submitHandler}> 
                <Form.Group >

                 
                     
                    <h5 className='text-center py-2'>Please fill in the form below accurately</h5>
  

                    <Form.Check
                            type= 'radio'
                            label='Client ID Checked'
                            id='clientId'
                            name='clientIdCheck'
                            value='Yes'
                            required
                            //checked
                            Change={(e) => setClientIdCheck(e.target.value)}
                        > 
                    </Form.Check>
                    <br />
                    <Form.Check
                            type= 'radio'
                            label='Bank Account Checked'
                            id='bankAccountCheck'
                            name='bankAccountCheck'
                            value='Yes'
                            required
                            //checked
                            Change={(e) => setBankAccountCheck(e.target.value)}
                        > 
                    </Form.Check>
                    <br />
                    <Form.Check
                            type= 'radio'
                            label='Chargeable Card Checked'
                            id='chargeable Card'
                            name='chargeableCard'
                            value='Yes'
                            required
                            //checked
                            Change={(e) => setChargeableCard(e.target.value)}
                        > 
                    </Form.Check>
                    <br />
                    
                        <Button type='submit' variant='dark' >
                            Continue
                        </Button>
                   
                     
  
                </Form.Group>
                </Form>  
            </FormContainer>
            
        </>
    )
}

export default SellerConfirmationScreen
