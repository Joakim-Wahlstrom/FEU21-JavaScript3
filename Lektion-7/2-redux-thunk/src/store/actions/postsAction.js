import axios from 'axios'
import actiontypes from '../actiontypes'

export const getPosts = () => {
  return async dispatch => {
    dispatch(loading(true))
    try {
      const res = await axios.get('http://localhost:8080/posts')
      dispatch(setPosts(res.data))
    }
    catch(err) {
      dispatch(postsFailure(err.message))
    }
  }
}

const loading = (payload) => {
  return {
    type: actiontypes().posts.loading,
    payload
  }
}

const setPosts = (posts) => {
  return {
    type: actiontypes().posts.setPosts,
    payload: posts
  }
}

const postsFailure = (payload) => {
  return {
    type: actiontypes().posts.failure,
    payload
  }
}





// getPosts | loading = true
// getPostsSuccess | data = res.data, loading = false, error = null
// getPostsFailure | data = [], loading = false, error = res.data