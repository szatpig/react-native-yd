// Created by szatpig at 2019/7/2.
'user strict'

import React from 'react'
import { Component } from 'react';
import { Scene, Actions, Drawer } from 'react-native-router-flux'
import { StatusBar } from 'react-native';

import px2dp from './../utils/adapter'

import Login from './../pages/auth/login'
import Home from './../pages/homepage/home'
import DrawerComponent from './../pages/homepage/drawer'

import List from './../pages/call/list'

import Iconf from 'react-native-vector-icons/SimpleLineIcons';

const IconComp = () => <Iconf name="arrow-right" style={ [{ fontSize:14,marginLeft:px2dp(164) }] } />

let _sceneList = (
    <Scene key="root">
        <Drawer key='drawer'
	        onEnter={ () =>{ StatusBar.setBarStyle('dark-content') } }
	        onExit={ () =>{ StatusBar.setBarStyle('light-content') } }
	        hideNavBar
	        drawerPosition={ 'left' }
	        drawerWidth={ px2dp(750) }
	        contentComponent={ DrawerComponent }>
            <Scene key="home" component={ Home } hideNavBar />
        </Drawer>
        <Scene key="list"
	        component={ List }
	        navTransparent
	        back
	        backButtonImage={ require('./../images/back.png') }
	        navigationBarStyle={{ paddingLeft:100 }}
	        titleStyle={ { color:'#fff',fontSize:17,marginLeft:-px2dp(30) } }
	        title="通话记录" initial/>
        <Scene key="login" component={ Login } hideNavBar title="login" />
    </Scene>
);

const scenes = Actions.create(_sceneList)

export default scenes