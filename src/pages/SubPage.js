import React from 'react'

import Feed from '../components/Feed'
import PageHead from '../components/PageHead'

const SubPage = (props) => {
    console.log('SubPage', props)

    const page = props.match.params.page

    if (page === 'favorites'){
        return (<>
            <PageHead label={'Favorites'} {...props}/>
            <Feed data={props.favorites} addToFavorites={props.addToFavorites}/>
        </>)
    } else {
        return (<>
            <PageHead {...props.data[0]}/>
            <Feed data={props.data} addToFavorites={props.addToFavorites}/>
        </>)
    }
}

export default SubPage