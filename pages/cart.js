import Layout from "../components/layout";
import { useCartState } from '../context/cart';
import { useState } from 'react';
import CartForm from '../components/cartForm';

const Cart = () => {

    const { content, removeContent } = useCartState();
    const [contactForm, setContactForm] = useState();

    const getSum = (total, num) => {
        return total + num;
    }

    const dishList = () => {
        return (content.map(dish => (
            <li className='cartElement' key={dish.id}>
                <img className='cartImage' src={dish.image} />
                <p className='dishCartName'>{dish.name}</p>
                <p className='dishCartPrice'>{dish.price}€</p>
                <p className><span
                    className='removeItem'
                    onClick={() => removeContent(dish.id)}
                >Remove</span></p>
            </li>
        )))
    }

    const productList = () => {
        if (content.length) {
            return (
                content.map(dish => (dish.name))
            )
        }
    }

    const finalPrice = () => {
        return (content.map(dish => {
            return dish.price;
        }).reduce(getSum, 0))
    }

    const openContactForm = () => {
        if (content.length) {
            setContactForm(<CartForm />);
        }
    }

    return (
        <Layout>
            <div className='cartContainer font-mono'>
                <div className='cart'>
                    <ul className='cartList'>
                        {dishList()}
                    </ul>
                    <div className='total'>
                        <hr />
                        <br />
                        <div className='totalSubContainer'>
                            <div className='totalText'>
                                <p>Total</p>
                                {
                                    content.length ? (<p className='totalPrice'>{finalPrice()}€</p>) : (<p className='totalPrice'>0€</p>)
                                }
                            </div>
                            <button className='totalPay shadow-xl' onClick={openContactForm}>Checkout</button>
                        </div>
                        <br />
                        <hr />
                    </div>
                </div>
                <br />
                <br />
                {content.length ? (contactForm) : null}
            </div>
        </Layout>
    )
}

export default Cart;