import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const target = state.items.find((item)=>(
        item.name === action.payload.name
      ))
      if(target){
        target.quantity += 1;
      } else {
        const {name, image, cost} = action.payload
        state.items.push({name,image,cost,quantity: 1})
      }
    },
    removeItem: (state, action) => {
      const newItems = state.items.filter((item)=> (
        item.name !== action.payload.name
      ))
      state.items = newItems
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload
      const target = state.items.find((item)=> (
        item.name === name
      ))
      if(target) {
        target.quantity = quantity
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
