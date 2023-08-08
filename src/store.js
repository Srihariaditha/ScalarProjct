//reducer is a function
//state, action are params
//action is an object with type of action, payload
// import _ from 'loadash'
import { configureStore } from '@reduxjs/toolkit'

function cartReducer(state = {items: {}}, action){
  switch(action.type){
    case "ADD_TO_CART":{
      const product = action.payload;
      if(state.items.hasOwnProperty(product.id)){
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]:{
              ...state.items[product.id],
              quantity: state.items[product.id].quantity+1
            }
          }
        }
      }else{
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]:{
              ...state.items[product.id],
              quantity: 1
            }
          }
        }
      }
    }
    case "REMOVE_FROM_CART":{
      const product = action.payload;
      if(state.items.hasOwnProperty(product.id) && state.items[product.id].quantity>1){
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]:{
              ...state.items[product.id],
              quantity: state.items[product.id].quantity-1
            }
          }
        }
      }else if(state.items.hasOwnProperty(product.id) && state.items[product.id].quantity<=1){
        return state.items.splice(state.items.findIndex((product) => product.id === action.payload.id), 1);
      }
    }
    default:
      return state
  }
}

const store= configureStore({reducer: {cart: cartReducer}})
export default store;