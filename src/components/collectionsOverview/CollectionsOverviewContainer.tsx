import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetching } from '../../redux/shop/shopSelector';
import WithSpinner from '../withSpinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching,
});

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;
