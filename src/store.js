import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import  { productListSellerReducer, productListReducer, productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer, productReviewCreateReducer, productTopRatedReducer   }  from './reducers/productReducers.js'
import { cartReducer } from './reducers/cartReducers'
import {userDetailsSellerReducer, sellerConfirmationReducer, userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer, sellerRegisterReducer } from './reducers/userReducers'
import { sellerOrderListReducer, orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer, orderListReducer, orderDeliverReducer } from './reducers/orderReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
	productDelete: productDeleteReducer,
	productCreate: productCreateReducer,
	productUpdate: productUpdateReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	orderListMy: orderListMyReducer,
	orderList: orderListReducer,
	sellerOrderList: sellerOrderListReducer,
	orderDeliver: orderDeliverReducer,
	productReviewCreate: productReviewCreateReducer ,
	productTopRated: productTopRatedReducer,
	sellerRegister: sellerRegisterReducer,
	sellerConfirmation: sellerConfirmationReducer,
	productListSeller: productListSellerReducer,
	userDetailsSeller: userDetailsSellerReducer
})


// RETREIVING ITEMS FROM STORAGE
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []


// RETREIVING USER FROM STORAGE
const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null

// RETREIVING USER FROM STORAGE
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

// INITIAL STATE
const initialState = {
	cart: {
		cartItems: cartItemsFromStorage,
		shippingAddress: shippingAddressFromStorage,
	},
	userLogin: {
		userInfo: userInfoFromStorage,
	},

}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store