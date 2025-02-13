import React, { useEffect, useState } from 'react'
import { Banner } from '../components/Banner'
import Bar from '../components/Bar'
import Card from '../components/Card'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=16") // Fetch only 5 products
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);


  return (
    <div>
        <SectionOne  products={products} loading={loading} error={error} />
        <SectionTwo products={products}/>
        <SectionThree products={products} loading={loading} error={error}/>
    </div>
  )
}

export default Home