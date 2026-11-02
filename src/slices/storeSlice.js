import {z} from "zod";
import {createSlice} from "@reduxjs/toolkit";

export const storeItemSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    stock: z.number(),
    type: z.string(),
    ageRating: z.string(),
    imageContent: z.object({
        relativeUrl: z.string(),
        altText: z.string()
    }),
    subscriptionDuration: z.int().optional() // Used if item is a subscription
});
export const initialState = {
    items: []
}

export const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        }
    }
});
export const {addItem, removeItem} = storeSlice.actions;
export default storeSlice.reducer;