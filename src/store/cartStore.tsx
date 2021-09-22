import { configureStore, createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';
import initialShopState, { ShopStateType } from '.';


const initialState: initialStateType = {
    products: initialShopState,
    cart: {
        items: [],
        totalQuantity: 0,
        changed: false
    },
    showCart: false,
    notification: null
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
        replaceCartData(state, action) {
            state.cart.items = action.payload.items
            state.cart.totalQuantity = action.payload.totalQuantity
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
            state.cart.totalQuantity++;
            state.cart.changed = true;
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
            state.cart.totalQuantity++;
            state.cart.changed = true;
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
            state.cart.totalQuantity--;
            state.cart.changed = true;
        },
        remove(state, action) {
            const existingCartItemIndex = state.cart.items.findIndex(
                (item) => item.id === action.payload
            );
            const existingItem = state.cart.items[existingCartItemIndex];
            state.cart.items = state.cart.items.filter(item => item.id !== action.payload);
            state.cart.totalQuantity = state.cart.totalQuantity - existingItem.quantity;
            state.cart.changed = true;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    }
});

const store = configureStore({
    reducer: shopSlice.reducer
});

export const cartActions = shopSlice.actions;

declare module 'react-redux' {
    interface DefaultRootState extends initialStateType { }
};

export default store;


//types

export type initialStateType = {
    products: ShopStateType,
    cart: {
        items: CartItemType[],
        totalQuantity: number,
        changed: boolean
    },
    showCart: boolean,
    notification: {
        status: string,
        title: string,
        message: string
    } | null
};

export type CartItemType = {
    id: string,
    title: string,
    price: number,
    quantity: number,
    totalPrice: number,
}

//@ts-ignore
window.store = store;

