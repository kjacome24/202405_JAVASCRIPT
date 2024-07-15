import React from 'react'
import './App.css'
import Main from './components/Main'
import Side_Nav from './components/SideNav'
import TopNav from './components/TopNav'

function App() {


  return (
    <>
      <div className='container'>
        <TopNav />
        <Main />
        <Side_Nav />
      </div>  
    </>
  )
}

export default App
