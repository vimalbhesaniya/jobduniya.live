import React from 'react'
import glob from "./Global.module.css"

const GlobalModel = ({ modelName }) => {
    function preventScroll(event) {
        event.stopPropagation()
        event.preventDefault()
    }

    return (
        <div className={glob.globalContainer} onScroll={preventScroll}>
            {modelName}
        </div>
    )
}

export default GlobalModel