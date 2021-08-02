import React from 'react'

import Feed from '../components/Feed'

const Main = (props) => {
    return (
        <Feed data={props.data} addToFavorites={props.addToFavorites}/>
    )
}

export default Main