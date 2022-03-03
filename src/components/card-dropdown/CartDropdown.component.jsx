import React from 'react'
import CustomButton from '../CustomButton/CustomButton.component'
import './CartDropdown.styles.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem.component'
import { selectCartItem } from '../../redux/cart/card.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ? (
                        cartItems.map(cartItem =>
                            <CartItem item={cartItem} key={cartItem.id} />)
                    ) : (
                        <span className='empty-message'>Your Cart Is Empty</span>)
                }
            </div>
            <CustomButton onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden()) }}>Go To Checkout</CustomButton>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));