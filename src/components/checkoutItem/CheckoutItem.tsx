import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cartActions';
import styles from './CheckoutItem.module.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }: any) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className={styles.checkoutItem}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt="item" />
            </div>
            <span className={styles.name}>{name}</span>
            <span className={styles.quantity}>
                <div className={styles.arrow} onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className={styles.value}>{quantity}</span>
                <div className={styles.arrow} onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className={styles.price}>{price}</span>
            <div className={styles.removeButton} onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clearItem: (item: any) => dispatch(clearItemFromCart(item)),
    addItem: (item: any) => dispatch(addItem(item)),
    removeItem: (item: any) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
