import React from 'react'
import { Link } from 'react-router-dom'

import '../loading.css'
import planet from '../img/ringed-planet.svg'

const Card = (props) => {
    // console.log('Card',props)

    const loaded = () => {

    const handleClick = (event) => {
        console.log(event)
        const name = event.target.attributes[0].value
       switch(name) {
           case 'vote-up':
               event.target.style.color='var(--split-comp-l)';
               console.log(event.target.parentElement.parentElement.parentElement)
               break;
           case 'vote-down':
               event.target.style.color='var(--split-comp-r)';
               break;

       }

    }

    return(
        <div className="content">
            {props.data.map((item, index) => {
                // console.log('map of', item, index)
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
                                <i onClick={handleClick} class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <div className='row'>
                            <h2>{item.title}</h2>
                        </div>
                        {/* replace with a conditional here for content types */}
                        <div className='row'>
                            <p>{item.content.content}</p>
                        </div>
                        {/* end of replacement section */}
                        <div className='row actions'>
                            <div className='votes'>
                                <i onClick={handleClick} name="vote-up" class="fas fa-arrow-alt-circle-up"></i>
                                <p className='score'>{item.score}</p>
                                <i onClick={handleClick} name="vote-down" class="fas fa-arrow-alt-circle-down"></i>
                            </div>
                            <i onClick={handleClick} class="fas fa-comments"></i>
                            <i onClick={handleClick} class="fas fa-star"></i>
                            <i onClick={handleClick} class="fas fa-share-square"></i>
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