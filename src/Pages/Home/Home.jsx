import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Layout } from '../../Components/Layout/Layout'
import { Card } from '../../Components/Card/Card'
import { ProductDetail } from '../../Components/ProductDetail/ProductDetail';
const options = {method: 'GET', url: 'https://api.escuelajs.co/api/v1/products'};


export const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.request(options)
    .then(response => {
      setProducts(response.data)            
    }) 
    .catch( error => console.error(error) )
  },[])

  return (
    <Layout>
      {
        products.map( product => <Card key={ product.id } product={ product } />)
      }
      <ProductDetail />
    </Layout>
  )
}
