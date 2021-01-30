import { useState } from 'react';
import Layout from '../components/layout';
import useSWR from 'swr';
import DishCard from '../components/dishCard';

const api_url = process.env.NEXT_PUBLIC_STRAPI_URL;

export const getStaticProps = async () => {
    const res = await fetch(api_url + '/dishes');
    const data = await res.json();

    return {
        props: {
            data,
        },
        revalidate: 60,
    }
}

const Menu = ({ data }) => {

    const [search, setSearch] = useState('');

    const [category, setCategory] = useState('');

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const onCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    if (!data) return <Layout><div>Loading...</div></Layout>

    const filteredDishes = data.filter(filteredDish => {
        return filteredDish.name.toLowerCase().includes(search.toLowerCase()) && filteredDish.categories[0].name.toLowerCase().includes(category.toLowerCase());
    })

    return (
        <Layout>

            <form className="categoryForm">
                <div className="category">
                    <input name="category" type="radio" value="" id="all" onChange={onCategoryChange} />
                    <label htmlFor="all">All</label>
                </div>
                <div className="category">
                    <input name="category" type="radio" value="starter" id="starters" onChange={onCategoryChange} />
                    <label htmlFor="starters">Starters</label>
                </div>
                <div className="category">
                    <input name="category" type="radio" value="main" id="main" onChange={onCategoryChange} />
                    <label htmlFor="main">Main Dishes</label>
                </div>
                <div className="category">
                    <input name="category" type="radio" value="dessert" id="desserts" onChange={onCategoryChange} />
                    <label htmlFor="desserts">Desserts</label>
                </div>
            </form>

            <div className="searchDiv">
                <input className="searchBar font-mono" type="text" onChange={onSearchChange} placeholder="search"></input>
            </div>
            <div className='cardContainer'>
                {(!filteredDishes.length) ? <p className="errorDisplay font-mono">No dish found...</p> :
                    filteredDishes.map(dish => {
                        return (
                            <DishCard
                                key={dish.id}
                                name={dish.name}
                                description={dish.description}
                                price={dish.price}
                                image={dish.image.url}
                                available={dish.available}
                            />
                        );
                    })
                }
            </div>
        </Layout>
    )
}

export default Menu;