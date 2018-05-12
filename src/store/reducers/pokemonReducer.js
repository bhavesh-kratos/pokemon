import {
    IMAGE_FETCH_REQUEST,
    IMAGE_FETCH_SUCCESS,
    IMAGE_FETCH_FAIL
} from '../../actions/actionTypes';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGE_FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case IMAGE_FETCH_SUCCESS:
            console.log("action", action)
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case IMAGE_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
