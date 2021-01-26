import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router';

export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [content, setContent] = useState([]);

    const addContent = content => {
        setContent({
            name: content.name,
            price: content.price
        });
    }

    return (
        <CartContext.Provider value={{ content, addContent }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;