import React from "react";
import styled from "styled-components";
import FilterForm from "./FilterForm";
import Checkbox from "../../Checkbox";


const options = [
    { value: 'all', label: 'All categories' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default function BrandsFilter(){
    return (
        <FilterForm 
            name={'Brands'} 
            component={Brands}
        />    
    )
}



function Brands(){
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
        {options.map(e => (
            <li key={e.value}>
                <label>
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    />
                    <span style={{ marginLeft: 8 }}>{e.label}</span>
                </label>
            </li>
        ))}
        </>
    )
}




// const Checkbox = styled.input`
// &:before {
//     color: red;
// }
// `;