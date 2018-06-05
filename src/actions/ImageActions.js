import RNTesseractOcr from 'react-native-tesseract-ocr';
import { 
    DO_OCR, 
    FETCH_OCR,
    CANCEL_OCR,
} from './types';

const tessOptions = {
    whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890/:@.()?+#-=!$&%_',
    blacklist: '[]{}*|<>^~`\'",;'
};

export const doOCR = ({ path, navigation }) => {
    return (dispatch) => {
        dispatch({ type: DO_OCR });

        RNTesseractOcr.recognize(path, 'LANG_ENGLISH', tessOptions)
        .then((result) => {
            fetchOCR(dispatch, result, navigation);
        })
        .catch((err) => {
            console.log('OCR Error: ', err);
        })
        .done();
    };
};

export const fetchOCR = (dispatch, result, navigation) => {
    dispatch({
        type: FETCH_OCR,
        payload: result
    });

    navigation.navigate('Result');
};

export const cancelOCR = () => {
    RNTesseractOcr.stop()
        .then((result) => {
            console.log('OCR Cancellation Result: ', result);
        })
        .catch((err) => {
            console.log('OCR Cancellation Error: ', err);
        })
        .done();
};
