import React from 'react'

import Card from './Card'

const Feed = (props) => {
    return (
        <Card data={props.data} addToFavorites={props.addToFavorites}/>
    )
}

export default Feed