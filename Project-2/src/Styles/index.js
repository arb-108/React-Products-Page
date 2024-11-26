import styled from 'styled-components';
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { LiaBarsSolid } from "react-icons/lia";
import { IoChevronForward  } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';


export const NavDiv=styled.nav`
    width:100%;
    background:lightgray;
    /* border:2px solid black; */
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0px 40px;
    position:relative;
    height:7vh;
    /* overflow: hidden; */
`
export const UnderMenuDiv=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:4rem;
    /* border:2px solid red; */
    position:relative;
    @media (max-width: 703px) {
     flex-direction: column;
    position: fixed;
    top: 7vh;
    left: 0;
    right: 0;
    width:100%;
     background: transparent;  
     height:calc(100vh - 7vh); 
     justify-content:start;
    padding: 10px 10px 10px 10px;
    opacity: ${({ isopen }) => (isopen ? '1' : '1')};
    transform: ${({ isopen }) => (isopen ? 'translateX(0)' : 'translateX(100%)')};
    pointer-events: ${({ isopen }) => (isopen ? 'auto' : 'none')};
    transition: all 0.3s ease-in;
    /* visibility: ${({ isopen }) => (isopen ? 'visible' : 'hidden')}; */
    
  }
`
export const MenuDiv=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:4rem;
    /* border:2px solid red; */
    position:relative;
    @media (max-width: 703px) {
     flex-direction: column;
    position: fixed;
    top: 7vh;
    left: 0;
    right: 0;
    width:60%;
     background: rgba(0,0,0,0.1);  
     height:calc(100vh - 7vh); 
     justify-content:start;
     z-index:1;
    padding: 10px 10px 10px 10px;
    opacity: ${({ isopen }) => (isopen ? '1' : '1')};
    transform: ${({ isopen }) => (isopen ? 'translateX(66%)' : 'translateX(167%)')};
    pointer-events: ${({ isopen }) => (isopen ? 'auto' : 'none')};
    transition: all 0.3s ease-in;
    /* visibility: ${({ isopen }) => (isopen ? 'visible' : 'hidden')}; */
    
  }
`
export const MenuUl=styled.ul`
    display:flex;
    justify-content:center; 
     align-items:center; 
    gap:1.8rem;
    @media (max-width: 703px) {
        flex-direction: column;
        justify-content:start; 
        align-items:start; 
        /* border:2px solid red; */
        width:100%;
        padding: 0px 15px;
    }
`
export const SubMenuDiv = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: -1rem;
   background: white; 
    /* background:lightgray;  */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 4px 4px;
  z-index: 10;
  padding: 10px 10px;
  white-space: nowrap;
  
`
export const MainMenuDiv = styled.div`
width:100%;
background: ${({ openMenu }) => (openMenu ? 'transparent' : 'transparent')};
`
export const DMenuDiv = styled.div`

  width:100%;
    background: transparent; 
    display: ${({ openMenu }) => (openMenu ? 'none' : 'flex')};
    /* background:lightgray;  */
    flex-direction: column;
    /* justify-content:center; */
    /* align-items:center; */
  z-index: 10;
  padding: 10px 10px;
  white-space: nowrap;
  /* opacity: ${({ openMenu }) => (openMenu ? '0' : '1')}; */
    /* transform: ${({ openMenu }) => (openMenu ? 'translateY(0)' : 'translateY(-0%)')}; */
    /* pointer-events: ${({ openMenu }) => (openMenu ? 'auto' : 'none')}; */
    transition: all 0.3s ease-in;
  
`
// export const navLiLink=styled(Link)`
//     list-style:none;
//     text-decoration: none;
// `
export const Menuatag=styled(NavLink)`
text-decoration: none;
color: #333;
position: relative;
&.active {
  color: black;
        /* text-decoration: underline;
        text-underline-offset: 0.8rem;
        text-decoration-color: red; Change text color when active */
        color: red;
  }
`
export const MenuatagDiv=styled.div`
    display: block;
    padding: 5px 10px; 
    text-decoration: none;
    color: #333; 
     &:hover {
      color: black;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 0.5rem;
    } 
`

export const Menuli=styled.li`
    list-style:none;
    font-size:1.7rem;
    font-weight:400;
    cursor: pointer;
     position: relative; 
     padding:12px 0px;
    &:hover{
        color: black;
        text-decoration: underline;
        text-underline-offset: 0.8rem;
        text-decoration-color: red;
    }
    &:hover ${SubMenuDiv} {
    display: flex;
    flex-direction:column; /* Show submenu on hover */
  }
`
export const Navlogo=styled.img`
    width:130px;
    @media(max-width:768px){
        width:130px;
    }
    @media(max-width:458px){
        width:130px;
    }
`
export const Navbtn=styled.button`
    background: black;
    color:white;
    border: 1px solid transparent;
    padding:4px 10px;
    border-radius: 3px;
    font-size:1.6rem;
    transition: 0.2s ease-in;
    cursor: pointer;
    &:hover{
        background: transparent;
        color:black;
        border: 1px solid black;
        box-shadow : 0px 0px 5px rgba(0,0,0,0.5) ;
        transition: 0.2s ease;
    }
    @media (max-width: 703px) {
        width:90%;
        padding: 10px;
  }
`
export const Menubars = styled(LiaBarsSolid)`
  display: none;
  font-size: ${({ size }) => size || '2rem'};
  cursor: pointer;

  @media (max-width: 703px) {
    display: block;
    font-size: ${({ size }) => size || '2rem'};
  }
`;
export const MenuCross = styled(RxCross1)`
  display: none;
  font-size: ${({ size }) => size || '2rem'};
  cursor: pointer;

  @media (max-width: 703px) {
    display: block;
    font-size: ${({ size }) => size || '2rem'};
  }
`;
export const MenuUp = styled(IoChevronForward )`
  display: none;
  font-size: ${({ size }) => size || '2rem'};
  cursor: pointer;

  @media (max-width: 703px) {
    display: block;
    font-size: ${({ size }) => size || '2rem'};
  }
`;
export const AddDiv=styled.div`
width:100%;
display:flex;
gap:2rem;
justify-content:space-between;
align-items:center;
`
export const MenuDown = styled(IoChevronDownSharp)`
  display: none;
  font-size: ${({ size }) => size || '2rem'};
  cursor: pointer;

  @media (max-width: 703px) {
    display: block;
    font-size: ${({ size }) => size || '2rem'};
  }
`;


