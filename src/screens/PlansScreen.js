/*import React, { useState,useEffect } from 'react'
import './plansscreen.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {db} from'./firebase'
import {loadStripe} from '@stripe/stripe-js'//you have to install @strpe/stripe-js
function PlansScreen() {
    const[products,setProducts]=useState([]);
    const user=useSelector(selectUser);
    useEffect(()=>{
     db.collection('products')
     .where("active","==","true")
     .get()
     .then(querySnapshot=>{
         const products={};
         querySnapshot.forEach(async productDoc=>{
             products[productDoc.id]=productDoc.data();
             const priceSnap=await productDoc.ref.collection('price')
             .get();
             priceSnap.docs.forEach(doc=>{
                 products[productDoc.id].prices={
                     priceId:price.id,
                     priceData:price.data(),
                 }
             })
         });
         setProducts(products)
     });

    },[])
    console.log(products);
    const loadCheckout=async(priceId)=>{
      const docref=await db.collection('customer')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
          price:priceId,
          success_url=window.location.origin,
          cancel_url=window.location.origin,
      })
      docref.onSnapshot(async(snap)=>{
          const{error,sessionId}=snap.data();
          if(error){
             alert(`an error occured:${error.message}`);
          }if(sessionId){
              //we have a session,let's redirect to checkout
              //init stripe
              const stripe=await loadStripe('published-apikey');
              stripe.redirectToCheckout({sessionId})
          }
    
      })
    }
    return (
        <div className='plans'>
           {object.entries(products).map(([productId,productData])=>{
               //add some stuff to checkout if user's subscriptionis active
               return(
                   <div className="planscreen-plan">
                       <div>
                          <h5>{productData.name}</h5>
                          <h6>{productData.description}</h6>
                        </div>
                        <button onClick={()=>loadCheckout(productData.prices.priceId)}>
                            Subscribe
                        </button>
                   </div>
               )
               
           })} 
        </div>
    )
}

export default PlansScreen
