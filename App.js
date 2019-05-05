import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native'
import { createStackNavigator,createAppContainer, createBottomTabNavigator } from 'react-navigation'
import One from './src/one/one'
import Two from './src/two/two'
import OneDetails from './src/one/oneDetails'
import  {Images} from "./src/images";
import {Provider} from 'mobx-react';
// 获取store实例
import store from './src/Mobx/Store';

const OneStack = createStackNavigator({
    Mine: { screen: One },
});

const TwoStack = createStackNavigator({
    Mine: { screen: Two },
});

const Tab = createBottomTabNavigator(
    {
        One: {
            screen: OneStack,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ?  Images.Tab.OneActive : Images.Tab.One}
                        style={{ width: 25, height: 25 }}
                    />
                )
            }
        },
        Two: {
            screen: TwoStack,
            navigationOptions: {
                headerTitle: "首页Header",
                tabBarLabel: '安卓',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ?  Images.Tab.TwoActive : Images.Tab.Two}
                        style={{ width: 25, height: 25 }}
                    />
                )
            }
        }
    },
    {
        initialRouteName: 'One',
        order: ['One','Two'],
        lazy:true,
        tabBarOptions: {
            activeTintColor: 'red',
            activeBackgroundColor: 'white',
            inactiveTintColor: 'black',
            inactiveBackgroundColor: 'white',
            style: {
                backgroundColor: 'white',
            },
            labelStyle: {
                paddingBottom: -5,
                fontSize: 14,
            }
        }
    }
)
const SignedOutNavigator = createStackNavigator(
    {
        Tab:{
            screen:Tab,
            navigationOptions:{
                header:null
            }
        },
        OneDetails:{
            screen:OneDetails
        }

    }

);


const AppContainer = createAppContainer(SignedOutNavigator);


export default class FooterTabsExample extends Component {
    render() {
        return (
            <Provider rootStore={store}>
              <AppContainer/>
            </Provider>

        )
    }
}
