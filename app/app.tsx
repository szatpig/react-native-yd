// Created by szatpig at 2019/6/27.
'user strict'

import React from 'react'
import { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './redux'

import { Router } from 'react-native-router-flux';
import scenes from './router'

interface Props{}
interface State{}

class App extends Component<Props,State> {
     static defaultProps = {}
     render() {
          return (
               <Provider store={ store }>
                    <Router scenes={ scenes } backAndroidHandler={ e => console.log(e) } />
               </Provider>
          )
     }
}

const styles = StyleSheet.create({

});

export default App