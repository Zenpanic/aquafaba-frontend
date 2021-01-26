import Link from 'next/link';

const Navbar = () => {

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
                    <Link href="/cart">
                        <a><img src="/images/empty_cart.png" /></a>
                    </Link>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;