import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { textSytle, buttonStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textSytle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textSytle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    /*buttonStyle: {
        flex: 1,
        alignSelf: 'flex-end'
    }*/
};

export { Button };
