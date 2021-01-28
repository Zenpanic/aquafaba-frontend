import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from '../context/cart';

import '../styles/globals.css';
import '../styles/tailwind.css';

function App({ Component, pageProps }) {

  return (

    <Auth0Provider
      domain="zentown.eu.auth0.com"
      clientId={process.env.NEXT_PUBLIC_AUTH_CLIENT_ID}
      redirectUri="https://aquafaba-temple.vercel.app/cart"
    >
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>

    </Auth0Provider>
  )
}

export default App;