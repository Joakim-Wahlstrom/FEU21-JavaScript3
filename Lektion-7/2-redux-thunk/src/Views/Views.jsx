import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatePostView from './CreatePostView'
import NewsView from './NewsView'
import PostDetailsView from './PostDetailsView'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <NewsView /> } />
      <Route path='/posts/:id' element={ <PostDetailsView /> }/>
      <Route path='/create' element={ <CreatePostView /> } />
    </Routes>
  )
}

export default Views