import { useEffect } from 'react';
import { useCartState } from '../context/cart';
import Router from 'next/router';

const OrderCompleted = props => {

    const { resetContent } = useCartState();

    const redirectHome = () => {
        resetContent();
        Router.push('/');
    }

    useEffect(() => {
        setTimeout(redirectHome, 10000);
    }, []);

    return (
        <div className="cartSuccess font-mono">
            <p>You successfully ordered:</p>
            <ul>
                {
                    props.filledForm.products.map(product => {
                        return (<li className='orderProduct'>{product}</li>)
                    })
                }
            </ul>
            <p>For a total of <span className='orderPrice'>{props.filledForm.price}€</span></p>
            <br />
            <p>At the following adress</p>
            <p className='orderAdress'>{props.filledForm.name}</p>
            <p className='orderAdress'>{props.filledForm.adress}</p>
            <p className='orderAdress'>{props.filledForm.city}</p>
            <br />
            <p>Thank you for your order, it will arrive soon ~</p>
            <p>You will now be redirected to the homepage. Bon appétit!</p>
        </div>
    )
}

export default OrderCompleted;