import React from 'react'
import { Link } from 'react-router-dom'

import '../loading.css'

const Card = (props) => {

    const loaded = () => {

        const handleClick = (event, item) => {
          
            console.log(event)
            const style = event.target.style
            const name = event.target.attributes[0].value
          
            switch(name) {
                case 'vote-up':
                    event.target.style.color='var(--split-comp-l)';
                    // item.score++;
                    // event.target.innerhtml = item.score
                    break;
                case 'vote-down':
                    event.target.style.color='var(--split-comp-r)';
                    break;
                case 'comment':
                    break;
                case 'favorite':
                    item.favorite ? style.color='var(--light-bg-text)' : style.color='var(--split-comp-l)'
                    props.addToFavorites(item)
                    break;
                case 'share':
                    break;
                default:
                    break;
        }
        }

        const contentConditional = (item) => {
            if (item.content.type === 'text'){
                return <p>{item.content.content}</p>
            } else {
                return <img src={item.content.content} alt={item.title} />
            }
        }

        const initialStyle = (item) => {
            return item.favorite === false ? {color:'var(--light-bg-text)'} : {color:'var(--split-comp-l)'}
        }

        return(
            <div className="content">
                {props.data.map((item, index) => {

                    return (
                        <div className='card' key={index}>
                            <div className='row'>
                                <div className='post-details'>
                                    <Link to={`/page/${item.origin.page}`} onClick={()=> window.scrollTo(0,0)} className="details-link">
                                        <img src={item.origin.emblem} alt=''/>
                                        <h4>{item.origin.page}</h4>
                                    </Link>
                                    <span> • </span>
                                    <h6>{item.postTime}</h6>
                                </div>
                                <div className='card-options'>
                                    <i onClick={(event) => handleClick(event, item)} className="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                            <div className='row'>
                                <h2>{item.title}</h2>
                            </div>
                            <div className='row content-row'>
                                {contentConditional(item)}
                            </div>
                            <div className='row actions'>
                                {/* <div className='votes'>
                                    <i onClick={(event) => handleClick(event, item)} name="vote-up" className="fas fa-arrow-alt-circle-up"></i>
                                    <p className='score'>{item.score}</p>
                                    <i onClick={(event) => handleClick(event, item)} name="vote-down" className="fas fa-arrow-alt-circle-down"></i>
                                </div> */}
                                {/* <i onClick={(event) => handleClick(event, item)} name="comment" className="fas fa-comments"></i> */}
                                <i onClick={(event) => handleClick(event, item)} name="favorite" className="fas fa-star" style={initialStyle(item)} ></i>
                                {/* <i onClick={(event) => handleClick(event, item)} name="share" className="fas fa-share-square"></i> */}
                            </div>
                        </div>
                    )
                })}
            
            </div>
    )
    }

    const loading = () => {
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

    return props.data ? loaded() : loading()
}

export default Card