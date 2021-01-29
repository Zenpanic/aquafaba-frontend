import Layout from "../components/layout";
import { useCartState } from '../context/cart';
import { useState, useEffect } from 'react';
import CartForm from '../components/cartForm';

const Cart = () => {

    const { content, removeContent } = useCartState();
    const [priceArray, setPriceArray] = useState([]);
    const [dishList, setDishList] = useState([]);
    const [finalPrice, setFinalPrice] = useState('');
    const [contactForm, setContactForm] = useState();

    const getSum = (total, num) => {
        return total + num;
    }

    const openContactForm = () => {
        if (dishList.length) {
            setContactForm(<CartForm price={finalPrice} products={dishList} />);
        }
    }

    useEffect(() => {

        setPriceArray(content.map(dish => {
            return dish.price;
        }));

        setDishList(content.map(dish => (
            <li className='cartElement'>
                <img className='cartImage' src={dish.image} />
                <p className='dishCartName'>{dish.name}</p>
                <p className='dishCartPrice'>{dish.price}€</p>
                <p className><span
                    className='removeItem'
                    onClick={() => removeContent(dish.id)}
                >Remove</span></p>
            </li>
        )))

        setFinalPrice(priceArray.reduce(getSum, 0));

    }, [])

    return (

        <Layout>
            <div className='cartContainer font-mono'>
                <div className='cart'>
                    <ul className='cartList'>
                        {
                            dishList
                        }
                    </ul>
                    <div className='total'>
                        <hr />
                        <br />
                        <div className='totalSubContainer'>
                            <div className='totalText'>
                                <p>Total</p>
                                <p className='totalPrice'>{finalPrice}€</p>
                            </div>
                            <button className='totalPay shadow-xl' onClick={openContactForm}>Checkout</button>
                        </div>
                        <br />
                        <hr />
                    </div>
                </div>
                <br />
                <br />
                {contactForm}
            </div>
        </Layout>

    )
}

export default Cart;