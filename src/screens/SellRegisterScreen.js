import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {Form, Button} from 'react-bootstrap'
//import { LinkContainer } from 'react-router-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { useDispatch} from 'react-redux'
import { saveSellerRegister} from '../actions/userActions'
import { getUserDetails } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const SellRegisterScreen = ({history}) => {

 
  
    const [firstName, setFirstname] = useState('')
    const [middleName, setMiddlename] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [address, setAddress] = useState('')
    const [town, setTown] = useState('')
    const [country, setCountry] = useState('')
    const [bankAccount, setBankAccount] = useState('')
    const [chargeCard, setChargeCard] = useState('')
    const [idNumber,  setIdNumber] = useState('')
  

    const dispatch = useDispatch()

     const userDetails = useSelector(state => state.userDetails)
    const { user} = userDetails

    //console.log('USER-DETAILS', user)


    const userLogin = useSelector(state => state.userLogin)

    //console.log('USER-LOGIN', userLogin)


    const { loading, error, userInfo} = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile




    useEffect(() => {
        if(!userInfo) {
            history.push('/login')
        } else {
            if(!user.name || success ){
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
            } else{
                setLastname(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success ])


    const sellerRegister =  useSelector(state => state.sellerRegister)
    const { success: sellerRegisterSuccess } = sellerRegister

  

      


    const submitHandler = (e, sellerRegister, sellerConfirmation) => {
    e.preventDefault()
    if(!userInfo){
        history.push('/login')
    }else{
        //dispatch({ type: USER_UPDATE_PROFILE_RESET })
        //dispatch(getUserDetails('profile'))
        dispatch(saveSellerRegister(
       
       sellerRegister =  { 
           user,
           firstName, 
           middleName, 
           lastName, 
           companyName,
           address, 
           town, 
           country,
           mobile, 
           email, 
           idNumber,
           bankAccount,
           chargeCard
            
        },
       

        ))
         if(sellerRegister.user) {
            history.push('/sellerRegisterRequest')
            } else {
                 history.push('/')
            }
   
    }
    
  }

    return (
        <>
            <FormContainer>


               {error && <Message variant='danger'>{error}</Message>}
               {loading && <Loader />}
                   
                <h5 className='text-center py-3 m-3'>Seller Register Form</h5>
                 
                     

                <Form  onSubmit={submitHandler}> 
                <Form.Group className='text-center'>
                     
                    <h5 className='text-center py-2'>Register to sell - Fill in Form below</h5>
  
                    <Form.Control 
                        type="text" 
                        placeholder="First name"  
                        value={firstName}
                        required
                        onChange={(e) => setFirstname(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="Middle name" 
                        value={middleName}
                        onChange={(e) => setMiddlename(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="Last name" 
                        value={lastName}
                        required
                        onChange={(e) => setLastname(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="Company name" 
                        value={companyName}
                        required
                        onChange={(e) => setCompanyName(e.target.value)}
                        />
                    <br />
                    
                     <Form.Control 
                        type="text" 
                        placeholder="address" 
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="City/Town" 
                        value={town}
                        required
                        onChange={(e) => setTown(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="country" 
                        value={country}
                        required
                        onChange={(e) => setCountry(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="Mobile Number" 
                        value={mobile}
                        required
                        onChange={(e) => setMobile(e.target.value)}
                        />
                    <br />
                    <Form.Control 
                        type="text" 
                        placeholder="Email Address" 
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <br />
                     <Form.Control 
                        type="text" 
                        placeholder="Emirates ID Number" 
                        value={idNumber}
                        required
                        onChange={(e) => setIdNumber(e.target.value)}
                        /> 
                    <br />
                      <Form.Control 
                        type="text" 
                        placeholder="Chargeable Bank Card" 
                        value={chargeCard}
                        required
                        onChange={(e) => setChargeCard(e.target.value)}
                        /> 
                    <br />
                      <Form.Control 
                        type="text" 
                        placeholder="Bank Account to send selling proceedings" 
                        value={bankAccount}
                        required
                        onChange={(e) => setBankAccount(e.target.value)}
                        /> 
                    <br />

                     <Button type='submit' variant='primary'>
                            Continue
                    </Button>
  
                </Form.Group>
                </Form>  
            </FormContainer>
            
        </>
    )
}

export default SellRegisterScreen

