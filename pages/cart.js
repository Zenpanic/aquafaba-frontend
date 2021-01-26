import Layout from "../components/layout";
import { CartContext } from '../components/cartProvider';
import { useContext } from 'react';

const Cart = () => {

    const [content, addContent] = useContext(CartContext);

    console.log(content);

    return (

        <Layout>
            <div className='cart'>

            </div>
        </Layout>

    )
}

export default Cart;