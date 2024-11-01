// src/redux/CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, action) {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1; // Increase quantity if item already exists
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); // Add new item
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove item
        },
        updateQuantity(state, action) {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity; // Update item quantity
            }
        },
    },
});

// Export the actions
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
