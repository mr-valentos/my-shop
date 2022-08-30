import React, {useState}  from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DropDown from "../DropDown"
import { addSubcategory } from "../../store/sliceFilter";


export default function CategoryLine() {
    const dispatch = useDispatch();
    const [currentSubcategory, setCurrentSubcategory] = useState('')

    const allCategories = useSelector(state => state.categories.category)
    const CategoriesWithoutAll = allCategories.filter(e => e.value !== 'all categories')

    const onChange = (newValue) => {
        let subcategory = newValue.value
        // setCurrentSubcategory(newValue.value)
        dispatch(addSubcategory({subcategory}))
    }

    return(
        <AsaidLine>
            {CategoriesWithoutAll.map((e, i) => <DropDown key={e.value} option={e.products} defValue={e} onChange={onChange}/>)}
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