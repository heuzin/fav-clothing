import styles from './CartIcon.module.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { Dispatch } from 'redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }: any) => (
    <div className={styles.cartIcon} onClick={toggleCartHidden}>
        <ShoppingIcon className={styles.shoppingIcon} />
        <span className={styles.itemCount}>{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
