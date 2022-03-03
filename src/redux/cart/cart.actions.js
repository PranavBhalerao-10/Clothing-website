import cardActionTypes from "./cart.types"

export const toggleCartHidden = () => ({
    type: cardActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: cardActionTypes.ADD_ITEM,
    payload: item
})
export const removeItem = (item) => ({
    type: cardActionTypes.REMOVE_ITEM,
    payload: item
})
export const clearItemFromCart = item => ({
    type: cardActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})


