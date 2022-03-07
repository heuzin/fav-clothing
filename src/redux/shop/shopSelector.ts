import { createSelector } from 'reselect';

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollectionsForPreview = createSelector([selectCollections], (collections) =>
    collections ? Object.keys(collections).map((key: any) => collections[key]) : [],
);

export const selectCollection = (collectionUrlParam: string) =>
    createSelector(selectCollections, (collections) => (collections ? collections[collectionUrlParam] : null));

export const selectCollectionFetching = createSelector([selectShop], (shop) => shop.isFetching);

export const selectIsCollectionsLoaded = createSelector([selectShop], (shop) => !!shop.collections);
