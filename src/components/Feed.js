import React from 'react'

import Card from './Card'
import Spinner from './Spinner'

const Feed = (props) => {

    const loaded = () => {
        props.data.sort((a,b)=> {
            let da = new Date(a.postTime), db = new Date(b.postTime);
            return db - da
        })

        return (
            <div className="feed">
                <Card data={props.data} addToFavorites={props.addToFavorites}/>
            </div>
        )
    }

    const loading = () => {
        return <Spinner />
    }

    return props.data ? loaded() : loading()
}

export default Feed