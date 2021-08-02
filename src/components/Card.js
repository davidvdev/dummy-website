import React from 'react'
import { Link } from 'react-router-dom'

import '../loading.css'

const Card = (props) => {
    // console.log('Card',props)

    const loaded = () => {

        const handleClick = (event, item) => {
            console.log('EVENT:',event)
            console.log('ITEM:',item)
            const name = event.target.attributes[0].value
            const parent = event.target.parentElement.parentElement
            switch(name) {
                case 'vote-up':
                    event.target.style.color='var(--split-comp-l)';
                    break;
                case 'vote-down':
                    event.target.style.color='var(--split-comp-r)';
                    break;
                    case 'comment':
                        break;
                    case 'favorite':
                    event.target.style.color='var(--split-comp-l)';
                    console.log('this is the item:', item)
                    props.addToFavorites(item)
                        break;
                    case 'share':
                        break;
                    default:
                        break;
        }

        const contentConditional = (type) => {
            if (type === 'text'){
                return <p>{item.content.content}</p>
            } else {
                return <img src={item.content.content} alt={item.title} />
            }
        }

        }

        return(
            <div className="content">
                {props.data.map((item, index) => {
                    
                    return (
                        <div className='card' key={index}>
                            <div className='row'>
                                <div className='post-details'>
                                    <Link to={`/page/${item.origin.page}`}>
                                        <img src={item.origin.emblem} alt=''/>
                                        <h4>{item.origin.page}</h4>
                                    </Link>
                                    <span> • </span>
                                    <h6>{item.postTime}</h6>
                                </div>
                                <div className='card-options'>
                                    <i onClick={() =>{handleClick(item)}} class="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                            <div className='row'>
                                <h2>{item.title}</h2>
                            </div>
                            <div className='row'>
                                {contentConditional(item.content.type)}
                            </div>
                            <div className='row actions'>
                                <div className='votes'>
                                    <i onClick={() =>{handleClick(item)}} name="vote-up" class="fas fa-arrow-alt-circle-up"></i>
                                    <p className='score'>{item.score}</p>
                                    <i onClick={() =>{handleClick(item)}} name="vote-down" class="fas fa-arrow-alt-circle-down"></i>
                                </div>
                                <i onClick={() =>{handleClick(item)}} name="comment" class="fas fa-comments"></i>
                                <i onClick={(event) =>handleClick(event, item)} name="favorite" class="fas fa-star"></i>
                                <i onClick={() =>{handleClick(item)}} name="share" class="fas fa-share-square"></i>
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
            <div class="col-sm-2">
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