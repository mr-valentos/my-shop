import React, {useEffect, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import {addBrand, deleteBrand} from "../../../store/sliceFilter";
import styled from "styled-components";
import FilterForm from "./FilterForm";
import Checkbox from "../../Checkbox";


export default function BrandsFilter(){
    return (
        <FilterForm 
            name={'Brands'} 
            component={Brands}
        />    
    )
}



function Brands(){
    const allBrands = useSelector(state => state.categories.brands)
    

    return (
        <>
        {allBrands.map(i => (
            <li key={i}>
                <LabelCheckbox brand={i}/>
            </li>
        ))}
        </>
    )
}

function LabelCheckbox(props){
    const dispatch = useDispatch();
    const {brand} = props
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
        console.log(brand)

    };

    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        } else {
            if(checked){
                dispatch(addBrand({brand}))
            } else {
                dispatch(deleteBrand({brand}))
            }
        }
    },)


    return (
        <label>
            <Checkbox
            checked={checked}
            onChange={handleChange}
            />
            <span style={{ marginLeft: 8 }}>{brand}</span>
        </label>
    )
}




// const Checkbox = styled.input`
// &:before {
//     color: red;
// }
// `;