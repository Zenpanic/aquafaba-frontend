import Head from 'next/head';
import Link from 'next/link';
import Navbar from './navbar';

const siteTitle = 'Aquafaba Temple';

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name='description'
                    content='Bienvenue chez Aquafaba Temple, un restaurant 100% végétarien pour les amoureux de cuisine du monde'
                />
                <meta
                    name='author'
                    content='ZenTown'
                />
                <meta
                    name='keywords'
                    content='cuisine, food, végétarien, Rennes, Bretagne, restaurant'
                />
                <meta charSet='UTF-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <title>{siteTitle}</title>
            </Head>
            <Navbar />
            {children}
            <footer className='font-mono'>
                <p>Created by <a className='zentown' target="_blank" rel="noopener" href="https://zentown.dev">Zentown</a>.</p>
                <p>This is a demo website, not a real restaurant. Payments are deactivated.</p>
            </footer>
        </>
    )
}

export default Layout;