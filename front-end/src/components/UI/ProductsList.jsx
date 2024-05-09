// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProductCards from './ProductCards'

const ProductsList = ({data}) => {
  return (
    <>
    {
        data?.map((item, index)=>(
            <ProductCards item={item} key={index}/> 
        ))
    }
    </>
  )
}

export default ProductsList