// Created by szatpig at 2019/7/3.
import React from 'react'
import { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar } from 'react-native';

import {Actions} from 'react-native-router-flux'
import px2dp from './../../utils/adapter'
import common from './../../styles/common.style'

interface Props{}
interface State{}

class Drawer extends Component<Props,State> {
     static defaultProps = {}
     _drawerClose = () => {
         Actions.drawerClose();
         StatusBar.setBarStyle('light-content')
     }
     render() {
          return (
              <SafeAreaView style={ [styles.container,common.navContentHeight] }>
                  <View style={[]}>
                      <Text>
                        Drawer 容器
                      </Text>
                      <Text>
                        可以通过 redux 来定制内部的内容 实现淘宝的侧边栏分类动态更换
                      </Text>
                      <Text>
                        有时间我会抽离我自己写的 通过 Redux 控制内容的 demo
                      </Text>
                       {/*在Drawer内关闭自己*/}
                      <Button onPress={ this._drawerClose } title={'Close me'}/>
                  </View>
              </SafeAreaView>
          )
     }
}

const styles = StyleSheet.create({
  container:{
     flex:1,
     width:'100%',
     backgroundColor:'#F5F7FA',
     paddingHorizontal:px2dp(32),
  }
});

export default Drawer