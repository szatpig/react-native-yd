// Created by szatpig at 2019/6/28.
import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Actions } from 'react-native-router-flux';

interface Props{}
interface State{}

class login extends Component<Props,State> {
     static defaultProps = {}
     componentDidMount(){}
     componentDidUpdate(){}
     componentWillUnmount(){}
     render() {
          return (
              <View style={ styles.container }>
                      <Text>Welcome to login pages!</Text>
                      <Text
                              style={styles.welcome}
                              onPress={() => Actions.login()}  >
                              login
                      </Text>
               </View>
          )
     }
}

const styles = StyleSheet.create({ });

export default login