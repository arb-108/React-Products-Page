import styled from 'styled-components'
import { BsSearch } from "react-icons/bs";

export const HeadDiv=styled.div`
    width:100%;
    /* background: #08203E; */
    background: rgba(0,0,0,0.10);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height:9vh;
    /* border:1px solid black; */
    padding: 5px;
    .logo{
        width:100px;
        height:50px;
        /* background: red; */
        img{
            /* border:1px solid white; */
        }
    }
    .searchdiv{
        display:flex;
        padding: 0px 7px; 
        justify-content: center;
        align-items: center;
        background: white;
        border:1px solid grey;
        border-radius: 5px;
        background: #f6f6f6;
        transition: box-shadow 0.25s;

        input{
            /* font-size:1.6rem; */
            display:flex;
            align-items: center;
            justify-content: center;
            border:none;
            font-size:1.7rem;
            font-weight: 100;
            outline: none;
            color: rgba(0,0,0,0.75);
            padding: 5px 5px;
            border-radius: 20px;
            background: transparent;

        }
        &:focus-within{
         box-shadow: 0 0 4px rgba(0,0,0,0.75);
        }
        input::placeholder{
            font-size:1.6rem;
            color: rgba(0,0,0,0.45);
        }
         
    }
`
export const Searchlogo=styled(BsSearch)`
    color:rgba(0,0,0,0.5);
    font-size:2rem;
    /* background: red; */
    &:hover{
        cursor: pointer;
        color:rgba(0,0,0,0.75);
    }
`
export const BodyDiv=styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* height:calc(100vh - 9vh); */
    /* background: hsla(213, 77%, 14%, 1);

background: linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%);

background: -moz-linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%);

background: -webkit-linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#08203E", endColorstr="#557C93", GradientType=1 ); */
`