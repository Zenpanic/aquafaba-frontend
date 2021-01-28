import Layout from '../components/layout';
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Home = () => {

  return (
    <Layout>

      <div className='headerDiv'>
        <img className='animate-pulse mainLogo' src='/images/logo_green_website.png' />
      </div>

      <div className='introText text-center font-mono'>
        <p>Located in the heart of the city of Rennes, Aquafaba Temple
        is the delicious promise of an authentic vegetarian cuisine, inspired by
        cultures from all around the globe.</p>
        <p>We only use fresh and seasonal vegetable and fruits, and we use local products
        every time it is possible.</p>
      </div>
      <div className='carouselContainer'>
        <AliceCarousel autoPlay autoPlayInterval='2000' infinite>
          <img src='/images/carousel/avocado_toast.jpg' className='sliderimg shadow-2xl' />
          <img src='/images/carousel/fruity_icecream.jpg' className='sliderimg shadow-2xl' />
          <img src='/images/carousel/beans_mariniere.jpg' className='sliderimg shadow-2xl' />
          <img src='/images/carousel/choco_coco_tart.jpg' className='sliderimg shadow-2xl' />
          <img src='/images/carousel/creamy_sprout_pasta.jpg' className='sliderimg shadow-2xl' />
          <img src='/images/carousel/german_red_cabbage.jpg' className='sliderimg shadow-2xl' />
          <img src='/images/carousel/apple_pie.jpg' className='sliderimg shadow-2xl' />
          <img src='/images/carousel/buddha_plate.jpg' className='sliderimg shadow-2xl' />
        </AliceCarousel>
      </div>

      <div className='menuContainer' id='about'>
        <div className='aboutDescription'>
          <h3 className='waiting font-mono'>Waiting for you...</h3>
          <p>Opening Days: Tue - Wed - Thu - Fri - Sat - Sun</p>
          <p>Opening Hours: 9am-8pm</p>
          <br />
          <p>Adress: 13 rue de la Verterie, 35200 Rennes</p>
          <br />
          <p>Phone: +33 2 34 56 78 90</p>
        </div>
        <div className='imageMenuContainer'>
          <img className='imageMenu shadow-2xl' src='/images/about_us.webp' />
        </div>

      </div>

    </Layout >
  )
}

export default Home;