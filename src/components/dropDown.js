import React from "react";
import Select from 'react-select'


export default function DropDown(props) {
    const {option} = props
    const {defValue} = props

    return(
        <Select classNamePrefix='drop-down' options={option} isSearchable={false} defaultValue={defValue}/>
        // defaultValue={valueDef} onChange={onChange}
    )
}