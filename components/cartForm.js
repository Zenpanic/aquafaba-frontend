import { useState } from 'react';
import { useCartState } from '../context/cart';
import Router from 'next/router';
import OrderCompleted from '../components/orderCompleted';

const CartForm = () => {

    const { content, removeContent } = useCartState();
    const [contact, setContact] = useState({});
    const [formName, setFormName] = useState('');
    const [formAdress, setFormAdress] = useState('');
    const [formCity, setFormCity] = useState('Rennes');
    const [formPhone, setFormPhone] = useState('');
    const [formComplete, setFormComplete] = useState('');

    const [pendingCart, setPendingCart] = useState(true);

    const onNameChange = e => {
        setFormName(e.target.value);
    }

    const onAdressChange = e => {
        setFormAdress(e.target.value);
    }

    const onCityChange = e => {
        setFormCity(e.target.value);
    }

    const onPhoneChange = e => {
        setFormPhone(e.target.value);
    }

    const getSum = (total, num) => {
        return total + num;
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

    const submitForm = () => {

        if (formName && formAdress && formCity && formPhone) {

            setFormComplete('Success!');

            setContact({
                name: formName,
                adress: formAdress,
                city: formCity,
                phone: formPhone,
                products: productList(),
                price: finalPrice()
            })

            setPendingCart(false);

        } else {
            setFormComplete('Sorry, you must properly fill up all the fields so we can handle your order.')
        }
    }

    if (pendingCart) {

        return (

            <div className='cartFormContainer' id='contactForm' >
                <div className='formElement'>
                    <label for='formName'>Your Name</label>
                    <input
                        id='formName'
                        name='formName'
                        type='text'
                        className='formField'
                        onChange={onNameChange}
                        value={formName}></input>
                </div>
                <div className='formElement'>
                    <label for='formAdress'>Street and Street Number</label>
                    <input id='formAdress'
                        name='formAdress'
                        type='text'
                        className='formField'
                        onChange={onAdressChange}
                        value={formAdress}></input>
                </div>
                <div className='formElement'>
                    <label for='formCity'>City</label>
                    <select
                        name='formCity'
                        id='formCity'
                        className='formField'
                        onChange={onCityChange}
                        value={formCity}>
                        <option value="Rennes">Rennes</option>
                        <option value="St-Jacques de la Lande">Saint-Jacques de la Lande</option>
                        <option value="Cesson-Sévigné">Cesson-Sévigné</option>
                        <option value="Chantepie">Chantepie</option>
                        <option value="Vézin-le-Coquet">Vézin-le-Coquet</option>
                    </select>
                </div>
                <div className='formElement'>
                    <label for='formPhone'>Phone Number</label>
                    <input
                        id='formPhone'
                        name='formPhone'
                        type='tel'
                        className='formField'
                        onChange={onPhoneChange}
                        value={formPhone}></input>
                </div>
                <button
                    className='formSubmit font-mono'
                    onClick={submitForm}>All Good!</button>
                <br />
                <br />
                <p className='formComplete'>{formComplete}</p>
            </div>)

    } else {

        return (<OrderCompleted filledForm={contact} />)
    }
}

export default CartForm;