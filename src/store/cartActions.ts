import { cartActions, CartItemType } from './cartStore';
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from 'react';


// const cart = useSelector(state => state.cart)
const dispatch = useDispatch();

export const sendCartData = async (cart: CartType) => {

    return async (dispatch: any) => {
        dispatch(
          cartActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!',
          })
        );

    const sendRequest = () => {
    const response = await fetch(
        'https://the-food-order-app-a37b2-default-rtdb.firebaseio.com/cart.json',
        {
            method: 'PUT',
            body: JSON.stringify({
                items: cart.items,
                totalQuantity: cart.totalQuantity
            })
        }
    );

    if (!response.ok) {
        throw new Error ('Sending cart data failed')
    };
}
try {
     await sendCartData(cart);

    dispatch (
        cartActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
        })
    )
} catch (error) {
    dispatch (
        cartActions.showNotification({
            status: 'Error',
            title: 'Error!',
            message: 'Sending cart data failed',
        })
    )
    }
    }
//types
type CartType = {

        items: CartItemType[],
        totalQuantity: number,
    }




