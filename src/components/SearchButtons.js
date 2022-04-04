import React, {useState} from 'react'
import {ToggleButton ,ToggleButtonGroup , Container} from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const SearchButtons = () => {

let history = useHistory();

//console.log('History',history)

const [value, setValue] = useState('')

 //console.log('RV1',value)

 //const keyword = value

 //console.log('RV2',keyword)

const handleChange = (keyword) => {
  setValue(keyword)
   if (keyword.trim()) {
      //console.log('RV2',keyword)
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
}

//history={history}

  
const radios = [
    { name: 'Electronics', value: 'electronics' },
    { name: 'Health & Personal Care', value: 'healthPersonalcare' },
    { name: 'Mobile Phones', value: 'mobilePhone' },
    { name: 'Grocery & Food', value: 'groceryFood' },
    { name: 'Fashion', value: 'fashion' },
    { name: 'Sports & Outdoors', value: 'sportsOutdoors' },

  ];



    return (
        
         
      <Container className="text-center ">
              
      

      <ToggleButtonGroup  
        name="radio" 
        type="radio" 
        value={value} 
        onChange={handleChange} 
        toggle
      
        className="text-center py-3  mt-3 "
        display = 'none'
        style={{ flexWrap: "wrap" }}
      
      >
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="outline-primary"
                //name="radio"
                value={radio.value}
                //checked={radioValue === radio.value}
                //onChange={(e) => setRadioValue(e.currentTarget.value)}`
                //onClick = {submitHandler} 
                
              >
                
                <span className="text-center py-4 p-5 ">{radio.name}</span>
                
              </ToggleButton>
           
        ))}

       
      </ToggleButtonGroup>
             

       
           

      

      </Container>
      
            
     
    )
}

export default SearchButtons
