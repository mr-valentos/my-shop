import React from "react";
import styled from "styled-components";
import userImg from "../../img/person.svg"
import cartImg from "../../img/bag.svg"
import downImg from "../../img/down.svg"
import searchImg from "../../img/search.svg"

export default function HeadBody() {
    return(
        <DivBody className='header-body'>
          <div className='logo'>
            <H1>Freshfood</H1>
          </div>
          <DivSearch className='search'>
            <BtnCategory type='button'>All categories</BtnCategory>
            <DivForInput><InputSearch type='text' placeholder='search'></InputSearch></DivForInput>
            <BtnSearch type='button'></BtnSearch>
          </DivSearch>
          <DivUserCart className='user_cart'>
            <DivUser img={userImg} className='user'></DivUser>
            <DivUser img={cartImg} className='cart'></DivUser>
          </DivUserCart>
        </DivBody>
    )
}



const DivBody = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 130px;
`;

const H1 = styled.h1`
font-size: 20px;
font-weight: 800;
`;

const DivSearch = styled.div`
display: flex;
align-items: center;
height: 42px;
background: #F9F9F9;
border: 1px solid #D1D1D1;
border-radius: 12px;
`;

const DivUser = styled.div`
background: url(${props=>props.img}) 0 0/100% 100% no-repeat;
width:24px;
height:24px;
`;

const DivUserCart = styled.div`
display: flex;
justify-items: center;
gap: 40px;
`;
 
const BtnCategory = styled.button`
background: inherit;
font-size: 15px;
font-weight: 700;
padding-left: 16px;
&:after {
    content: url(${downImg});
    padding-left: 8px;
    padding-right: 24px;
  }
`;

const BtnSearch = styled.button`
background: url(${searchImg}) 50% 50% /16px 16px no-repeat;
width: 16px;
height: 16px;
margin: 0px 16px 0px 12px;
/* background-position: 50% 50%; */
`;

const InputSearch = styled.input`
background: inherit;
height: 19px;
color: #A9A9A9;
`;

const DivForInput = styled.div`
&:before {
    content: '';
    padding-right: 24px;
    border-left: 1px solid #D1D1D1;
  }
`;