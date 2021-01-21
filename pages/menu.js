import React from 'react';
import Layout from '../components/layout';
import useSWR from 'swr';
import DishCard from '../components/dishCard';

const api_url = process.env.NEXT_PUBLIC_STRAPI_URL;

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Menu = () => {

    const { data, error } = useSWR(`${api_url}/dishes`, fetcher);

    if (error) return <Layout><div>Failed to load</div></Layout>
    if (!data) return <Layout><div>Loading...</div></Layout>

    return (
        <Layout>
            <div className='cardContainer'>
                {
                    data.map(dish => {
                        return (
                            <DishCard
                                name={dish.name}
                                description={dish.description}
                                price={dish.price}
                                image={`${api_url}${dish.image.url}`}
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