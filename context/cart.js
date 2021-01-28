import { createContext, useContext, useState } from 'react';

const CartStateContext = createContext();

export function CartProvider({ children }) {

    const [content, setContent] = useState([]);

    const addContent = (element) => {
        setContent(content => [...content, element]);
    }

    let sharedState = {
        content,
        addContent
    }

    return (
        <CartStateContext.Provider value={sharedState}>
            {children}
        </CartStateContext.Provider>
    );
}

export function useCartState() {
    const state = useContext(CartStateContext);
    return state;
}