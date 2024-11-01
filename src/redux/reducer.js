// src/redux/reducers.js

import { ADD_TO_CART, DECREMENT_ITEM, INCREMENT_ITEM, REMOVE_FROM_CART } from './actions';

const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        case INCREMENT_ITEM:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload ? {...item, quantity: item.quantity + 1 } : item
                ),
            };
        case DECREMENT_ITEM:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload ? {...item, quantity: item.quantity - 1 } : item
                ),
            };
        default:
            return state;
    }
};

export default cartReducer;