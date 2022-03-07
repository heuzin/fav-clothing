import { firestore } from '../../firebase/firabseConfig';
import { convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';
import ShopActionTypes from './shoptTypes';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap: any) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage: any) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
    return (dispatch: any) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        console.log(process.env.REACT_APP_API_KEY);
        collectionRef
            .get()
            .then((snapshot) => {
                const collectionsMaps = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMaps));
            })
            .catch((error: any) => dispatch(fetchCollectionsFailure(error.message)));
    };
};
