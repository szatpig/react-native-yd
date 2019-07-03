// Created by szatpig at 2019/7/2.
import { StyleSheet } from 'react-native';
import device from './../utils/device'
import px2dp from './../utils/adapter'

console.log('navStatusBarHeight:'+ device.navStatusBarHeight)

export default StyleSheet.create({
  navStatusBarHeight:{
       paddingTop:device.navStatusBarHeight,
  },
  navContentHeight:{
       paddingTop:device.navContentHeight,
  },
  flex:{
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent:'center',
      alignItems:'center',
  },
  flexCell:{
      flexDirection: 'column',
      flexWrap:'nowrap',
      justifyContent:'flex-start',
      alignItems:'center',
  }
});