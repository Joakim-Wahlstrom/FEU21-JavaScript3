import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewsView from './NewsView'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <NewsView /> } />
    </Routes>
  )
}

export default Views