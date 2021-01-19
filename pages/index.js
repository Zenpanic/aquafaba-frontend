import Layout from '../components/layout';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout>
      <div className='leading-loose text-center font-mono'>
        <h1 className='py-4 font-bold text-green-400 text-6xl tracking-wider'>Aquafaba Temple</h1>
        <h2 className='py-4 font-semibold text-green-300 font-2xl'>Vegetarian World Cuisine</h2>
      </div>
      <div className='text-center py-10'>
        <input type='text' placeholder='search' />
      </div>
      <div className='text-center font-sans leading-relaxed'>
        <p>Located in the heart of the city of Rennes, Aquafaba Temple
        is the delicious promise of an authentic vegetarian cuisine, inspired by
        cultures from all around the globe.</p>
        <p>We only use fresh and seasonal vegetable and fruits, and we use local products
        every time it is possible.</p>
      </div>
    </Layout>
  )
}

export default Home;