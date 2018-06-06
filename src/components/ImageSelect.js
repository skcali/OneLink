import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Button } from './common';
import { doOCR } from '../actions';

const options = {
    maxHeight: 2000,
    maxWidth: 2000,
    quality: 1.0,
    storageOptions: {
        skipBackup: true
    }
};

class ImageSelect extends Component {
    takePicture() {
        const { navigation } = this.props;

        navigation.navigate('Loading');

        ImagePicker.launchCamera(options, (response) => {
            const { didCancel, error, path } = response;

            if (didCancel || error) {
                //this.props.cancelOCR();
            } else {
                this.props.doOCR({ path, navigation });
                //const source = (Platform.OS === 'android') ? { uri: response.uri, isStatic: true } : { uri: response.uri.replace('file://', ''), isStatic: true };
            }
        });
    }

    /*selectPicutre() {
        this.setState({ isLoading: true });

        ImagePicker.launchImageLibrary(options, (response) => {
            console.log(response);
            if (response.didCancel || response.error) {
                //this.props.cancelOCR();
                this.setState({ isLoading: false });
            } else {
                const source = (Platform.OS === 'android') ? { uri: response.uri, isStatic: true } : { uri: response.uri.replace('file://', ''), isStatic: true };
                this.setState({ imgSource: source }, this.props.doOcr(response.path));
            }
        });
    }*/

    render() {
        const { buttonContainer } = styles;

        return (
            <View style={buttonContainer}>
                <Button onPress={this.takePicture.bind(this)}>
                    Take Picture
                </Button>

                <Button>
                    From Gallery
                </Button>
            </View>
        );
    }
}

const styles = {
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
    }
};

const mapStateToProps = (state) => {
    const { isLoading, result } = state;

    return { isLoading, result };
};

export default connect(mapStateToProps, { doOCR })(ImageSelect);
