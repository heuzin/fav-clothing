import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/withSpinner/WithSpinner';
import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelector';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;
