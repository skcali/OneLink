import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ImageSelect from './ImageSelect';

class HomePage extends Component {
    static navigationOptions = {
        title: 'Select Image Method'
    };

    render() {
        const { navigation } = this.props;
        const { mainContainer, logoContainer } = styles;
        
        return (
            <View style={mainContainer}>
                <Text style={logoContainer}>Take or select a picture!</Text>
                <ImageSelect navigation={navigation} />
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center' 
    }
};

export default HomePage;
