import { Auth0Provider } from '@auth0/auth0-react';
import CartContextProvider from '../components/cartProvider';

import '../styles/globals.css';
import '../styles/tailwind.css';

function App({ Component, pageProps }) {

  return (


    <Auth0Provider
      domain="zentown.eu.auth0.com"
      clientId={process.env.NEXT_PUBLIC_AUTH_CLIENT_ID}
      redirectUri="https://aquafaba-temple.vercel.app/cart"
    >
      <CartContextProvider>

        <Component {...pageProps} />

      </CartContextProvider>

    </Auth0Provider>



  )
}

export default App;
