import React from "react";
import styled from "styled-components";
import StarsImg from "../../img/starsProdactTemp.svg"


export default function ProductList(){
    return (
        <ProductSection className="product-list">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </ProductSection>
    )
}



function Product(){
    return(
        <ItemDiv className="product-list__item">
            <ImgDiv><DiscountBadge>-36 %</DiscountBadge></ImgDiv>
            <div>
                <ProductTitle>Product title</ProductTitle>
                <ProductDescription>Space for small description</ProductDescription>
                <ProductRating img={StarsImg}></ProductRating>
            </div>
            <PriceAndBtn>
            <PriceBlock>
                <h1>{36.99} USD</h1>
                <h2>{48.56}</h2>     
            </PriceBlock>
                <BtnBuy>Buy now</BtnBuy>
            </PriceAndBtn>
            
        </ItemDiv>
    )
}


//========================Style for product list=========================
const ProductSection = styled.section`
display: grid;
width: 100%;
grid-template-columns: repeat(auto-fill, 268px);
grid-template-rows: minmax(200px, max-content);

align-items: start;
gap: 48px 32px;
`;

const ItemDiv = styled.div`
display: flex;
flex-direction: column;
background: #FFFFFF;
border: 1px solid #D1D1D1;
border-radius: 12px;
overflow-wrap: break-word;
padding: 16px;
gap: 16px;
`;

//========================Style for product=========================


const ImgDiv = styled.div`
width: 236px;
height: 180px;
background: #F9F9F9;
border-radius: 12px;
`;

const DiscountBadge = styled.span`
position: absolute;
background: #F4F8EC;
border-radius: 12px;
padding: 0px 8px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #6A983C;
margin: 12px;
`;

const ProductTitle = styled.h1`
font-weight: 500;
font-size: 15px;
line-height: 22px;
`;

const ProductDescription = styled.h2`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #575757;
margin-top: 4px;
`;

const ProductRating = styled.div`
background: url(${props=>props.img}) 0 0/100% 100% no-repeat;
width:88px;
height:16px;
margin-top: 12px;
`;

const PriceAndBtn = styled.div`
display: flex;
justify-content: space-between;
`;

const PriceBlock = styled.div`
font-weight: 600;
>h1{  
    font-size: 18px;
    line-height: 27px;
}
>h2{
    font-size: 12px;
    line-height: 18px;
    text-decoration-line: line-through;
    color: #A9A9A9;
}
`;

const BtnBuy = styled.button`
align-items: center;
padding: 12px 16px;
height: 48px;
left: 0px;
bottom: 0px;
background: #6A983C;
border: 2px solid #46760A;
border-radius: 12px;
font-weight: 700;
font-size: 15px;
line-height: 22px;
color: #FFFFFF;
`;