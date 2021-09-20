import { configureStore, createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';


export type ShopStateType = typeof initialShopState;

export const initialShopState = [

    {
        id: 'v1',
        title: 'Coffee, Vanilla Cappuccino',
        price: 14.20,
        description: 'If you are a fan of vanilla cappuccinos, then you are sure to be a fan of this wonderfully smooth and creamy vanilla coffee1'
    },
    {
        id: 'v2',
        title: 'Nature Valley Granola Bars',
        price: 6.27,
        description: `Nature Valley Crunchy Oats n' Honey bars are a tasty snack made with whole grain oats and a touch of honey.`
    },
    {
        id: 'v3',
        title: 'Le Sueur Whole Tender Baby Carrots',
        price: 1.54,
        description: `A gluten free food. For over 100 years, we've been cultivating vegetables in the richest and most fertile soil we can find.`
    },
    {
        id: 'v4',
        title: 'Great Value Creamy Peanut Butterd',
        price: 4.34,
        description: 'Great Value products provide families with affordable, high quality grocery and household consumable options.'
    }
]

// const productsSlice = createSlice({
//     name: 'products',
//     initialState: initialShopState,
//     reducers: {

//     }
// });

// const store = configureStore({
//     reducer: {
//         products: productsSlice.reducer,
//         cart: cartSlice.reducer
//     }
// });

// export const productActions = productsSlice.actions;

// declare module 'react-redux' {
//     interface DefaultRootState extends AppRootStateType { }
// }

export default initialShopState;



//types
// export type AppRootStateType = {
//     products: ShopStateType;
//     cart: initialCartStateType
// }

