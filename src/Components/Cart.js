import React, {useContext} from 'react';
import { CartContext } from '../Global/CartContext';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const Cart = (props) => {
    const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext)
    
    const handleToken = async (token) =>{
        console.log(token)
        const product= {name:"All Products", price:totalPrice}
         const response =  await axios.post("http://localhost:5000/checkout", {
            product, token
         })
         console.log(response)
         const {status} = response.data;
         if(status==="success"){
             dispatch({type:"EMPTY"});
             props.history.push("/")
             toast.success("Your Payment Is Successfull", {position:toast.POSITION.TOP_RIGHT})
         }
    }
    console.log(shoppingCart)
    console.log(totalPrice)
    console.log(qty)
    
    return (
        <div className="cartContainer">
            <div className="cartDetails">
                {shoppingCart.length>0?
                shoppingCart.map(cart=>(
                    <div className="cart" key={cart.id}>
                          <span className="cartImage"><img src={cart.image} alt=""/></span>
                          <span className="cartName">{cart.name}</span>
                          <span className="cartPrice">{cart.price}.00</span>
                          <span className="cartQty">{cart.qty}</span>
                          <span className="totalPrice">{cart.price * cart.qty}.00</span>
                          <span className="incr" onClick={()=>dispatch({type:'INC', id:cart.id, cart})}><i className="fas fa-plus"></i></span>
                          <span className="decr" onClick={()=>dispatch({type:'DEC', id:cart.id, cart})}><i className="fas fa-minus"></i></span>
                          <span className="delete" onClick={()=>dispatch({type:'DELETE', id:cart.id, cart})}><i className="fas fa-trash-alt"></i></span>
                    </div>
                ))
                :
                "Sorry Your Cart Is Currently Empty"}
               
                    
            </div>
           {shoppingCart.length>0?
           <div className="cartSummary">
               <div className="summary">
                   <h3>Cart Summary</h3>
               </div>
               <div className="totalItems">
                   <div className="items">Total Items:</div>
                   <div className="quantity">{qty}</div>
               </div>
               <div className="totalPriceSection">
                   <div className="totalPr">Total Price:</div>
                   <div className="price">{totalPrice}.00</div>
               </div>
                 <div className="stripeSection">
                    <StripeCheckout stripeKey="pk_test_51H4NclGVlmlKnZnYoOBRkDuuC6WjSSq8Nlzf8D4LNVAWgPvV0MEP3elODi66snu45ks9F0IAoumAiRp3exG5PhZ400dTmnM0hE"
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    amount={totalPrice*100}
                    name="All Products"
                    >

                    </StripeCheckout>
                     
                 </div>
           </div>
           :''}
        </div>
    )
}

export default Cart
