// Created by szatpig at 2019/7/2.
'user strict'

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
  },
  flexRowBetween:{
        flexDirection: 'row',
        flexWrap:'nowrap',
        justifyContent:'space-between',
        alignItems:'center',
    },
  flexRow:{
      flexDirection: 'row',
      flexWrap:'nowrap',
      justifyContent:'flex-start',
      alignItems:'center'
  },
  flexColumn:{
      flexDirection: 'column',
      flexWrap:'nowrap',
      justifyContent:'space-between',
      alignItems:'flex-start',

  },
  flexRowImg:{
      width:px2dp(42),
      height:px2dp(42),
      marginRight:px2dp(24)
  },
  flexRowViewRight:{
      maxWidth:px2dp(150)
  },
  flexColumnTxtOne:{
      color:'#303133',
      fontSize:18,
      maxWidth:px2dp(350)
  },
  flexColumnTxtTwo:{
      color:'#BFC2CC',
      fontSize:14,
      maxWidth:px2dp(350)
  },

  icon:{
     color:'#BFC2CC',
     fontSize:18,
     width:px2dp(40),
     marginLeft:px2dp(32)
  },
  line:{
      position:'absolute',
      left:px2dp(100),
      right:0,
      bottom:0,
      height:1,
      backgroundColor:'#F5F7FA'
  }

});