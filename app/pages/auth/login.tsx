// Created by szatpig at 2019/6/28.
import React from 'react'
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity,ImageBackground } from 'react-native';

import { Actions } from 'react-native-router-flux';

import px2dp from './../../utils/adapter'

interface Props{}
interface State{
   userName:string,
   userCode:string,
   codeTxt:string
}

class Login extends Component<Props,State> {
     static defaultProps = {}
     state:State = {
        userName:'',
        userCode:'',
        codeTxt:'获取验证码'
     }
     componentDidMount(){}
     componentDidUpdate(){}
     componentWillUnmount(){}
     render() {
          return (
              <View style={ styles.container }>
                  <ImageBackground  style={ styles.imgBackground } source={require('./../../images/logo-bg.png')} ></ImageBackground>
                  <StatusBar translucent></StatusBar>
                  <Image
                        style={ styles.logo }
                        source={ require('./../../images/logo.png') } />
                  <TextInput
                        style={ styles.name }
                        placeholder={ '请输入您的手机号' }
                        keyboardType = 'numeric'
                        maxLength={ 11 }
                        onChangeText={(text) => this.setState({ userName: text }) }
                        value={ this.state.userName } />
                  <View style={ styles.passwordWrap }>
                        <TextInput
                              style={ styles.password }
                              placeholder={ '请输入验证码' }
                              keyboardType = 'numeric'
                              maxLength={ 6 }
                              onChangeText={ (text) => this.setState({ userCode:text }) }
                              value={ this.state.userCode } />
                        <Text style={ styles.code } onPress={ this.onPressTitle }>
                              {this.state.codeTxt}
                        </Text>
                  </View>

                  <TouchableOpacity
                        style={ styles.button }
                        onPress={() => Actions.home()} >
                        <Text style={ styles.buttonTxt }>马上体验</Text>
                  </TouchableOpacity>
                  <Text style= { styles.tips }>
                       已同意<Text style={ { color:'#3F8FFE'} }>《意电助理用户服务协议》</Text>
                  </Text>
               </View>
          )
     }
}

const styles = StyleSheet.create({
   container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingHorizontal:px2dp(68) ,
        backgroundColor: '#fff',
        position:'relative',
        margin:0
   },
   logo:{
        width: px2dp(198),
        height: px2dp(168),
        marginTop:px2dp(168),
        marginBottom:px2dp(72)
   },
   name:{
       width:px2dp(618),
       paddingVertical:px2dp(24),
       marginTop:px2dp(32),
       fontSize:17,
       borderWidth:0,
       borderBottomWidth:1,
       borderBottomColor:'#E8E8E8'
   },
   passwordWrap:{
       position: 'relative',
       marginTop:px2dp(32),
   },
   password:{
       width:px2dp(618),
       paddingVertical:px2dp(24),
       fontSize:17,
       borderWidth:0,
       borderBottomWidth:1,
       borderBottomColor:'#E8E8E8'
   },
   code:{
       position:'absolute',
       right:0,
       top:px2dp(32),
       width:px2dp(194),
       color:'#3F8FFE',
       fontSize:16,
   },
   button:{
       width:px2dp(618),
       height:px2dp(80),
       marginTop:px2dp(84),
       borderRadius: px2dp(8),
       backgroundColor:'#3F8FFE',
       color:'#fff',
       textAlign:'center'
   },
   buttonTxt:{
       color:'#fff',
       fontSize:16,
       textAlign:'center',
       lineHeight:px2dp(80)
   },
   tips:{
       marginTop:px2dp(34),
       width:px2dp(618),
       fontSize:14,
       color:'#888',
       textAlign:'left'
   },
   imgBackground:{
       height:px2dp(178),
       position:'absolute',
       left:0,
       right:0,
       bottom:0
   }
});

export default Login