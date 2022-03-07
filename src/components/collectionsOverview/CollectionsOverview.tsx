import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';
import CollectionPreview from '../collectionPreview/CollectionPreview';
import styles from './CollectionsOverview.module.scss';

const CollectionsOverview = ({ collections }: any) => (
    <div className={styles.collectionsOveview}>
        {collections.map(({ id, ...collections }: any) => (
            <CollectionPreview key={id} {...collections} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
