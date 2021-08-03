import React from 'react'

import Feed from '../components/Feed'

const Main = (props) => {
    return (
        <div className="app-body">
        <Feed data={props.data} addToFavorites={props.addToFavorites}/>
        </div>
    )
}

export default Main