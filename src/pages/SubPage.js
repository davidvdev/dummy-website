import React from 'react'

import Feed from '../components/Feed'
import PageHead from '../components/PageHead'

const SubPage = (props) => {
    console.log('SubPage', props)

    const origins = props.data.map((item) => item.origin)
    const uniquePages = [...new Set(origins.map(item => item.page))]
    const pagesArr = uniquePages.map(uniqueItem => origins.find(item => item.page === uniqueItem))

    console.log('origins: ', origins)
    console.log('uniquePages: ', uniquePages)
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
        pagesArr.map(page => {
            console.log('page map',page)
        })
        return (<>
            <PageHead {...props.data[0].origin}/>
            <Feed data={props.data} addToFavorites={props.addToFavorites}/>
        </>)
    }
}

export default SubPage