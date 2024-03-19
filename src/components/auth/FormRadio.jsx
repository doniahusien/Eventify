import React from 'react'

const FormRadio = ({value, label}) => {
    return (
        <>
            <input type="radio" id={value} name="type" value={value}/>
            <label for={value} style={{ paddingRight: "5px" }}>{label}</label>
        </>
    )
}

export default FormRadio