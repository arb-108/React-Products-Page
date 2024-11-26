import styled from "styled-components";

export const WholeDiv=styled.div`
    width:100%;
    height:calc(100vh - 7vh);
    display:flex;
    justify-content: center;
    align-items: center;
    background: hsla(217, 100%, 50%, 1);
    background: linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
    background: -moz-linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
    background: -webkit-linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#0061FF", endColorstr="#60EFFF", GradientType=1 );
`
export const Mheadi=styled.p`
    font-size: 5rem;
    font-weight: 600;
`