import React,{useState} from "react";
import {useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

toast.configure();

const StripePage = () => {

    //const dispatch = useDispatch()

  const order = useSelector((state) => state.order)

  console.log(order)

   //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }


  order.shippingAmount = addDecimals(order.sendAmount.fromAmount * 0.10, 0)

  order.totalAmount = (
    Number(order.sendAmount.fromAmount) +
    Number(order.shippingAmount )
    ).toFixed(2)


  const productListSeller = useSelector((state) => state.productListSeller)
    const { loading, error, sellerProducts} = productListSeller
 


  const [product] = useState({
    name: sellerProducts.name,
    price: sellerProducts.price,
    description: sellerProducts.description
  });

  async function handleToken(token, addresses) {
    //console.log('Front', token)

    const response = await axios.post(
      
      `/checkout`,
      { token, product }
      
    );

    //console.log('Front Response',response)
    
    const { status } = response.data;
    //console.log("Response:", response.data);

    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <>
      <Container>
         <Row>
           <Col>
              <h1>{product.name}</h1>
              <h3>You are paying ${product.price}</h3>
           </Col>
          <StripeCheckout
            stripeKey="pk_test_FQ6MNjx0p8vsvmT2vdVePuJ100HQ1ZkxvE"
            token={handleToken}
            amount={product.price * 100}
            name="transaction"
            billingAddress
            shippingAddress
          />

         </Row>
        

      </Container>
    </>
      
   
  );
}

export default StripePage
