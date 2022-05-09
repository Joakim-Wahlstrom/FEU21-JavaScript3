import actiontypes from '../actiontypes'

const initState = {
    cart: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartReducer = (state, initState, action) => {
    switch(action.type){

        case actiontypes().cart.add:
            

        default:
            return state
    }
}

export default cartReducer