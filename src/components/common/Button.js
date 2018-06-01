import React from 'react';
import { Text, TouchableOpactiy } from 'react-native';

const Button = ({ children }) => {
    const { textSytle, buttonStyle } = styles;

    return (
        <TouchableOpactiy style={buttonStyle}>
            <Text style={textSytle}>
                {children}
            </Text>
        </TouchableOpactiy>
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
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
    }
};

export { Button };
