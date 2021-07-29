import { sin } from 'prelude-ls';
import React, {useEffect, useState} from 'react'
import './App.css';

import Card from './components/Card'

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


  useEffect(()=>{
    makeAPIcall()
  },[])


  return (
    <div className="App">
      <Card data={dummyData}/>
    </div>
  );
}

export default App;
