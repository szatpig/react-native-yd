// Created by szatpig at 2019/6/27.
import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

interface Props{}
interface State{}

class index extends Component<Props,State> {
     static defaultProps = {}
     componentDidMount(){}
     componentDidUpdate(){}
     componentWillUnmount(){}
     render() {
          return (
                 <View style={ styles.container }>
                        <Text>Welcome to React Native!</Text>
                 </View>
          )
     }
}

const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#f5f5f5',
     }
 });

export default index