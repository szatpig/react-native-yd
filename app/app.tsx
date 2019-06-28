// Created by szatpig at 2019/6/27.
import React from 'react'
import { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './redux'

import { Router, Scene } from 'react-native-router-flux';

import Login from './pages/auth/login'


interface Props{}
interface State{}

class App extends Component<Props,State> {
     static defaultProps = {}
     render() {
          return (
               <Provider store={ store }>
                    <Router>
                        <Scene key="root">
                            <Scene key="login"
                              component={Login}
                              hideNavBar
                              title="login"
                              initial
                            />
                        </Scene>
                    </Router>
               </Provider>
          )
     }
}

const styles = StyleSheet.create({

});

export default App