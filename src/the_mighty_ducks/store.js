import { createStore } from "redux";

const initialState = {
    image: '',
    name: '',
    price: 0,
    inventory: []
};

export const UPDATE_INVENTORY = 'UPDATE_INVENTORY'
export const UPDATE_IMAGE = 'UPDATE_IMAGE'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_PRICE = 'UPDATE_PRICE'

function reducer(state = initialState, action) {
    const{type, payload} = action;
    console.log(state.inventory);
    switch(type) {
        case UPDATE_INVENTORY:
            return{
                ...state,
                inventory: payload
            };
        case UPDATE_IMAGE:
            return{
                ...state,
                image: payload
            }
        case UPDATE_NAME:
            return{
                ...state,
                name: payload
            }
        case UPDATE_PRICE:
            return{
                ...state,
                price: payload
            }
        default:
            return state;
    }
}

export default createStore(reducer);