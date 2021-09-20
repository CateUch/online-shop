import { configureStore, createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';
import initialShopState, { ShopStateType } from '.';


const initialState: initialStateType = {
    products: initialShopState,
    cart: {
        items: [],
        totalQuantity: 0
    },
    showCart: false
};

export const shopSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {
        toggleShowCart(state) {
            if (state.cart.items.length > 0) {
                state.showCart = !state.showCart
            }
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cart.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
            } else {
                state.cart.items.push(
                    {
                        id: newItem.id,
                        title: newItem.title,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price,
                    })
            }
            state.cart.totalQuantity++
        },
        increment(state, action) {
            const existingCartItemIndex = state.cart.items.findIndex(
                (item) => item.id === action.payload
            );
            const existingCartItem = state.cart.items[existingCartItemIndex];
            if (existingCartItem) {
                existingCartItem.quantity++;
                existingCartItem.totalPrice = existingCartItem.totalPrice + existingCartItem.price;
            };
            state.cart.totalQuantity++
        },
        decrement(state, action) {
            const existingCartItemIndex = state.cart.items.findIndex(
                (item) => item.id === action.payload
            );
            const existingItem = state.cart.items[existingCartItemIndex];
            if (existingItem.quantity === 1) {
                state.cart.items = state.cart.items.filter(item => item.id !== action.payload);
            } else {
                existingItem.quantity--;
            }
            state.cart.totalQuantity--
        },
        remove(state, action) {
            const existingCartItemIndex = state.cart.items.findIndex(
                (item) => item.id === action.payload
            );
            const existingItem = state.cart.items[existingCartItemIndex];
            state.cart.items = state.cart.items.filter(item => item.id !== action.payload);
            state.cart.totalQuantity=state.cart.totalQuantity-existingItem.quantity
        }
    }
})

const store = configureStore({
    reducer: shopSlice.reducer
});

export const cartActions = shopSlice.actions;

declare module 'react-redux' {
    interface DefaultRootState extends initialStateType { }
}

export default store;


//types
// export type ShopStateType = typeof initialState;

export type initialStateType = {
    products: ShopStateType,
    cart: {
        items: CartItemType[],
        totalQuantity: number
    },
    showCart: boolean
}


type CartItemType = {
    id: string,
    title: string,
    price: number,
    quantity: number,
    totalPrice: number,
}
type StateItemType = {
    id: string,
    title: string,
    price: number,
    description: string,
}


//@ts-ignore
window.store = store;

