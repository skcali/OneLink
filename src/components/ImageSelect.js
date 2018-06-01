import React, { Component } from 'react';
import {
    //ActivityIndicator,
    //Image,
    Platform,
    PixelRatio,
    StyleSheet,
    //Text,
    View
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNTesseractOcr from 'react-native-tesseract-ocr';
import { Button } from './common';

const options = {
    maxHeight: 2000,
    maxWidth: 2000,
    quality: 1.0,
    storageOptions: {
        skipBackup: true
    }
};

const tessOptions = {
    whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890/:@.()?+#-=!$&%_',
    blacklist: '[]{}*|<>^~`\'",;'
};

class ImageSelect extends Component {
    static navigationOptions = {
        title: 'Select Image Method'
    };
    state = { isLoading: false, imgSource: null, ocrResult: null };

    selectPhoto() {
        this.setState({ isLoading: true });
        ImagePicker.launchCamera(options, (response) => {
            console.log(response);
            if (response.didCancel || response.error) {
                this.setState({ isLoading: false });
            } else {
                const source = (Platform.OS === 'android') ? { uri: response.uri, isStatic: true } : { uri: response.uri.replace('file://', ''), isStatic: true };
                this.setState({ imgSource: source }, this.doOcr(response.path));
            }
        });
    }

    doOcr(path) {
        console.log('here2');
        RNTesseractOcr.recognize(path, 'LANG_ENGLISH', tessOptions)
            .then((result) => {
                this.setState({ isLoading: false, ocrResult: result });
                console.log('OCR Result: ', result);
            })
            .catch((err) => {
                console.log('OCR Error: ', err);
            })
            .done();
    }

    cancelOcr() {
        RNTesseractOcr.stop()
            .then((result) => {
                console.log('OCR Cancellation Result: ', result);
            })
            .catch((err) => {
                console.log('OCR Cancellation Error: ', err);
            })
            .done();
    }

    render() {
        const { buttonContainer } = styles;

        return (
            <View style={buttonContainer}>
                    <Button>
                        Take Picture
                    </Button>

                    <Button>
                        From Gallery
                    </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        height: 50
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    img: {
        width: 150,
        height: 150
    },
    round: {
        borderRadius: 75,
    }
});

export default ImageSelect;

/*
<Button onPress={this.selectPhoto.bind(this)} >
                    <View style={[styles.img, styles.imgContainer, this.state.imgSource === null && styles.round]}>
                        {this.state.imgSource === null ?
                            <Text>Tap me!</Text>
                            :
                            <Image style={styles.img} source={this.state.imgSource} />
                        }
                    </View>
                </Button>
                <Image style={styles.img} source={this.state.imgSource} />
                {(this.state.isLoading) ?
                    <ActivityIndicator
                        animating={this.state.isLoading}
                        size="large"
                    />
                    :
                    null
                }
                <Text>{this.state.ocrResult}</Text>

                <Button onPress={() => { this.cancelOcr(); }} >
                    <View style={[styles.img]}>
                        <Text>Cancel recognition</Text>
                    </View>
                </Button>*/

