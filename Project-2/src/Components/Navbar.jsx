import React, { useEffect, useState } from 'react'
import { MenuCross, MenuDiv, MenuUl, Menuatag, Menubars, Menuli, NavDiv, Navbtn, Navlogo, SubMenuDiv, UnderMenuDiv } from '../Styles';
import Menu from './Menu';
import DMenu from './DMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isopen,setIsopen] = useState(false);
    const [openMenu,setMenu] = useState(false);
    const toggle=()=>{
        setIsopen(!isopen);
    }
    const toggleMenu=()=>{
        setMenu(!openMenu);
    }
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 770) {
            setIsopen(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <div>
        <NavDiv>
            <Navlogo src="..//public//arblogo.png" alt="" />
            <UnderMenuDiv isopen={isopen} onClick={toggle}>
            </UnderMenuDiv>
            <MenuDiv isopen={isopen}>
                <MenuUl >
                    <Menuli><Menuatag to={"/"}>Home</Menuatag></Menuli>
                    {isopen?<DMenu/>:<Menu/>}
                    <Menuli><Menuatag to={"/About"}>About</Menuatag></Menuli>
                    <Menuli><Menuatag to={"/Contact"}>Contact</Menuatag></Menuli>
                    
                </MenuUl>
                <Navbtn>Login</Navbtn>
            </MenuDiv>
                {
                    isopen?<MenuCross size={'3.4rem'} onClick={toggle}/>:<Menubars size={'4rem'} onClick={toggle}/>
                }
                
        </NavDiv>
    </div>
  )
}
export default Navbar;
