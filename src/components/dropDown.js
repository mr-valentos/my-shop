import React, {useEffect} from "react";
import Select from 'react-select'


export default function DropDown(props) {
    const option = props.option
    const defValue = props.defValue
    useEffect(()=>{
        console.log(props.defValue)
    })

    return(
        <Select classNamePrefix='drop-down' options={option} isSearchable={false} defaultValue={defValue}/>
        // defaultValue={valueDef} onChange={onChange}
    )
}