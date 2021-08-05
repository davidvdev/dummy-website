import React from 'react'

import Spinner from './Spinner'

const PageHead = (props) => {

    const loaded = () => {

        return (
            <div className="page-head">
                <div className="page-head-img" style={{backgroundImage: `url(${props.hero})`}}></div>
                <img src={props.emblem} alt='page emblem' className='page-emblem'/>
                <h1>{props.page}</h1>
                <h2>{props.pageDesc}</h2>
            </div>
        )
    }

    const loading = () => {
        return <Spinner />
    }

    return props.page ? loaded() : loading();
}

export default PageHead