import styled from 'styled-components'
import { BsSearch } from "react-icons/bs";

export const ProductDiv=styled.div`
    width:90%;
    background:transparent;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    justify-content:center;
    justify-items: center;
    align-items: center;
    /* justify-content: ; */
    padding:20px 5px;
    gap:2rem;
    /* line-height: 20px; */
    @media (max-width: 1100px) {
       
    }
    @media (max-width: 580px) {
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
    }
`
export const ProductCard = styled.div`
    width: 250px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Start at the top */
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px 15px 5px;
    border: 1px solid gray;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 8px;

    /* Make all cards flexibly stretch to match height */
    height: 100%; /* Allow grid layout to adjust height */

    .pimgdiv {
        width: 150px;
        height: 150px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pimgdiv img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .addcart{
        width:100%;
        padding: 1rem 0rem 0rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        h6{
            font-size: 1.5rem;
            font-weight: 200;
        }
        h5{
            font-size: 2rem;
            font-weight: 600;
        }
        
        }
    
    h4 {
        font-size: 1.3rem;
        font-weight: 400;
        text-align: justify;
        /* margin: 0rem 1rem; */

    }
    transition: all 0.3s ease-in-out;
    cursor: default;
    &:hover{
        transform: translateY(-5px);
    }
    @media (max-width: 580px) {
        width: 90%;
        .pimgdiv {
        width: 200px;
        height: 200px;
        }
    }
    
`
export const Addbtn=styled.button`
    width:100px;
  align-items: center;
  color: #fff;
  background: #DB1010;
  cursor: pointer;
  border:2px solid #DB1010;
  border-radius: 4px;
  fill: #000;
  font-size: 1.3rem;
  font-weight: 400;
  justify-content: center;
  letter-spacing: -.8px;
  line-height: 24px;
  outline: 0;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  transition: all 0.3s ease-in-out;
    &:hover{
        background: #AD0C0C;
        border-color: #AD0C0C;
    }



@media (min-width: 768px) {
  &{
    max-width: 170px;
  }
}

`










