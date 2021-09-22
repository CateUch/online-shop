import { cartActions, CartItemType } from './cartStore';


export const fetchCartData = () => {
    return async (dispatch: any) => {
        dispatch(
            cartActions.showNotification({
                status: 'pending',
                title: 'Loading database..',
                message: 'Loading database!',
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                'https://the-food-order-app-a37b2-default-rtdb.firebaseio.com/cart.json',
            );

            if (!response.ok) {
                throw new Error('Server data is not accesssible')
            };

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await sendRequest();

            dispatch (
                cartActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Successfully loaded!',
                })
            )

            dispatch(
                cartActions.replaceCartData({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                })
            )
        } catch (error) {
            dispatch(
                cartActions.showNotification({
                    status: 'Error',
                    title: 'Error!',
                    message: 'Loading is failed',
                })
            )
        }
    }
}






export const sendCartData = (cart: CartType) => {
    return async (dispatch: any) => {
        dispatch(
            cartActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );

        const sendRequest = async () => {
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
                throw new Error('Sending cart data failed')
            };


        }
        try {
            await sendRequest();

            dispatch(
                cartActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            )
        } catch (error) {
            dispatch(
                cartActions.showNotification({
                    status: 'Error',
                    title: 'Error!',
                    message: 'Sending cart data failed',
                })
            )
        }
    }
}
//types
type CartType = {

    items: CartItemType[],
    totalQuantity: number,
}




