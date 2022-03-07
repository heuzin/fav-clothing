import { connect } from 'react-redux';
import CollectionItem from '../../components/collectionItem/CollectionItem';
import { selectCollection } from '../../redux/shop/shopSelector';
import styles from './CollectionPage.module.scss';

const CollectionPage = ({ collection }: any) => {
    const { title, items } = collection;
    return (
        <div className={styles.collectionPage}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.items}>
                {items.map((item: any) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
