import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AdMobBanner } from 'react-native-admob';
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
                <AdMobBanner
                adSize='banner'
                adUnitID='ca-app-pub-3940256099942544/6300978111'
            />
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    /*logoContainer: {
        flex: 1,
    },*/
};

export default HomePage;
