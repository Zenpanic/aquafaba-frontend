import Link from 'next/link';
import { useCartState } from '../context/cart';

const Navbar = () => {

    const { content } = useCartState();

    return (
        <nav className='navbar font-mono fixed bg-green-200 bg-opacity-50 top-0'>
            <ul className="navLinks">
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/menu">
                        <a>Menu</a>
                    </Link>
                </li>
                <li><Link href="/#about">
                    <a>About</a>
                </Link>
                </li>
                <li id="cart">
                    <p>{content.length}</p>
                    <Link href="/cart">
                        <a>
                            {content.length ? (<img src="/images/full_cart.png" />) : (<img src="/images/empty_cart.png" />)}
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;