import { CartProvider } from '../context/cart';

import '../styles/globals.css';
import '../styles/tailwind.css';

function App({ Component, pageProps }) {

  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default App;