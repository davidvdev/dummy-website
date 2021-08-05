import React from 'react'

import '../spinner.css'

const Spinner = () => {
    return (
        // Loading spinner taken from https://codepen.io/mrsahar/pen/pMxyrE?editors=1100
        <div className="col-sm-2">
            <div id="triangle3">
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Spinner