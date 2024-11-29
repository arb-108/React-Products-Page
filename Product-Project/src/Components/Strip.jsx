import React, { useEffect, useState } from 'react'
import { StripDiv, StripLi } from '../CStyles/strip'

const Strip = ({data,clickfun}) => {
    const category=[...new Set(data?.map((value)=>value.category))];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);  // Update selected category
        clickfun(category);  // Trigger the clickfun with the selected category
    }
  return (
    <>
        <StripDiv>
            <h2>Products</h2>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, non? Possimus nemo, magni perspiciatis dicta numquam a voluptatibus consectetur asperiores et, beatae vitae</h6>
            <ul>
                <StripLi key={0} onClick={()=>handleCategoryClick("All")} isSelected={selectedCategory === "All"}>All</StripLi>
                {category.map((value,key)=>
                <StripLi key={key+1} onClick={()=>handleCategoryClick(value)} isSelected={selectedCategory === value}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}</StripLi>)}
            </ul>
        </StripDiv>
    </>
  )
}

export default Strip