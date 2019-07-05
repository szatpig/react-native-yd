// Created by szatpig at 2019/7/2.
'user strict'

import React from 'react'
import { Component } from 'react';
import { Scene, Actions, Drawer } from 'react-native-router-flux'

import px2dp from './../utils/adapter'

import Login from './../pages/auth/login'
import Home from './../pages/homepage/home'
import DrawerComponent from './../pages/homepage/drawer'

let _sceneList = (
    <Scene key="root">
        <Drawer key='drawer' hideNavBar={true} drawerPosition={ 'left' } drawerWidth={ px2dp(750) } contentComponent={ DrawerComponent }>
             <Scene key="home" component={ Home } hideNavBar initial/>
        </Drawer>
        <Scene key="login" component={ Login } hideNavBar title="login" />
    </Scene>
);

const scenes = Actions.create(_sceneList)

export default scenes