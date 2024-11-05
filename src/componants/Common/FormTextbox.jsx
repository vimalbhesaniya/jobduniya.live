import React from 'react'

const FormTextboxes = ({ type, className  , onchange , placeholder , warning} ) => {
    return (
        <>
        <div className='--allinput'>
            <input
                type={type}
                className={className}
                onChange={(e) => onchange(e.target.value)}
                placeholder={placeholder}
            />
            <span>{warning}</span>
        </div>
        </>
    )
}

export default FormTextboxes