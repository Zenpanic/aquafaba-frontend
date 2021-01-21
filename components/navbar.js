import Link from 'next/link';

const Navbar = () => {

    return (
        <nav className='navbar font-mono fixed bg-white bg-opacity-50 top-0'>
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
                <li><Link href="/about">
                    <a>About</a>
                </Link>
                </li>
                <li>
                    <Link href="/cart">
                        <a>Cart</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;