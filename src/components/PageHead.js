import React from 'react'

const PageHead = (props) => {
    console.log(props)

    const loaded = () => {
        return (
            <div className="page-head" style={{backgroundImage: props.hero}}>
                <div className="page-head-img"></div>
                <img src={props.emblem} alt='page emblem' className='page-emblem'/>
                <h1>{props.page}</h1>
                <h2>subtitle for page</h2>
                <div className="page-links">
                    <h4>Page Feed</h4>
                    <h4>Page Info</h4>
                </div>
            </div>
        )
    }

    const loading = () => {
        return (
            <h1>Your favorite posts will display here!</h1>
        )
    }

    return props.page ? loaded() : loading();
}

export default PageHead