import Layout from '../components/layout';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout>

      {/* <div className='headerDiv leading-loose font-mono'>
        <h1 className='animate-pulse font-bold mainTitle text-6xl tracking-wider'>Aquafaba Temple</h1>
        <h2 className='py-4 font-semibold subMainTitle text-green-300'>Vegetarian World Cuisine</h2>
      </div> */}

      <div className='headerDiv'>
        <img className='animate-pulse mainLogo' src='/images/logo_green_website.png' />
      </div>

      <div className='introText text-center font-sans'>
        <p>Located in the heart of the city of Rennes, Aquafaba Temple
        is the delicious promise of an authentic vegetarian cuisine, inspired by
        cultures from all around the globe.</p>
        <p>We only use fresh and seasonal vegetable and fruits, and we use local products
        every time it is possible.</p>
      </div>

      <div className='menuContainer'>
        <img className='imageMenu shadow-2xl' src='/images/menu.jpg' />
        <img className='imageMenu shadow-2xl' src='/images/about_us.jpg' />
      </div>

    </Layout>
  )
}

export default Home;