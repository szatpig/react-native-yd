// Created by szatpig at 2019/7/1.
'user strict'

import React from 'react'
import { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, TouchableWithoutFeedback, ImageBackground, Image, Alert} from 'react-native';

import { Actions } from 'react-native-router-flux';

import common from './../../styles/common.style'
import px2dp from './../../utils/adapter'

import Iconf from 'react-native-vector-icons/SimpleLineIcons';

interface Props{}
interface State{
    translateStatus:boolean,
    switchSoundCalled:boolean
}

const SwitchComp = (props) => {
     return <Image style={ styles.switchImg }  source={ props.open ? require('./../../images/open.png') : require('./../../images/close.png') } />
}

class Home extends Component<Props,State> {
     state = {
          translateStatus:false,
          switchSoundCalled:false,
     }
     static defaultProps = {}
     componentDidMount(){}
     componentDidUpdate(){
          console.log(Actions);
     }
     componentWillUnmount(){}
     _openDrawer = (e) => {
          Actions.drawerOpen();
          StatusBar.setBarStyle('dark-content');
     }
     _handleSwitch = keyName => {
         console.log(keyName);
         this.setState({
              [keyName]: !this.state[keyName]
         })
     }
     _handleOpen = e =>{
         this.setState({
               switchSoundCalled : !this.state.switchSoundCalled
         })
     }
     _onPressButton() {
         Alert.alert('You tapped the button!')
     }
     render() {
          console.log('这是真的吗' + this.state.translateStatus)
          const { translateStatus,switchSoundCalled } = this.state
          return (
              <ScrollView style = { styles.scroll }>
                  <View style={ [styles.container,common.navStatusBarHeight] }>
                       <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)"></StatusBar>
                       <ImageBackground  style={ styles.imgBackground } source={ require('./../../images/home.png') } ></ImageBackground>
                       <TouchableOpacity style={ styles.settingTouch }  onPress={ this._openDrawer }>
                           <Image
                              style={ styles.setting }
                              source={ require('./../../images/setting.png') } />
                       </TouchableOpacity>
                       {
                       translateStatus
                       &&
                       <View style={ styles.switchCalled }>
                            <Text style={ styles.switchCalledTxt }>无声转接</Text>
                            <TouchableOpacity style={ { width:px2dp(75),height:px2dp(42) } } onPress={ this._handleSwitch.bind(this,'switchSoundCalled') }>
	                            <SwitchComp open={ switchSoundCalled } />
                            </TouchableOpacity>
                       </View>
                       }

                       <View style={ styles.welcome }>
                           {
                               !translateStatus
                               ?
                               <View>
                                    <Text style={ styles.h1 }>Hi～欢迎使用意电助理</Text>
                                    <Text style={ styles.h4 }>赶快开启使用小意吧！</Text>
                               </View>
                               :
                               <View>
                                    <Text style={ styles.h1 }>无声转接工作中…</Text>
                                    <Text style={ styles.h4 }>APP自动拦截陌生号码，陌生号码不再响铃</Text>
                               </View>
                           }

                       </View>
                       <View style={ styles.wrap }>
                           <TouchableOpacity
                               style={ !translateStatus ? styles.button : styles.buttonActive } onPress={ this._handleSwitch.bind(this,'translateStatus') }>
                               <Text style={ !translateStatus ? styles.buttonTxt : styles.buttonActiveText }>立即{ !translateStatus ? '开启' : '关闭' }</Text>
                           </TouchableOpacity>
                           <Image
                                  style={ styles.animate }
                                  source={ !translateStatus ? require('./../../images/sleep.gif') : require('./../../images/work.gif') } />
                           <View style={ [styles.flex,common.flex] }>
                                <View style= { [styles.flexCell,,common.flexCell] }>
                                    <Image source={ require('./../../images/call.png') } />
                                    <Text style= { styles.cell }>通话记录</Text>
                                    <Text style= { styles.cellItem }>文本、录音、智能标记</Text>
                                </View>
                                <View style= { [styles.flexCell,,common.flexCell] }>
                                    <Image source={ require('./../../images/scene.png') } />
                                    <Text style= { styles.cell }>通话场景</Text>
                                    <Text style= { styles.cellItem }>2个场景未开启</Text>
                                </View>
                                <View style= { [styles.flexCell,,common.flexCell] }>
                                     <Image source={ require('./../../images/white.png') } />
                                     <Text style= { styles.cell }>白名单</Text>
                                     <Text style= { styles.cellItem }>上次同步时间:2019-04-02</Text>
                                </View>
                                <View style= { [styles.flexCell,,common.flexCell] }>
                                    <Image source={ require('./../../images/black.png') } />
                                    <Text style= { styles.cell }>黑名单</Text>
                                    <Text style= { styles.cellItem }>来电直接挂断</Text>
                                </View>
                           </View>
                       </View>
                       {
                           translateStatus
                           &&
                           <View style={ styles.voice }>
                               <View style={ [common.flex,styles.voiceTitle] }>
                                   <Text style={ styles.voiceTitleLeft }>我的助理</Text>
                                   <Text style={ styles.voiceTitleRight }>查看更多<Iconf name="arrow-right" style={ [common.icon,{ fontSize:14,marginLeft:px2dp(164) }] } /></Text>
                               </View>
                               <View style={ [styles.voiceSelected] }>
                                   <View style={ styles.voiceSelectedLeft }>
                                       <Image style={ styles.voiceHead }  source={ { uri:'https://test-assistant.ynt.ai/dev/group1/M00/00/33/rBQKyF0LOOWAaL0sAAAdSICMKZM853.png' } } />
                                       <View style={ styles.voiceText }>
                                           <Text style={ styles.voiceSelectedName }>温柔女声云云</Text>
                                           <Text style={ styles.voiceSelectedIntro }>这里来几个说明文字啥的</Text>
                                       </View>
                                   </View>
                                   <Image style={ [styles.voicePlay] } source={ require('./../../images/play.png') } />
                               </View>
                           </View>
                       }
                  </View>
              </ScrollView>
          )
     }
}

