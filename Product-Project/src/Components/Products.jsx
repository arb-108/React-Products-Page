import React from 'react'
import { Addbtn, ProductCard, ProductDiv } from '../CStyles/products'
import { useState } from 'react'
import { useEffect } from 'react';

const Products = ({data}) => {
    
    const truncateWords = (text, limit) => {
        const words = text.split(' ');
        return words.length > limit ? words.slice(0, limit).join(' ') + ' ...' : text;
      };
  return (
    <>
    <ProductDiv>
        {
            data?.map((value,key)=>
                <ProductCard key={value.id}>
            <div className='pimgdiv'>
            <img src={value.image} alt="" />
            </div>
            <div className='addcart'>
            <h4>{truncateWords(value.title,10)}</h4>
            <h6>Category : {value.category}</h6>
            <h5>${value.price}</h5>
                <Addbtn>Add to cart</Addbtn>
            </div>
        </ProductCard>
            )
        }
        
    </ProductDiv>
    {/* {console.log(data.products[0].title)} */}
    </>
  )
}

export default Products