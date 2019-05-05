/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { observer, inject } from 'mobx-react'
import { action, autorun, computed } from 'mobx'

@inject('rootStore')
@observer
export default class One extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '首页',
        headerStyle:{backgroundColor:'red'},
        headerTintColor: 'white',
    })

    render() {
        return (
                <View style={styles.container}>
                    <Text onPress={()=>this.add()}>
                        + 红
                    </Text>
                    <Text>
                        One {this.dataSource}
                    </Text>
                    <Text onPress={()=>this.sub()}>
                        - 蓝
                    </Text>
                    <Text style={styles.instructions} onPress={()=>this.pushAction()}>push</Text>

                </View>
        );
    }

    @computed get dataSource() {
        return this.props.rootStore.OneInfo.allDatas.oneNum;
    }

    /**
     * +
     * */
    @action
    add() {
        this.props.rootStore.OneInfo.add(this.dataSource)
    }


    /**
     * -
     * */
    @action
    sub() {
        this.props.rootStore.OneInfo.sub(this.dataSource)
    }



    pushAction =() =>{
        this.props.navigation.navigate('OneDetails', { name: 'XXX' ,age:25})
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
