import styles from './CartItem.module.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }: any) => (
    <div className={styles.cartItem}>
        <img src={imageUrl} alt="item" />
        <div className={styles.itemDetails}>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>
                {quantity} X ${price}
            </span>
        </div>
    </div>
);

export default CartItem;
