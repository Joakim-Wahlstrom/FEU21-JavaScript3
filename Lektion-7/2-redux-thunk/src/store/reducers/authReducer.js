import actiontypes from "../actiontypes";

const initState = {
  token: null,
  loading: false,
  error: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {

    default:
      return state
  }
}

export default authReducer;