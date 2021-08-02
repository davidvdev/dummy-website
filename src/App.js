
import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import './loading.css'

import Header from './components/Header';
import Main from './pages/Main';
import SubPage from './pages/SubPage';
import planet from './img/ringed-planet.svg'

function App() {

  const [postData, setPostData] = useState(null)
  const [favPosts, setFavPosts] = useState([])

  // const postDataTemp = [{
  //   orgin: {emblem:'', page:''},
  //   postTime: '',
  //   title:'',
  //   content: {type:'',content:'' }
  // }]

  const makeAPIcall = async () => {
    // GET THE API DATA
    const spaceID = `7msncevw6mo1`
    const environmentID = `master`
    const apiKey=`y7x8mZKyJ-oiyguxqG0K3EjJ38mideKPSuOxuLggn34`
    const baseURL = `https://cdn.contentful.com`
    const allEntries = `/spaces/${spaceID}/environments/${environmentID}/entries?access_token=${apiKey}`
    const response = await fetch(baseURL+allEntries)
    const data = await response.json()
    // console.log('API CALL DATA',data)

    // MAP IT INTO A STANDARDIZED FORMAT BASED ON postDataTemp
    const postDataArr = data.items.map((item)=>{
      const heroImg = 'https://images.unsplash.com/photo-1565436381579-52471481f017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        return (
          {origin : {emblem : planet, page:'blog', hero: heroImg},
          postTime:item.fields.date,
          title:item.fields.title,
          content:{type:'text',content:item.fields.body}, score: 0, favorite: false
          }
        )
    })
    setPostData(postDataArr)
  }

  const nasaAPIcall = async () => {
    const apiKey = `MdAdCzvrJrRNJyv0elbkdWQw3MtPf2Ll8OdXAMMZ`
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=12`
    const response = await fetch(url)
    const data = await response.json()

    const postDataArr = data.map((item)=>{
      return (
        {origin : {emblem : 'https://api.nasa.gov/assets/img/favicons/favicon-192.png', 
          page:'apod', 
          hero: 'https://api.nasa.gov/assets/img/general/apod.jpg'},
        postTime:item.date,
        title:item.title,
        content:{type:'image',content:item.url}, score: 0, favorite: false
        }
      )
    })
    setPostData(postDataArr)
  }


  const addToFavorites = (newFav) => {
    setFavPosts([...favPosts, newFav])
  }




  useEffect(()=>{
    // makeAPIcall()
    nasaAPIcall()
  },[])

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
