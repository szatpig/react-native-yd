// Created by szatpig at 2019/7/3.
'user strict'

import React from 'react'
import { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, StatusBar, Image, TouchableOpacity } from 'react-native';

import {Actions} from 'react-native-router-flux'
import px2dp from './../../utils/adapter'
import common from './../../styles/common.style'

import Icon from 'react-native-vector-icons/AntDesign';
import Iconf from 'react-native-vector-icons/SimpleLineIcons';

interface Props{

}
interface State{
	switchOpen:boolean
}

const IconComp = () => {
     return <Icon name="close" size={ 28 } color="black" />
};

const SwitchComp = (props) => {
     return <Image style={ styles.switchImg }  source={ props.open ? require('./../../images/open.png') : require('./../../images/close.png') } />
}

class Drawer extends Component<Props,State> {
     constructor(props:Props){
		super(props);
		this.state = {
		    switchOpen: false,
		};
     }
     _drawerClose = () => {
         Actions.drawerClose();
         StatusBar.setBarStyle('light-content')
     }
     _handleSwitch = () => {
         this.setState({
            switchOpen:!this.state.switchOpen
         })
     }
     render() {
          const { switchOpen } = this.state;
          return (
              <TouchableOpacity style={ [styles.container,common.navContentHeight] }>
                  <View style={styles.wrapper}>
                      <View style={[common.flex,styles.drawerHead]}>
                            <Image style={ styles.drawerImg }  source={ require('./../../images/head.png') } />
                            <View style={ styles.drawerText }>
                                <Text style={ styles.drawerName }>123456789</Text>
                                <Text style={ styles.drawerIntro }>意电助理工作中…</Text>
                            </View>
                      </View>
                      <TouchableOpacity style={ styles.drawerClose } onPress={ this._drawerClose }>
                           <Icon name="close" color='black' size={ 28 }  />
                      </TouchableOpacity>
                  </View>
                  <View style={ styles.wrapperCells }>
                       <View style={ [common.flexRowBetween,styles.wrapperCell] }>
                           <View style={ common.flexRow }>
                               <Image style={ common.flexRowImg }  source={ require('./../../images/sec-call.png') } />
                               <View style={ common.flexColumn }>
                                  <Text style={ common.flexColumnTxtOne }>二次呼叫放行</Text>
                                  <Text style={ common.flexColumnTxtTwo }>再次拨入的电话将不再拦截</Text>
                               </View>
                           </View>
                           <TouchableOpacity
                                 style={ [common.flexRowViewRight,{ paddingRight:px2dp(24) }] }
                                 onPress={ this._handleSwitch }>
                                 <SwitchComp open={ switchOpen } />
                           </TouchableOpacity>
                           <View style={ common.line }></View>
                       </View>
                       <View style={[common.flexRowBetween,styles.wrapperCell,{ paddingBottom:px2dp(50) }] }>
						   <View style={ common.flexRow }>
                               <Image style={ common.flexRowImg }  source={ require('./../../images/clock.png') } />
                               <Text style={ common.flexColumnTxtOne }>推送设置</Text>
                           </View>
                           <TouchableOpacity style={ common.flexRowViewRight }  onPress={ this._drawerClose }>
                                 <Iconf name="arrow-right" style={ common.icon }  />
                           </TouchableOpacity>
                           <View style={ [common.line,{ height:px2dp(18),left:0 }] }></View>
                       </View>
					   <View style={ [common.flexRowBetween,styles.wrapperCell] }>
                           <View style={ common.flexRow }>
                               <Image style={ common.flexRowImg }  source={ require('./../../images/message.png') } />
                               <Text style={ common.flexColumnTxtOne }>消息中心</Text>
                           </View>
                           <TouchableOpacity style={ common.flexRowViewRight }  onPress={ this._drawerClose }>
                                 <Iconf name="arrow-right" style={ common.icon }  />
                           </TouchableOpacity>
                           <View style={ common.line }></View>
                       </View>
					   <View style={ [common.flexRowBetween,styles.wrapperCell] }>
                           <View style={ common.flexRow }>
                              <Image style={ common.flexRowImg }  source={ require('./../../images/help.png') } />
                              <Text style={ common.flexColumnTxtOne }>帮助与反馈</Text>
                           </View>
                           <TouchableOpacity style={ common.flexRowViewRight }  onPress={ this._drawerClose }>
                                <Iconf name="arrow-right" style={ common.icon }  />
                           </TouchableOpacity>
                           <View style={ common.line }></View>
                       </View>
                       <View style={[common.flexRowBetween,styles.wrapperCell,{ paddingBottom:px2dp(50) }] }>
						   <View style={ common.flexRow }>
                               <Image style={ common.flexRowImg }  source={ require('./../../images/about.png') } />
                               <Text style={ common.flexColumnTxtOne }>帮助与反馈</Text>
                           </View>
                           <TouchableOpacity style={ common.flexRowViewRight }  onPress={ this._drawerClose }>
                                 <Iconf name="arrow-right" style={ common.icon }  />
                           </TouchableOpacity>
                           <View style={ [common.line,{ height:px2dp(18),left:0 }] }></View>
                       </View>
					   <View style={ [common.flexRowBetween,styles.wrapperCell] }>
                           <View style={ common.flexRow }>
                              <Image style={ common.flexRowImg }  source={ require('./../../images/out.png') } />
                              <Text style={ common.flexColumnTxtOne }>退出登录</Text>
                           </View>
                       </View>
                  </View>
              </TouchableOpacity>
          )
     }
}

const styles = StyleSheet.create({
  container:{
     flex:1,
//     justifyContent:'space-between',
     width:'100%',
     backgroundColor:'#F5F7FA',
  },
  wrapper:{
       flexDirection: 'column',
       flexWrap:'nowrap',
       justifyContent:'space-between',
       alignItems:'flex-start',
       position:'relative',
       paddingHorizontal:px2dp(32),
       paddingBottom:px2dp(56)
  },
  drawerHead:{
      justifyContent:'flex-start',
      height:px2dp(125)
  },
  drawerImg:{
      width:px2dp(125),
      height:px2dp(125),
  },
  drawerText:{
      flex:1,
      flexDirection: 'column',
      flexWrap:'nowrap',
      justifyContent:'space-around',
      height:px2dp(116),
      marginLeft:px2dp(24)
  },
  drawerName:{
      color:'#303133',
      fontSize:18
  },
  drawerIntro:{
     color:'#909399',
     fontSize:14
  },
  drawerClose:{
     position:'absolute',
     top:px2dp(8),
     right:px2dp(32)
  },
  wrapperCells:{
     flex:1,
     width:'100%',
     height:px2dp(500),
     backgroundColor:'#fff'
  },
  wrapperCell:{
     backgroundColor:'#fff',
     padding:px2dp(32),
     position:'relative'
  }
});

export default Drawer