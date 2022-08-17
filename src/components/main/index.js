import React, {useState} from "react";
import styled from "styled-components";
import CategoryLine from "./CategoryLine";
import Filters from "./filters";
import ProductList from "./ProductList";




export default function Main(){
    const [filterActive, setFilterActive] = useState(false)

    const changeFilterActive = () => {
        setFilterActive(!filterActive)
        window.scrollTo(0, 190);
    }
    return (
       <MainBlock>
        <CategoryLine/>
        <ArticleBlock>
            <Filters active={filterActive}/>
            <FilterBtn type="button" onClick={changeFilterActive}><h1>Filters</h1></FilterBtn>
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
margin: 64px 130px;
@media (max-width: 1130px) {
    margin: 64px 45px;
}
@media (max-width: 768px) {
    margin: 20px 20px;
}
`;

const FilterBtn = styled.button`
@media (min-width: 1025px) {
    display: none;
}
position: fixed;
left: -6px;
background-color: #6A983C;
height: max-content;
border-radius: 8px;

>h1{
    writing-mode: vertical-rl;
    text-orientation: upright;
    padding: 3px; 
    color: whitesmoke;
}
`;