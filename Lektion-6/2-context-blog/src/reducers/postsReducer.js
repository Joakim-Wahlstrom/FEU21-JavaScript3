import actiontypes from "./actiontypes"

// const action = {
//   type: 'ADD_POST',
//   payload: { title, body }
// }

export const postsReducer = (state, action) => {
  switch(action.type){
    // case 'ADD_POST':
    case actiontypes().posts.addPost:
      let post = {
        id: Date.now().toString(),
        title: action.post.title,
        body: action.post.body
      }
      return [post, ...state]

    // case 'DELETE_POST':
    case actiontypes().posts.deletePost:
      return state.filter(post => post.id !== action.payload)

    default:
      return state
  }

}