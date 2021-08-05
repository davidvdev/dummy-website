import React from 'react'

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
        return (<>
           {/* // Loading spinner taken from https://codepen.io/mrsahar/pen/pMxyrE?editors=1100 */}
           <h5>favorited posts will appear here</h5>
           <div class="col-sm-2">
           <div id="triangle3">
               <span></span>
               <span></span>
           </div>
            </div>
        </>)
    }

    return props.page ? loaded() : loading();
}

export default PageHead