const styles = StyleSheet.create({
    scroll:{
//       backgroundColor:'#F5F7FA'
    },
    container:{
         flex: 1,
         flexDirection: 'column',
         justifyContent:'flex-start',
         alignItems:'center',
         paddingHorizontal:px2dp(32) ,
         paddingBottom:px2dp(24),
         backgroundColor: '#F5F7FA',
         position:'relative',
         margin:0,
    },
    imgBackground:{
       position:'absolute',
       left:0,
       right:0,
       top:0,
       height:px2dp(780)
    },
    settingTouch:{
           position:'absolute',
           left:px2dp(32),
           top:px2dp(80),
           backgroundColor:'transparent',
           width:px2dp(42),
           height:px2dp(42)
    },
    setting:{
    },
    switchCalled:{
       position:'absolute',
       right:px2dp(32),
       top:px2dp(80),
       backgroundColor:'transparent',
       width:px2dp(142),
       height:px2dp(42),
       flexDirection: 'row',
       flexWrap:'nowrap',
       justifyContent:'flex-end'
    },
    switchCalledTxt:{
       color:'#fff',
       fontSize:14,
       marginRight:px2dp(16)
    },
    welcome:{
        width:'100%',
        marginTop:px2dp(148),
        paddingTop:px2dp(42)
    },
    h1:{
        textAlign:'left',
        color:'#fff',
        fontSize:22
    },
    h4:{
        marginTop:px2dp(25),
        textAlign:'left',
        color:'#aabbf5',
        fontSize:14
    },
    wrap:{
        width:'100%',
        paddingTop:px2dp(160),
        textAlign:'left',
        position:'relative'
    },
    button:{
       width:px2dp(254),
       height:px2dp(80),
       borderRadius: px2dp(80),
       backgroundColor:'#fff'
    },
    buttonActive:{
       width:px2dp(254),
       height:px2dp(80),
       borderRadius: px2dp(80),
       backgroundColor:'rgba(255,255,255,0.1)',
       borderWidth:px2dp(1),
       borderColor:'#fff'
    },
    buttonTxt:{
       color:'#2E72F4',
       fontSize:16,
       textAlign:'center',
       lineHeight:px2dp(80)
    },
    buttonActiveText:{
        color:'#fff',
        fontSize:16,
        textAlign:'center',
        lineHeight:px2dp(78)
    },
    animate:{
      position:'absolute',
      right:0,
      top:px2dp(24),
      width:px2dp(314),
      height:px2dp(376)
   },
    flex:{
      width:px2dp(684),
      marginTop:px2dp(100),
      backgroundColor:'#fff',
      borderRadius:px2dp(20),
      paddingHorizontal:px2dp(56),
      paddingTop:px2dp(54),
      paddingBottom:px2dp(54)
   },
    flexCell:{
      width:'50%',
      textAlign:'center',
      marginBottom:px2dp(64)
    },
    cell:{
      marginTop:px2dp(16),
      fontSize:16
    },
    cellItem:{
       marginTop:px2dp(8),
       color:'#BFC2CC',
       fontSize:12
    },
    voice:{
       width:'100%',
       marginTop:px2dp(24),
       backgroundColor:'#fff',
       borderRadius:px2dp(20),
       borderWidth:0
    },
    voiceTitle:{
       paddingHorizontal:px2dp(24),
       borderWidth:1,
       borderColor:'#F5F7FA',
       flexWrap:'nowrap',
       justifyContent:'space-between',
    },
    voiceTitleLeft:{
       color:'#303133',
       lineHeight:px2dp(80),
       fontSize:16
    },
    voiceSelected:{
        flex:1,
        flexDirection: 'row',
        flexWrap:'nowrap',
        justifyContent:'space-between',
        alignItems:'center',
        padding:px2dp(24)
    },
    voiceSelectedLeft:{
        flex:1,
        flexDirection: 'row',
        flexWrap:'nowrap',
        justifyContent:'flex-start'
    },
    voiceText:{
        flexDirection: 'column',
        flexWrap:'nowrap',
        justifyContent:'space-between',
        marginLeft:px2dp(24)
    },
    voiceSelectedName:{
        color:'#303133',
        fontSize:16
    },
    voiceSelectedIntro:{
       color:'#BFC2CC',
       fontSize:12
    },
    voiceHead:{
        width:px2dp(80),
        height:px2dp(80),
        borderRadius:px2dp(8)
    },
    voicePlay:{
        width:px2dp(42),
        height:px2dp(42)
    }
});

export default Home