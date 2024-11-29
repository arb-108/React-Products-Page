import React from 'react'
import { BodyDiv } from '../CStyles/headerC'
import Products from './Products'

const BodyC = ({data}) => {
  return (
    <>
    <BodyDiv>
        <Products data={data}/>
    </BodyDiv>
    </>
  )
}

export default BodyC