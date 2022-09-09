import React, {useEffect} from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "../Modal";
import StarsImg from "../../img/starsProdactTemp.svg"
import productsImg from "../../img/products.jpeg"


export default function ProductList(){
    const allProduct = useSelector(state => state.products.product)
    const filter = useSelector(state => state.filters.filter)

    let filteredProduct = []

    if(filter.category === 'all categories'){
        filteredProduct = allProduct.filter(product => {
            return product.name.toLowerCase().includes(filter.productName.toLowerCase()) 
        })
    } else {
        filteredProduct = allProduct.filter(product => product.name.toLowerCase().includes(filter.productName.toLowerCase()) && product.category === filter.category)
    }

    if (filter.subcategory){
        filteredProduct = filteredProduct.filter(product => product.subcategory === filter.subcategory)
    }

    if (filter.rating.length > 0){
        filteredProduct = filteredProduct.filter(product => filter.rating.includes(product.rating))
    }

    if (filter.brands.length > 0){
        filteredProduct = filteredProduct.filter(product => filter.brands.includes(product.brand))
    }
    
    filteredProduct = filteredProduct.filter(product => product.price >= filter.price[0] && product.price <= filter.price[1])

    console.log(filter)

    return (
        <ProductSection className="product-list">
            {filteredProduct.map(product => (
                <Product key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                rating={product.rating}
                id={product.id}
                />
            ))}
            
        </ProductSection>
    )
}



function Product(props){
    const {name} = props
    const {price} = props
    const {description} = props
    const {rating} = props
    const {id} = props
    let ratingInStars = ''

    switch (rating) {
        case 1:
            ratingInStars = ''
          break;
        case 2:
            ratingInStars = ''
          break;
        case 3:
            ratingInStars = ''
          break;
        case 4:
            ratingInStars = ''
          break;
        case 5:
            ratingInStars = ''
          break;
        default:
            ratingInStars = ''
      }
      
    return(
        <ItemDiv className="product-list__item">
            <ImgDiv image={productsImg}><DiscountBadge>-36 %</DiscountBadge></ImgDiv>
            <div>
                <ProductTitle><StyledLink to={`/product=${id}`} >{name}</StyledLink></ProductTitle>
                <ProductDescription>{description}</ProductDescription>
                <ProductRating img={StarsImg}></ProductRating>
            </div>
            <PriceAndBtn>
            <PriceBlock>
                <h1>{price} USD</h1>
                <h2>{48.56}</h2>     
            </PriceBlock>
                <BtnBuy>Buy now</BtnBuy>
            </PriceAndBtn>
        </ItemDiv>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


//========================Style for product list=========================
const ProductSection = styled.section`
display: grid;
width: 100%;
grid-template-columns: repeat(auto-fill, 268px);
grid-template-rows: minmax(200px, max-content);
align-items: start;
gap: 48px 32px;
@media (max-width: 1024px) {
    justify-content:center;
}
@media (max-width: 768px) {
    /* grid-template-columns: repeat(2, 1fr); */
    gap: 15px;
}

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
background: url(${props=>props.image}) 0 0/cover no-repeat;
border-radius: 12px;
@media (max-width: 768px) {
    /* width: 100%;
    height: 135px; */
}
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