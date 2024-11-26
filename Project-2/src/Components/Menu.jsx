import React from 'react'
import { Menuatag, MenuatagDiv, Menuli, SubMenuDiv } from '../Styles';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <>
    <Menuli><Menuatag to={"/Services"}>Services</Menuatag>

    <SubMenuDiv>
                    <MenuatagDiv><Menuatag  to={"/"}>Web Development</Menuatag></MenuatagDiv>
                    <MenuatagDiv><Menuatag  to={"/About"}>Design</Menuatag></MenuatagDiv>
                    <MenuatagDiv><Menuatag  to={"/Services"}>Seo</Menuatag></MenuatagDiv>
    </SubMenuDiv>
    </Menuli>
    </>
  )
}
export default Menu;
