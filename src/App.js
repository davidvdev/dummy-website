
import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import './loading.css'

import Header from './components/Header';
import Main from './pages/Main';
import SubPage from './pages/SubPage';

function App() {

  const [postData, setPostData] = useState(null)
  const [favPosts, setFavPosts] = useState([])

  // const postDataTemp = [{
  //   orgin: {emblem:'', page:'', hero:'', pageDesc:''},
  //   postTime: '',
  //   title:'',
  //   content: {type:'',content:'' }
  // }]

  const makeAPIcall = async () => {

    // CONTENFUL API CALL
    const cAPI = {sID:`7msncevw6mo1`, eID: `master`, key: `y7x8mZKyJ-oiyguxqG0K3EjJ38mideKPSuOxuLggn34`}
    const url = `https://cdn.contentful.com/spaces/${cAPI.sID}/environments/${cAPI.eID}/entries?access_token=${cAPI.key}`
    const response = await fetch(url)
    const data = await response.json()
    const blogDataArr = data.items.map((item)=>{

      const formattedDate = item.fields.date.split('T')[0]
        return (
          {origin : {emblem : 'https://images.unsplash.com/photo-1471970394675-613138e45da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
            page:'blog', 
            pageDesc:'the Contentful blog', 
            hero: 'https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'},
          postTime:formattedDate,
          title:item.fields.title,
          content:{type:'text',content:item.fields.body}, score: 0, favorite: false
          }
        )
    })
    // NASA APOD API CALL
    const apiKey = `MdAdCzvrJrRNJyv0elbkdWQw3MtPf2Ll8OdXAMMZ`
    const url2 = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=12`
    const response2 = await fetch(url2)
    const data2 = await response2.json()
    const apodDataArr = data2.map((item)=>{
      return (
        {origin : {emblem : 'https://api.nasa.gov/assets/img/favicons/favicon-192.png', 
          page:'apod', 
          pageDesc: 'Astronomy Photo of the Day',
          hero: 'https://api.nasa.gov/assets/img/general/apod.jpg'},
        postTime:item.date,
        title:item.title,
        content:{type:'image',content:item.url}, score: 0, favorite: false
        }
      )
    })

    const postDataArr = [...blogDataArr, ...apodDataArr].map((post, index) => {
      return {...post, id:index}
    })
    console.log(postDataArr)

    setPostData(postDataArr)
  }

  // const nasaAPIcall = async () => {
  //   const apiKey = `MdAdCzvrJrRNJyv0elbkdWQw3MtPf2Ll8OdXAMMZ`
  //   const url2 = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=12`
  //   const response2 = await fetch(url2)
  //   const data2 = await response2.json()

  //   const apodDataArr = data2.map((item)=>{
  //     return (
  //       {origin : {emblem : 'https://api.nasa.gov/assets/img/favicons/favicon-192.png', 
  //         page:'apod', 
  //         pageDesc: 'Astronomy Photo of the Day',
  //         hero: 'https://api.nasa.gov/assets/img/general/apod.jpg'},
  //       postTime:item.date,
  //       title:item.title,
  //       content:{type:'image',content:item.url}, score: 0, favorite: false
  //       }
  //     )
  //   })
  //   setPostData(postDataArr)
  // }


  const addToFavorites = (newFav) => {
    setFavPosts([...favPosts, newFav])
  }

  useEffect(()=>{ makeAPIcall() },[])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main data={postData} addToFavorites={addToFavorites}/>
        </Route>
        <Route 
          path="/page/:page"
          render={(routerProps) => {return <SubPage {...routerProps} data={postData} favorites={favPosts} addToFavorites={addToFavorites}/>}}
        />
      </Switch>
    </div>
  );
}

export default App;
