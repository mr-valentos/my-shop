import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DropDown from "../DropDown"

const options = [
    { value: 'all', label: 'All categories' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default function CategoryLine() {
    const allCategories = useSelector(state => state.categories.category)
    const CategoriesWithoutAll = allCategories.filter(e => e.value !== 'all categories')
    return(
        <AsaidLine>
            {CategoriesWithoutAll.map((e, i) => <DropDown key={e.value} option={e.products} defValue={e}/>)}
        </AsaidLine>
    )
}




const AsaidLine = styled.aside`
display: flex;
align-items: center;
gap: 39px;
padding: 6px 114px;
background: #F9F9F9;
width: 100%;
@media (max-width: 1130px) {
    padding: 6px 29px;
}
@media (max-width: 768px) {
>*{
    display:none;
}
}
`;