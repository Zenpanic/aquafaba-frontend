import { createContext, useContext, useState } from 'react';

const CartStateContext = createContext();

export function CartProvider({ children }) {

    const [itemId, setItemId] = useState(0);

    const [content, setContent] = useState([]);

    const addContent = (element) => {

        console.log(element);

        setContent(content => [...content, element]);
        setItemId(itemId + 1);
    }

    const removeContent = (id) => {

        const dishes = content.filter(dish => dish.id !== id);
        setContent(dishes);

    }

    let sharedState = {
        content,
        addContent,
        itemId,
        removeContent
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