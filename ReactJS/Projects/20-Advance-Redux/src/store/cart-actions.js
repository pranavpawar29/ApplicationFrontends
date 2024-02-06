import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export function fetchCartData() {
    return async dispatch => {
        async function fetchData(){
            const response = await fetch("https://react-project-59a16-default-rtdb.firebaseio.com/cart.json");
            if(!response.ok){
                throw new Error('Could not fetch cart data!');
            }
            const resData = await response.json();
            return resData;
        }

        try {
            const data = await fetchData();
            dispatch(cartActions.replaceCart({
                items: data.items || [],
                totalQuantity: data.totalQuantity
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error",
                message: "Fetching cart data failed"
            }))
        }
    }
}


export function sendCartData(cart) {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: "pending",
            title: "Sending....",
            message: "Sending cart data"
        }));

        async function sendRequest() {
            const response = await fetch("https://react-project-59a16-default-rtdb.firebaseio.com/cart.json", {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            });
            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }
        }

        try {
            await sendRequest();
            //const resData = await response.json();
            dispatch(uiActions.showNotification({
                status: "success",
                title: "Success....",
                message: "Sent cart data Successfully"
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Error",
                message: "Sending cart data failed"
            }))
        }
    }
}