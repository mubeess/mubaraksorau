import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Projects from './Routes/Projects'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='projects' element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App