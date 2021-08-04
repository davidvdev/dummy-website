
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
            pageDesc:'the Contentful blog (space facts provided by theplanets.org)', 
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
    // NASA MARS ROVER API CALL
    const url3 = `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?&api_key=${apiKey}`
    const response3 = await fetch(url3)
    const data3 = await response3.json()
    const roverDataArr = data3.latest_photos.map((item)=>{
      return (
        {origin : {emblem : 'https://mars.nasa.gov/system/missions/list_view_images/23_PIA23764-RoverNamePlateonMars-320x240.jpg', 
          page:'mars-rover', 
          pageDesc: 'Pictures taken by Perseverence',
          hero: 'https://mars.nasa.gov/system/resources/detail_files/26101_PIA24765-Figure1-web.jpg'},
        postTime:item.earth_date,
        title: `${item.rover.name} sol ${item.sol} id:${item.id}`,
        content:{type:'image',content:item.img_src}, score: 0, favorite: false
        }
      )
    })

    const postDataArr = [...blogDataArr, ...apodDataArr, ...roverDataArr].map((post, index) => {
      return {...post, id:index}
    })
    setPostData(postDataArr)
  }

  const addToFavorites = (clickedCard) => {
    console.log('clickedCard',clickedCard)
    const newFav = postData.filter(item => item.id === clickedCard.id)[0]

    newFav.favorite = !newFav.favorite
    console.log('newFav',newFav)
    console.log('postData',postData)
  }

  useEffect(()=>{ makeAPIcall() },[])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main data={postData} addToFavorites={addToFavorites} className="app-body"/>
        </Route>
        <Route 
          path="/page/:page"
          render={(routerProps) => {return <SubPage {...routerProps} data={postData} addToFavorites={addToFavorites} className="app-body"/>}}
        />
      </Switch>
    </div>
  );
}

export default App;
