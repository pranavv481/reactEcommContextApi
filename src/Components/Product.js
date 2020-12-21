import React, {useContext} from 'react';
import { CartContext } from '../Global/CartContext';
import { ProductContext } from '../Global/ProductContext';
import Banner from './Banner';

const Product = () => {
    const {products} = useContext(ProductContext)
    const {dispatch} = useContext(CartContext)
    
    
    return (
        <div className="container">
            <Banner/>
        <div className="products" >
            {products.map(product=>(
                <div className="product" key={product.id}>
                   <div className="productImage">
                       <img src={product.image} alt=""/>
                   </div>
                   <div className="productDetails">
                       <div className="productName">
                           {product.name}
                       </div>
                       <div className="productPrice">
                            {product.price}.00
                       </div>
                   </div>
                   
                    <div className="addToCart" onClick={()=>dispatch({type:'ADD_TO_CART',id:product.id, product})}>Add to cart</div>
                    {product.status==="Hot"?<div className="hot">Hot</div>:""}
                   {product.status==="New"?<div className="new">New</div>:""}

                </div>
            ))}
        </div>
        </div>

    )
}

export default Product
