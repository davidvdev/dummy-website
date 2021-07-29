import React from 'react'

const Card = (props) => {

    const loaded = () => {
    console.log(props.data.items)

    return(
        <div className="content">
            {props.data.items.map((item, index) => {
                console.log('map of', item)
                return (
                    <div className='card'>
                        <h2>{item.fields.title}</h2>
                        <p>{item.fields.body}</p>
                        <h6>{item.fields.date}</h6>
                    </div>
                )
            })}
        
        </div>
   )
    }

    const loading = () => {
        return <>loading...</>
    }

    return props.data ? loaded() : loading()
}

export default Card