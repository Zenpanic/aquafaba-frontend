import { Auth0Provider } from '@auth0/auth0-react';

import '../styles/globals.css';
import '../styles/tailwind.css';

function App({ Component, pageProps }) {

  return (

    <Auth0Provider
      domain="zentown.eu.aut0.com"
      clientId="Lj9jQmP1xMHKdN8pVJRAVSmnkb36Gvsh"
      redirectUri="https://aquafaba-temple.vercel.app/cart"
    >

      <Component {...pageProps} />

    </Auth0Provider>


  )
}

export default App;
