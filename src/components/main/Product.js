import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link, useParams } from "react-router-dom";
import styled from "styled-components";
import productsImg from "../../img/products.jpeg"


export default function Product(){
    let params = useParams();
    let id = params.id
    const product = useSelector(state => state.products.product.filter( p => p.id === +id))[0]
    console.log(product)

    return(
        <ProductBlock className="product">
            <Link to="/">Back</Link>
            <ProductInfo className="product__info">
                <ImgDiv className="product__info-img"><Img image={productsImg}></Img></ImgDiv>
                <PriceDiv className="product__info-price">
                    <div>
                        <h1>{product.name}</h1>
                        <div></div>
                    </div>
                    <div>
                        <h2>Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.</h2>
                    </div>
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                <td>Emil</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>Tobias</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>Tobias</td>
                                <td>14</td>
                            </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                            <tr>
                                <td>Emil</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>Tobias</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>Tobias</td>
                                <td>14</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h1>here will be the price</h1>
                    </div>
                </PriceDiv>
            </ProductInfo>

            <div className="product__description"></div>
        </ProductBlock>
    )
}




// ========================= Style ==========================

const ProductBlock = styled.div`
margin: 0px 130px;
border-top: 1px solid rgba(15,15,15, 0.05);
`;

const ProductInfo = styled.div`
display: flex;
padding: 0px 15px;
`;

const ImgDiv = styled.div`
width: 50%;
padding-right: 15px; 
`;

const Img = styled.div`
background: url(${props=>props.image}) 0 0/contain no-repeat;
width: 100%;
height: 100%;
/* width: 100%;
height: 200px;
background: #F9F9F9;
border-radius: 12px; */
`;

const PriceDiv = styled.div`
width: 50%;
padding-left: 15px;
*>h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 140%;
    color: #151515;
}
*>h2{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #151515;
}
`;