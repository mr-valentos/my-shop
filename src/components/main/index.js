import React from "react";
import styled from "styled-components";
import CategoryLine from "./CategoryLine";
import Filters from "./filters";
import ProductList from "./ProductList";




export default function Main(){
    return (
       <MainBlock>
        <CategoryLine/>
        <ArticleBlock>
            <Filters/>
            <ProductList/>

        </ArticleBlock>
       </MainBlock>
    )
}




const MainBlock = styled.main`
font-family: 'Poppins', sans-serif; 
display: flex;
flex-direction: column;

`;

const ArticleBlock = styled.article`
display: flex;
flex-direction: row;
margin: 64px 80px;
`;