import React from 'react'

import Feed from '../components/Feed'
import PageHead from '../components/PageHead'

const SubPage = (props) => {
    console.log('SubPage', props)

    // This StackOverflow post was helpful in determining how to create a array of unique page origins:
    // https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects?page=1&tab=votes#tab-top
    // arr.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)

    const origins = props.data.map((item) => item.origin)
    const pagesArr = origins.filter((page, index, origins) => origins.findIndex(item => (item.id === page.id)) === index)

    console.log('origins: ', origins)
    console.log('pagesArr: ', pagesArr)

    const page = props.match.params.page

    if (page === 'favorites'){
        return (<>
            <PageHead label={'Favorites'} {...props.favorites[0]}/>
            <Feed data={props.favorites} addToFavorites={props.addToFavorites}/>
        </>)
    } else {
        // map over the pagesArr
        // return a new page head and feed based on the origin values.
        return (<>
            <PageHead {...props.data[0]}/>
            <Feed data={props.data} addToFavorites={props.addToFavorites}/>
        </>)
    }
}

export default SubPage