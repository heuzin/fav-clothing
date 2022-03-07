import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import CartItem from '../carItem/CartItem';
import CustomButom from '../customButtom/CustomButtom';
import styles from './CartDropdown.module.scss';

const CartDropdown = ({ cartItems, history, dispatch }: any) => (
    <div className={styles.cartDropdown}>
        <div className={styles.cartItems}>
            {cartItems.length ? (
                cartItems.map((cartItem: any) => <CartItem key={cartItem.id} item={cartItem} />)
            ) : (
                <span className={styles.emptyMessage}>You cart is empty</span>
            )}
        </div>
        <CustomButom
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CustomButom>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
