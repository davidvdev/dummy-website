import React from 'react'

const PageHead = (props) => {
    // console.log(props)

    const loaded = () => {

        const swapFeed = (event) => {
            const label = event.target.innerHTML
            switch (label){
                case 'Page Info':
                    console.log(event)
                    break;
                case 'Page Feed':
                    console.log(label)
                    break;
                default:
                    break;
            }
        }

        return (
            <div className="page-head">
                <div className="page-head-img" style={{backgroundImage: `url(${props.hero})`}}></div>
                <img src={props.emblem} alt='page emblem' className='page-emblem'/>
                <h1>{props.page}</h1>
                <h2>{props.pageDesc}</h2>
                <div className="page-links">
                    <h4 onClick={(event) => swapFeed(event)}>Page Feed</h4>
                    <h4 onClick={(event) => swapFeed(event)}>Page Info</h4>
                </div>
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