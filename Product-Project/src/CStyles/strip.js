import styled from 'styled-components'
import { BsSearch } from "react-icons/bs";

export const StripDiv=styled.div`
    width:100%;
    background:lightgray;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding:20px 5px;
    gap:1.3rem;
    h2{
        font-size: 3rem;
        font-weight: 600;
    }
    h6{
        width:40%;
        text-align: center;
        font-size: 1rem;
        font-weight: 100;
    }
    ul{
        padding-top: 10px;
        display:flex;
        gap:1.5rem;
    }
    @media (max-width: 1100px) {
        h6{
        width:60%;
        
    }
}
    @media (max-width: 800px) {
        h6{
        width:80%;
        
    }
    }
`
export const StripLi=styled.li`
    padding:5px 10px;
    color:${({isSelected})=>(isSelected?"white":"black")};
    background: ${({isSelected})=>(isSelected?"red":"rgba(0,0,0,0.2)")};
    border-radius: 25px;
    list-style: none;
    display:flex;
    cursor: pointer;
    transition: all 0.4s ease-out;
    &:hover{
        color:white;
        background: red;
        transition: all 0.4s ease-out;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.75);
    }
`