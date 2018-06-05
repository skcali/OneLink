import React from 'react';
import { 
    View, 
    Text,
    ActivityIndicator 
} from 'react-native';

const Ads = () => {
    const { spinnerStyle } = styles;

    return (
        <View style={spinnerStyle}>
            <ActivityIndicator size='large' />
            <Text>Ad showing while we process the image.</Text>
        </View> 
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default Ads;
