import { createContext, useState, useReducer } from 'react'
import { postsReducer } from '../reducers/postsReducer'

export const PostsContext = createContext()

export const PostsContextProvider = ({ children }) => {

  const [posts, dispatch] = useReducer(postsReducer, [
    {
      id: 'akjhsb23jknb',
      title: 'My first post',
      body: 'This is my first post ever!'
    },
    {
      id: 'akjasfgf3fcds',
      title: 'My second post',
      body: 'This is my second post!'
    }
  ])


  // const [posts, setPosts] = useState([
    // {
    //   id: 'akjhsb23jknb',
    //   title: 'My first post',
    //   body: 'This is my first post ever!'
    // },
    // {
    //   id: 'akjasfgf3fcds',
    //   title: 'My second post',
    //   body: 'This is my second post!'
    // },
    // {
    //   id: 'akjasdf3sdcf2',
    //   title: 'My third post',
    //   body: 'This is my third post!'
    // }
  // ])

  // const addPost = (title, body) => {
  //   let post = {
  //     id: Date.now().toString(),
  //     title,
  //     body
  //   }

  //   setPosts(state => {
  //     return [post, ...state]
  //   })
  // }

  // const deletePost = id => {
  //   setPosts(state => state.filter(post => post.id !== id))
  // }


  return (
    // <PostsContext.Provider value={{posts, addPost, deletePost}}>
    <PostsContext.Provider value={{ posts, dispatch }}>
      { children }
    </PostsContext.Provider>
  )
}
