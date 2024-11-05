import React from 'react'

const Title = ({title}) => {
    return (
        <div className="row">
            <div className="col">
                <span className="fs fs-3">{title}</span>
            </div>
        </div>
    )
}

export default Title