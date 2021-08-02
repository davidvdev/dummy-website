
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
    const postDataArr = data.items.map((item, index)=>{
        return (
          {origin : {emblem : planet, page:'blog'},
          postTime:item.fields.date,
          title:item.fields.title,
          content:{type:'text',content:item.fields.body}, score: 0, favorite: false
          }
        )
    })

    // console.log('postDataArr = ',postDataArr)

    setPostData(postDataArr)
  }

  const addToFavorites = (newFav) => {
    setFavPosts([...favPosts, newFav])
  }




  useEffect(()=>{
    makeAPIcall()
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
