import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from '../routes/ProtectedRoute'
import CreatePostView from './CreatePostView'
import LoginView from './LoginView'
import NewsView from './NewsView'
import PostDetailsView from './PostDetailsView'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <NewsView /> } />
      <Route path='/posts/:id' element={ <PostDetailsView /> }/>
      <Route path='/create' element={ 
      <ProtectedRoute>
        <CreatePostView /> 
      </ProtectedRoute>
      } />
      
      <Route path='/login' element={ <LoginView /> } />
    </Routes>
  )
}

export default Views