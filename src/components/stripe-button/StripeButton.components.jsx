import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KaZBQSIimioDvRPbwGxaoRBM3gdb9OfnsdieIOuGfQwEmedr5Jwqazwoo49soyhIYtnIgjwLEz26IZGwy8rupGh00X50qS8Fy'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label="PAY NOW"
            shippingAddress
            billingAddress
            token={onToken}
            name='Clothing Store'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            stripeKey={publishableKey}
            panelLabel='PAY NOW'
        />
    )
}

export default StripeButton;