import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }: any) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51JuRcQCuVMCcMYknQ65siKpY0DS0UCbQQS2upIDH19aQtBHP37xOvBCwfwWah5454Q5rPy9Gj3jUNKS58m5vwWuj00HdjPozoP';

    const onToken = (token: any) => {
        console.log(token);
        alert('Payment successfull');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            allowRememberMe
            image="https://svgshare.com/i/CUz.svg"
            description={`Your totla is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
