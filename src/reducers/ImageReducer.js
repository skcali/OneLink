import {
    DO_OCR,
    FETCH_OCR,
    CANCEL_OCR,
} from '../actions/types';

const INITIAL_STATE = {
    isLoading: false,
    result: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DO_OCR:
            return { ...state, isLoading: true };
        case FETCH_OCR:
            return { ...state, isLoading: false, result: action.payload };
        default:
            return state;
    }
};
