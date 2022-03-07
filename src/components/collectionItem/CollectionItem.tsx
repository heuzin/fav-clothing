import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addItem } from '../../redux/cart/cartActions';
import CustomButom from '../customButtom/CustomButtom';
import styles from './CollectionItem.module.scss';

const CollectionItem = ({ item, addItem }: any) => {
    const { name, price, imageUrl } = item;
    return (
        <div className={styles.collectionItem}>
            <div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className={styles.collectionFooter}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>{price}</span>
            </div>
            <div className={styles.customButton}>
                <CustomButom onClick={() => addItem(item)} inverted>
                    Add to cart
                </CustomButom>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addItem: (item: any) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
