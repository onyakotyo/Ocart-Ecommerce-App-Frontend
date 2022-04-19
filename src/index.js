import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.flaty.css'
//import './bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider }  from 'react-redux'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import store from './store'




const stripePromise = loadStripe('pk_test_xxxxxx')


ReactDOM.render(
  <Provider store={store}>
     <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
