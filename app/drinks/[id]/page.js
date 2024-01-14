import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const fetchSingleDrink = async (id) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    if(!response.ok){
        throw new Error("failed to fetch a drink")
    }
    const data = await response.json();
    return data;
}

const SingleDrinkPage = async ({ params }) => {
    const data = await fetchSingleDrink(params.id);
  return (
    <div>
        <Link href="/drinks" className='btn btn-primary mt-8 mb-12'>back to drinks</Link>
        <Image src={data?.drinks[0]?.strDrinkThumb} width={300} height={300} className='w-48 h-48 rounded-lg shadow-lg mb-4' priority alt={data?.drinks[0]?.strDrink}></Image>
        <h1 className='text-4xl mb-8 font-bold'>{ data?.drinks[0]?.strDrink }</h1>
    </div>
  )
}

export default SingleDrinkPage