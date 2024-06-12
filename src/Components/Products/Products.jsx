import React from 'react'
import './Products.css'
import ProductCard from '../ProductCard/ProductCard'
import {productsData} from '../../ProductsData'
export default function Products() {
  return (
    <div className='container'>

     {
        productsData.map((productData)=>{
            // return<ProductCard data={productData} key={productData.id}>
            //   <p className='text-success rounded'>welcome in product data</p>
            // </ProductCard>
            // return <ProductCard data={productData}>
            //   <p className='text-success rounded'>welcome in product data</p>
            // </ProductCard>
           return <ProductCard data={productData}>
            <p className='text-info'>hello</p>
            <h5 className='text-danger'>Group 104</h5>
            <button type="button" className=' btn btn-warning'>Click</button>
            </ProductCard>

        })
     }






    </div>
  )
}
