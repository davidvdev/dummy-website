import React from 'react'

import Feed from '../components/Feed'
import PageHead from '../components/PageHead'

const favPage = {
    emblem:'https://images.unsplash.com/photo-1533558527255-407147f3ae72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    hero:'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=827&q=80', 
    page:'favorites',
    pageDesc: 'a place for all of your favorite posts'    
}

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
        return (<div className="app-body">
            <PageHead {...favPage}/>
            <Feed data={props.data.filter(post => post.favorite === true)} addToFavorites={props.addToFavorites}/>
        </div>)
    } else if(page ==='apod') {
        return (<div className="app-body">
            <PageHead {...pagesArr[1]}/>
            <Feed data={props.data.filter(post => post.origin.page === page)} addToFavorites={props.addToFavorites}/>
        </div>)
    } else if(page ==='blog') {
        return (<div className="app-body">
            <PageHead {...pagesArr[0]}/>
            <Feed data={props.data.filter(post => post.origin.page === page)} addToFavorites={props.addToFavorites}/>
        </div>)
    } else {
        return <h5>we're sorry. this page does not exist yet.</h5>
    }
}

export default SubPage