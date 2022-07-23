import React from "react";
import styled from "styled-components";
import CategoryLine from "./categoryLine";
// import HeadBody from "./body";

export default function Main(){
    return (
       <MainBlock>
        <CategoryLine/>
        <ArticleBlock>
            <section className="product-filter">dfsdf </section>
            <section className="product-list">sdfsdfsdf </section>

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
margin: 0px 80px;
`;