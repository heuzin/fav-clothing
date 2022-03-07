import { UserActionTypes } from './userTypes';

const INITIAL_STATE = {
    currentUser: null,
};

type Action = { type: typeof UserActionTypes.SET_CURRENT_USER; payload: any };

const userReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
