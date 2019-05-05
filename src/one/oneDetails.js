/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class OneDetails extends Component {
    static navigationOptions = () => {
        return {
            title:'详情',
            headerStyle: {
                backgroundColor: 'blue',
                // height: 100
            }
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    传过来的参数是: {this.props.navigation.state.params.age} + {this.props.navigation.state.params.name}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
