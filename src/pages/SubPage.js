import React from 'react'

import Feed from '../components/Feed'
import PageHead from '../components/PageHead'

const SubPage = (props) => {
    console.log('SubPage', props)

    // This StackOverflow post was helpful in determining how to create a array of unique page origins:
    // https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects?page=1&tab=votes#tab-top
    // arr.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
    // const unique = [...new Set(array.map(item => item.age))];

    const origins = props.data.map((item) => item.origin)
    // const pagesArr = origins.filter((page, index, origins) => origins.findIndex(item => (item.id === page.id)) === index)
    // const pagesArr = [...new Set(origins.map(item => item.page))]
    const pagesArr = [...new Set(origins.map(item => item.page))]

    console.log('origins: ', origins)
    console.log('pagesArr: ', pagesArr)

    const page = props.match.params.page

    if (page === 'favorites'){

        const favPage = {
            emblem:'https://images.unsplash.com/photo-1533558527255-407147f3ae72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            hero:'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=827&q=80', 
            page:'favorites',
            pageDesc: 'a place for all of your favorite posts'    
        }
            

        return (<>
            <PageHead {...favPage}/>
            <Feed data={props.favorites} addToFavorites={props.addToFavorites}/>
        </>)
    } else {
        // map over the pagesArr
        // return a new page head and feed based on the origin values.
        // pagesArr.map(page => {
        //     console.log('page map',page)
        // })
        return (<>
            <PageHead {...props.data[0].origin}/>
            <Feed data={props.data} addToFavorites={props.addToFavorites}/>
        </>)
    }
}

export default SubPage