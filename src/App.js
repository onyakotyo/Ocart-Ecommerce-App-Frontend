import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import OrderListScreen from './screens/OrderListScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ProductInsertExcelScreen from './screens/ProductInsertExcelScreen'
import ProductListScreen from './screens/ProductListScreen'
import SearchButtons from './components/SearchButtons'
import SellerOrderListScreen from './screens/SellerOrderListScreen'
import SellRegisterScreen from './screens/SellRegisterScreen'
import SellerConfirmationScreen from './screens/SellerConfirmationScreen'
import SellerProductListScreen from './screens/SellerProductListScreen'
import SellerRegisterSuccess from './screens/SellerRegisterSuccess'
import StripeCheckout from './screens/CheckoutScreen/StripeCheckout'
import Success from './screens/CheckoutScreen/Success'
import Cancelled from './screens/CheckoutScreen/Cancelled'
import SellingHow from './screens/SellingHow'
import FooterPrivacy from './components/FooterPrivacy'
import FooterTerms from './components/FooterTerms'
import NotFound from './components/NotFound';
import ShippingLabels from './screens/ShippingLabels'
import ShippingReceiptDisplay from './screens/ShippingReceiptDisplay'





 const App = () => {
  return (
    <Router>
      <Header />
      <main className= 'py-3' style={{paddingLeft: 4, paddingRight: 4}}>
        <Container>
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} exact />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/productInsertExcel' component={ProductInsertExcelScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/searchButton' component={SearchButtons} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
           <Route path='/sellerRegister' component={SellRegisterScreen} />
           <Route path='/admin/user/:id/sellerConfirmation' component={SellerConfirmationScreen} />
           <Route path='/sellerRegisterRequest' component={SellerRegisterSuccess} />
           <Route path='/shippingLabels/:_id' component={ShippingLabels} />
           <Route path='/shipping-receipt/:_id' component={ShippingReceiptDisplay} />
            <Route path='/sellingHow' component={SellingHow} />
            <Route path='/privacy' component={FooterPrivacy} />
            <Route path='/terms' component={FooterTerms} />
            <Route exact path="/not-found" component={NotFound} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />

          <Route path='/sellerOrders' component={SellerOrderListScreen} />
          
        
          <Route
            path='/selllerProductlist'
            component={SellerProductListScreen}
            exact
          />
           {/* <Route
            path='/seller/productlist/:pageNumber'
            component={SellerProductListScreen}
            exact
          /> */}
          
           
           <Route path='/checkout' component={StripeCheckout} />
            <Route path='/success' component={Success} />
            <Route path='/cancelled' component={Cancelled} />
        </Container>
       
      </main>
      
       <Footer />

    </Router>
    
  );
}

export default App;
