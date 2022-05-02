import actiontypes from "../actiontypes";

const initState = {
  data: null,
  loading: false,
  error: null
}

const postReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().post.loadPostStart:
      return {
        ...state,
        loading: true
      }
      // return {
      //   data: null,
      //   loading: true,
      //   error: null
      // }

    case actiontypes().post.loadPostSuccess:
      return {
        ...state,
        data: action.post,
        loading: false,
        error: null
      }

    case actiontypes().post.loadPostFailure:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload
      }

    case actiontypes().post.clearPost:
      return {
        ...state,
        data: null
      }

    default:
      return state
  }
}

export default postReducer;