import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import CollectionsOverviewContainer from '../../components/collectionsOverview/CollectionsOverviewContainer';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import CollectionPageContainer from '../collectionPage/CollectionPageContainer';

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync }: any = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match }: any = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
