import { createStructuredSelector } from 'reselect';
import { selectCartItem, selectCartTotal } from '../../redux/cart/card.selectors';
import './Checkoutpage.styles.scss'
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component';
import StripeButton from '../../components/stripe-button/StripeButton.components';

const Checkoutpage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
            *Please use the following test Card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/26 - CVV: 123
        </div>
        <StripeButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkoutpage);