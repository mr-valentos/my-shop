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
          <UlInfo2 >
            <li><AInfo href='/'>Blog</AInfo></li>
            <li><AInfo href='/'>About Us</AInfo></li>
            <li><AInfo href='/'>Careers</AInfo></li>
          </UlInfo2>
        </DivInfo>
    )
}



const DivInfo = styled.nav`
display: flex;
height: 48px;
justify-content: space-between;
font-size: 12px;
border-bottom: 1px solid rgba(15,15,15, 0.05);
@media (max-width: 768px) {
  display: none;
  justify-content: center;
}
`;

const UlInfo = styled.ul`
display: flex;
align-items: center;
gap: 33px;
`;

const UlInfo2 = styled.ul`
display: flex;
align-items: center;
gap: 33px;
@media (max-width: 768px) {
  display: none;
}
`;

const AInfo = styled.a`
color: #6A983C;
`;