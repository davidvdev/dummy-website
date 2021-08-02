import React from 'react'

const PageHead = (props) => {
    console.log(props)
    return (
        <div className="page-head">
            <div className="page-head-img"></div>
            <img src={props.origin.emblem} alt='' className='page-emblem'/>
            <h1>{props.origin.page}</h1>
            <h2>subtitle for page</h2>
            <div className="page-links">
                <h4>Page Feed</h4>
                <h4>Page Info</h4>
            </div>
        </div>
    )
}

export default PageHead