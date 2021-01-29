import { useState } from 'react';

const CartForm = (props) => {

    const [contact, setContact] = useState({});
    const [formName, setFormName] = useState('');
    const [formAdress, setFormAdress] = useState('');
    const [formCity, setFormCity] = useState('');
    const [formPhone, setFormPhone] = useState('');
    const [formComplete, setFormComplete] = useState('');

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

    const submitForm = () => {

        if (formName && formAdress && formCity && formPhone) {

            setContact({
                name: formName,
                adress: formAdress,
                city: formCity,
                phone: formPhone,
                products: props.products,
                price: props.price
            })

            console.log(contact);

            // A COMPLETER !!! SEND A MAIL OR SOMETHING
            // SEND A SUCCESS MESSAGE TO USER
            // REDIRECT TO HOMEPAGE
            // BY THE WAY, PUT SMOOTHSCROLLING ON HOMEPAGE
            // AND NAV TAG AT THE TOP OF IT

        } else {

            setFormComplete('Sorry, you must properly fill up all the fields so we can handle your order.')

        }

    }

    return (
        <div className='cartFormContainer' id='contactForm'>
            <div className='formElement'>
                <label for='formName'>Your Name</label>
                <input
                    id='formName'
                    name='formName'
                    type='text'
                    className='formName'
                    onChange={onNameChange}
                    value={formName}></input>
            </div>
            <div className='formElement'>
                <label for='formAdress'>Street and Street Number</label>
                <input id='formAdress'
                    name='formAdress'
                    type='text'
                    className='formAdress'
                    onChange={onAdressChange}
                    value={formAdress}></input>
            </div>
            <div className='formElement'>
                <label for='formCity'>City</label>
                <input
                    id='formCity'
                    name='formCity'
                    type='text'
                    className='formCity'
                    onChange={onCityChange}
                    value={formCity}></input>
            </div>
            <div className='formElement'>
                <label for='formPhone'>Phone Number</label>
                <input
                    id='formPhone'
                    name='formPhone'
                    type='text'
                    className='formPhone'
                    onChange={onPhoneChange}
                    value={formPhone}></input>
            </div>
            <button
                className='formSubmit'
                onClick={submitForm}>All Good!</button>
            <br />
            <br />
            <p className='formComplete'>{formComplete}</p>
        </div>
    )
}

export default CartForm;