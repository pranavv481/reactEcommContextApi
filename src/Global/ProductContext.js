import React, { createContext, useState } from 'react';
import shoes from "../assets/shoes.jpg";
import headphone from "../assets/headphone.jpg";
import microphone from "../assets/microphone.jpg";
import iphone from "../assets/iphone.jpg";
import shirt from "../assets/shirt.jpg";
import watch from "../assets/watch.jpg";

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const [products] = useState([
        { id: 1, name: "Shoes", price: 1, status: "New", image: shoes },
        { id: 2, name: "Headphone", price: 1, status: "Hot", image: headphone },
        { id: 3, name: "Microphone", price: 1, status: "New", image: microphone },
        { id: 4, name: "Iphone", price: 1, status: "Hot", image: iphone },
        { id: 5, name: "Shirt", price: 1, status: "New", image: shirt },
        { id: 6, name: "Watch", price: 1, status: "Hot", image: watch },
    ])
    return (
        <ProductContext.Provider value={{products:[...products]}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
