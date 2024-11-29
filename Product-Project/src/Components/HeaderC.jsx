import React, { useEffect, useState } from 'react'
import { HeadDiv, Searchlogo } from '../CStyles/headerC'
import BodyC from './BodyC'
import Strip from './Strip'

const HeaderC = () => {
  const [data,setData]=useState(null);
  const [filtered,setfiltered]=useState(null);
  const [cate,setcate]=useState("All");
    
    useEffect(()=>{
        const getallProducts= async()=>{
            try {
                
                const resp=await fetch("https://fakestoreapi.in/api/products");
                const json=await resp.json();
                console.log(json);
                setData(json.products);
                setfiltered(json.products);
            } catch (error) {
                console.log("errror");
            }
        }
        getallProducts();

    },[]);
    const searchpro=(e)=>{
      const searchtext=e.target.value;
      console.log(searchtext);
      if (!searchtext.trim()) {
        setfiltered(data); // Reset to original data
        return;
      }
      const filter = data?.filter((value,key) =>
        value.title.toLowerCase().includes(searchtext.toLowerCase())
      );
      setfiltered(filter);
      
    }
    const clickfun=(type)=>{
      if(type==="All"){
        setfiltered(data);
        return;
      }
      const filter = data?.filter((value,key) =>
        value.category.toLowerCase().includes(type.toLowerCase())
      );
      setfiltered(filter);
      console.log(type);
    }
  return (
    <>
      <HeadDiv>
        <div className='logo'>
        <img src="./Images/logo-2.svg" alt="" />
        </div>
        <div className='searchdiv'>
          <input type="text" name="" onChange={searchpro} id="" placeholder='Search' />
          <Searchlogo/>
        </div>
      </HeadDiv>
      <Strip data={data} clickfun={clickfun}/>
      <BodyC data={filtered}/>
    </>
  )
}

export default HeaderC