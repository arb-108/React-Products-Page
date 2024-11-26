import React, { useState } from 'react'
import { AddDiv, DMenuDiv, MainMenuDiv, MenuDown, MenuUp, Menuatag, MenuatagDiv, Menuli } from '../Styles'
import { Link } from 'react-router-dom';

const DMenu = () => {
    const [openMenu,setMenu] = useState(true);
    const toggleMenu=()=>{
        setMenu(!openMenu);
    }
  return (
    <>
    <MainMenuDiv openMenu={openMenu}>
    <AddDiv onClick={toggleMenu}>

    <Menuli ><Menuatag to={"/Services"}>Services</Menuatag></Menuli>
        {openMenu?<MenuUp/>:<MenuDown/>}
    </AddDiv>
    <DMenuDiv openMenu={openMenu}>

                    <MenuatagDiv><Menuatag  to={"/"}>Web Development</Menuatag></MenuatagDiv>
                    <MenuatagDiv><Menuatag  to={"/About"}>Design</Menuatag></MenuatagDiv>
                    <MenuatagDiv><Menuatag  to={"/Services"}>Seo</Menuatag></MenuatagDiv>
    </DMenuDiv>
    </MainMenuDiv>
    </>
  )
}

export default DMenu