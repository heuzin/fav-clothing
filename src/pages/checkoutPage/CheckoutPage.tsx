import styles from './CheckoutPage.module.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/stripeCheckoutButton/StripeCheckoutButton';

const CheckoutPage = ({ cartItems, total }: any) => (
    <div className={styles.checkoutPage}>
        <div className={styles.checkoutHeader}>
            <div className={styles.headerBlock}>
                <span>Product</span>
            </div>
            <div className={styles.headerBlock}>
                <span>Description</span>
            </div>
            <div className={styles.headerBlock}>
                <span>Quantity</span>
            </div>
            <div className={styles.headerBlock}>
                <span>Price</span>
            </div>
            <div className={styles.headerBlock}>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map((cartItem: any) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className={styles.total}>
            <span>TOTAL: ${total}</span>
        </div>
        <div className={styles.testWarning}>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: Any future date - CW: Any 3 digits
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
