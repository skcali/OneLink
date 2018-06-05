import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

class Results extends Component {

    render() {
        return (
            <Text>{this.props.result}</Text>
        );
    }   
}

const mapStateToProps = (state) => {
    const { isLoading, result } = state.image;

    return { isLoading, result };
};

export default connect(mapStateToProps, {})(Results);
//export default Results;
