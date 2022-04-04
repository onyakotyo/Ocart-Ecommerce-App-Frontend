import React,{ useRef } from 'react';
 import { useReactToPrint } from 'react-to-print'
import ShippingLabelsPages from './ShippingLabelsPages'
 
 
 const ShippingLabels = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({

    content: () => componentRef.current,
     documentTitle: 'Ocart Online Shop',
    pageStyle: `size: 302.36px 188.98px`,
    
  });





  return (
    <div className='text-center mt-3'>
       
       
      
        <div ref={componentRef} >
            <ShippingLabelsPages ref={componentRef} />
        </div> 
      <button  style={{borderRadius: 4, backgroundColor: 'orange', borderColor: 'orange', color: '#ffffff'}}
        onClick={handlePrint} className='text-center mt-3'>
        Print Label
        </button>
    </div>
  )
}

export default ShippingLabels