const actiontypes = () => {
  return {
    posts: {
      setPosts: 'SET_POSTS',
      loading: 'POSTS_LOADING',
      failure: 'POST_FAILURE',
      addNewPost: 'ADD_NEW_POST'
    },
    post: {
      loadPostStart: 'LOAD_POST_START',
      loadPostSuccess: 'LOAD_POST_SUCCESS',
      loadPostFailure: 'LOAD_POST_FAILURE',
      clearPost: 'CLEAR_POST'
    },
    auth: {
      loading: 'AUTH_LOADING',
      authFailure: 'AUTH_FAILURE',
      authSuccess: 'AUTH_SUCCESS',
      logout: 'LOGOUT'
    }
  }
}

export default actiontypes;