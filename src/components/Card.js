import React from 'react'
import { Link } from 'react-router-dom'

import Spinner from './Spinner'

const Card = (props) => {

    const loaded = () => {

        const handleClick = (event, item) => {
          
            const style = event.target.style
            const name = event.target.attributes[0].value
          
            switch(name) {
                case 'favorite':
                    item.favorite ? style.color='var(--light-bg-text)' : style.color='var(--split-comp-l)'
                    props.addToFavorites(item)
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
                                <i onClick={(event) => handleClick(event, item)} name="favorite" className="fas fa-star" style={initialStyle(item)} ></i>
                            </div>
                        </div>
                    )
                })}
            
            </div>
    )
    }

    const loading = () => {
        return <Spinner />
    }

    return props.data ? loaded() : loading()
}

export default Card