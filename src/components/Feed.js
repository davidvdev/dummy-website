import React from 'react'

import Card from './Card'

const Feed = (props) => {

    const loading = () => {
        return (
        <div className="col-sm-2">
            <div id="triangle3">
                <span></span>
                <span></span>
            </div>
        </div>
    )
    }

    const loaded = () => {
        const sortedByDate = props.data.sort((a,b)=> {
            let da = new Date(a.postTime), db = new Date(b.postTime);
            return db - da
        })

        return (
            <Card data={props.data} addToFavorites={props.addToFavorites}/>
        )
    }

    return props.data ? loaded() : loading()
}

export default Feed