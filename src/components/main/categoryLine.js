import React from "react";
import styled from "styled-components";
import DropDown from "../dropDown"

const options = [
    { value: 'all', label: 'All categories' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default function CategoryLine() {
    return(
        <AsaidLine>
            {options.map((e, i) => <DropDown key={e.value} option={options} defValue={e}/>)}
            
        </AsaidLine>
    )
}




const AsaidLine = styled.aside`
display: flex;
align-items: center;
padding: 16px 45px;
gap: 39px;
padding: 0px 80px;
background: #F9F9F9;
width: 100%;
height: 55px;

`;