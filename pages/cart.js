import Layout from "../components/layout";
import { useCartState } from '../context/cart';

const Cart = () => {

    const { content, addContent } = useCartState();

    console.log(content);

    return (

        <Layout>
            <div className='cart'>

            </div>
        </Layout>

    )
}

export default Cart;