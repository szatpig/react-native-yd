// Created by szatpig at 2019/7/2.
'user strict'

import { Dimensions, Platform } from 'react-native'
// import DeviceInfo from 'react-native-device-info'
export default device = {
    // 设备宽度
    deviceWidth: Dimensions.get('window').width,
    // 设备高度
    deviceHeight: Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height - 24,
    isIphoneX: Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812,
    // 导航栏的高度
    navHeight: Platform.OS === 'ios' ? (this.isIphoneX ? 88 : 64) : 56,
    // 导航栏顶部的状态栏高度
    navStatusBarHeight: Platform.OS === 'ios' ? (this.isIphoneX ? 44 : 20) : 0,
    // 导航栏除掉状态栏的高度
    navContentHeight: Platform.OS === 'ios' ? 44 : 56,
    // 设备系统
    deviceOS: Platform.OS,
    // 当前config: debug \ release
    mode: __DEV__ ? 'xdebug' : 'release'
}