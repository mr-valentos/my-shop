import React from "react";
import styled from "styled-components";

export default function Info() {
    return(
        <DivInfo className='header-info'>
          <UlInfo >
            <li><AInfo href='/'>Chat with us</AInfo></li>
            <li>+420 336 777 555</li>
            <li>info@freshfoodcom.com</li>
          </UlInfo>
          <UlInfo >
            <li><AInfo href='/'>Blog</AInfo></li>
            <li><AInfo href='/'>About Us</AInfo></li>
            <li><AInfo href='/'>Careers</AInfo></li>
          </UlInfo>
        </DivInfo>
    )
}



const DivInfo = styled.nav`
display: flex;
height: 48px;
justify-content: space-between;
font-size: 12px;
border-bottom: 1px solid rgba(15,15,15, 0.05);
`;
const UlInfo = styled.ul`
display: flex;
align-items: center;
gap: 33px;
`;
const AInfo = styled.a`
color: #6A983C;
`;