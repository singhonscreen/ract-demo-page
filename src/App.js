import React from 'react'
import NavBar from './components/NavBar'
import "./App.css";
import QualityLimitCombine from './components/QualityLimitCombine';
import Gallery from './components/Gallery';
const App = () => {
  return (
    <>
      <NavBar />
      <QualityLimitCombine />
      <Gallery />
    </>
  )
}

export default App
