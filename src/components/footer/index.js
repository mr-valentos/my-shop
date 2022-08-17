import React from "react";
import styled from "styled-components";



export default function Footer(){
    return (
        <FooterBlockStyle>
            <div className="footer-navigation">
                <h1>Get in touch</h1>
                <ul>
                    <li><StyledLink href="/">About Us</StyledLink></li>
                    <li><StyledLink href="/">Careers</StyledLink></li>
                    <li><StyledLink href="/">Press Releases</StyledLink></li>
                    <li><StyledLink href="/">Blog</StyledLink></li>
                </ul>
            </div>
            <div className="footer-navigation">
                <h1>Get in touch</h1>
                <ul>
                    <li><StyledLink href="/">About Us</StyledLink></li>
                    <li><StyledLink href="/">Careers</StyledLink></li>
                    <li><StyledLink href="/">Press Releases</StyledLink></li>
                    <li><StyledLink href="/">Blog</StyledLink></li>
                </ul>
            </div>
            <div className="footer-navigation">
                <h1>Get in touch</h1>
                <ul>
                    <li><StyledLink href="/">About Us</StyledLink></li>
                    <li><StyledLink href="/">Careers</StyledLink></li>
                    <li><StyledLink href="/">Press Releases</StyledLink></li>
                    <li><StyledLink href="/">Blog</StyledLink></li>
                </ul>
            </div>
            <div className="footer-navigation">
                <h1>Get in touch</h1>
                <ul>
                    <li><StyledLink href="/">About Us</StyledLink></li>
                    <li><StyledLink href="/">Careers</StyledLink></li>
                    <li><StyledLink href="/">Press Releases</StyledLink></li>
                    <li><StyledLink href="/">Blog</StyledLink></li>
                </ul>
            </div>
           
        </FooterBlockStyle>
    )}




const FooterBlockStyle = styled.nav`
display:flex;
justify-content: space-between;
padding: 64px 130px;
>div{
    >h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    }
    >ul{
        display:flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 16px;
        >li{
            
        }
    }
}
@media (max-width: 1130px) {
    padding: 64px 45px;
}
`;

const StyledLink = styled.a`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: #6A983C;
`;