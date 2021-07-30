
import React, {useEffect, useState} from 'react'
import {Route} from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import Main from './pages/Main';
import SubPage from './pages/SubPage';

function App() {

  const [dummyData, setDummyData] = useState(null)

  const makeAPIcall = async () => {
    const spaceID = `7msncevw6mo1`
    const environmentID = `master`
    const apiKey=`y7x8mZKyJ-oiyguxqG0K3EjJ38mideKPSuOxuLggn34`
    const baseURL = `https://cdn.contentful.com`
    const allEntries = `/spaces/${spaceID}/environments/${environmentID}/entries?access_token=${apiKey}`
    const response = await fetch(baseURL+allEntries)
    const data = await response.json()
    console.log(data)
    setDummyData(data)
  }


  // useEffect(()=>{
  //   makeAPIcall()
  // },[])


  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/page">
        <SubPage />
      </Route>
    </div>
  );
}

export default App;
