import axios from "axios";

const initialState = {
    image: '',
    name: '',
    price: 0,
    inventory: []
}

// Action Types
export const UPDATE_INVENTORY = 'UPDATE_INVENTORY'

export function updateInventoryPost() {
    return {
        type: UPDATE_INVENTORY,
        payload: axios.get('/api/inventory')
    }
}

export default function Reducer(state = initialState, action) {
    const{type, payload} = action;
    switch(type) {
        case UPDATE_INVENTORY:
            return{
                ...state,
                image: payload.data,
                name: payload.data,
                price: payload.data,
                inventory: payload.data
            };
        default:
            return state;
    }
}