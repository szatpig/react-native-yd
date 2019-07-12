// Created by szatpig at 2019/7/8.
'user strict'

import React from 'react'
import { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity,ImageBackground, SafeAreaView, TouchableWithoutFeedback, FlatList } from 'react-native';
import { SwipeAction } from '@ant-design/react-native';

import { Actions } from 'react-native-router-flux';

import common from './../../styles/common.style'

import px2dp from './../../utils/adapter'

interface Props{

}
interface State{
    dataList:array,
    loading:boolean,
    tabIndex:number
}

class List extends Component<Props,State> {
     static defaultProps = {}
     state:State = {
        dataList:[
        {
            id:1,
            phone:13511604618,
            adr:'重庆',
            calledType:'其他'
        },{
            id:2,
		    phone:13511604618,
		    adr:'重庆',
		    calledType:'其他'
	    },{
	         id:33,
			 phone:13511604618,
			 adr:'重庆',
			 calledType:'其他'
		},{
			 id:4,
			phone:13511604618,
			adr:'重庆',
			calledType:'其他'
		},{
			 id:5,
			 phone:13511604618,
			 adr:'重庆',
			 calledType:'其他'
		},{
			 id:6,
			phone:13511604618,
			adr:'重庆',
			calledType:'其他'
		},{
			 id:7,
			 phone:13511604618,
			 adr:'重庆',
			 calledType:'其他'
		},{
			 id:8,
			phone:13511604618,
			adr:'重庆',
			calledType:'其他'
		},{
			 id:9,
			 phone:13511604618,
			 adr:'重庆',
			 calledType:'其他'
		},{
			 id:10,
			phone:13511604618,
			adr:'重庆',
			calledType:'其他'
		},{
			 id:11,
			 phone:13511604618,
			 adr:'重庆',
			 calledType:'其他'
		}],
        loading:false,
        tabIndex:0
     }
     _handleSwitch = () => {

     }
     componentDidMount(){}
     componentDidUpdate(){}
     componentWillUnmount(){}

     _handleLoadMore = () => {
         this.setState({
             dataList:this.state.dataList.concat(this.state.dataList)
         })
     }
     _handleTab = (tabIndex) => {
		  this.refs.flatList.scrollToIndex({
			  index:0,
			  viewOffset:0
		  })
         this.setState({
             dataList:[
                     {
                         id:1,
                         phone:13511604618,
                         adr:'重庆',
                         calledType:'其他3'
                     },{
                         id:2,
             		    phone:13511604618,
             		    adr:'重庆',
             		    calledType:'其他2'
             	    },{
             	         id:33,
             			 phone:13511604618,
             			 adr:'重庆',
             			 calledType:'其他4'
             		},{
             			 id:4,
             			phone:13511604618,
             			adr:'重庆',
             			calledType:'其他5'
             		},{
             			 id:5,
             			 phone:13511604618,
             			 adr:'重庆',
             			 calledType:'其他6'
             		},{
             			 id:6,
             			phone:13511604618,
             			adr:'重庆',
             			calledType:'其他7'
             		},{
             			 id:7,
             			 phone:13511604618,
             			 adr:'重庆',
             			 calledType:'其他8'
             		},{
             			 id:8,
             			phone:13511604618,
             			adr:'重庆',
             			calledType:'其他9'
             		},{
             			 id:9,
             			 phone:13511604618,
             			 adr:'重庆',
             			 calledType:'其他65'
             		},{
             			 id:10,
             			phone:13511604618,
             			adr:'重庆',
             			calledType:'其他65'
             		},{
             			 id:11,
             			 phone:13511604618,
             			 adr:'重庆',
             			 calledType:'其他65'
             		}],
             tabIndex
         });
     }
     ListCell({ item }:any){
          const right = [
                {
                  text: 'More',
                  onPress: () => console.log('more'),
                  style: { backgroundColor: 'orange', color: 'white' },
                },
                {
                  text: 'Delete',
                  onPress: () => console.log('delete'),
                  style: { backgroundColor: 'red', color: 'white' },
                },
              ];
          return (
			  <SwipeAction
					  autoClose
					  style={{ backgroundColor: 'transparent' }}
					  right={right}
					  onOpen={() => console.log('open')}
					  onClose={() => console.log('close')}
					>
				   <View style={ [common.flexColumn,styles.listCell] }>
						<Text style={ styles.listCellPhone }>{ item.phone }</Text>
						<Text style={ styles.listCellAdr }> { item.adr } | { item.calledType } </Text>
						<Text style={ styles.listCellTime }>2019/05/09</Text>
				   </View>
               </SwipeAction>
          )
     }
     render() {
          const { dataList,loading,tabIndex } = this.state
          return (
               <SafeAreaView style={[common.navContentHeight,styles.container] }>
					<StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)"></StatusBar>
					<ImageBackground  style={ styles.imgBackground } source={ require('./../../images/call-bg.png') } ></ImageBackground>
					<View style= { [common.flexRowBetween,{ width:'100%',marginTop:px2dp(55),paddingHorizontal:px2dp(80),marginBottom:px2dp(18) }] }>
						  <TouchableWithoutFeedback
						      style={ styles.callTouchBar } onPress={ this._handleTab.bind(this,0) }>
						      <Text style={ tabIndex == 0 ? styles.callBarTxtActive : styles.callBarTxt }>全部</Text>
						  </TouchableWithoutFeedback>
						  <TouchableWithoutFeedback
						      style={ styles.callTouchBar } onPress={ this._handleTab.bind(this,1) }>
						      <Text style={ tabIndex == 1 ? styles.callBarTxtActive : styles.callBarTxt }>关注</Text>
						  </TouchableWithoutFeedback>
						  <TouchableWithoutFeedback
						      style={ styles.callTouchBar } onPress={ this._handleTab.bind(this,2) }>
						      <Text style={ tabIndex == 2 ? styles.callBarTxtActive : styles.callBarTxt }>拒绝</Text>
						  </TouchableWithoutFeedback>
					</View>
					<View style={ styles.listWrapper }>
					      <FlatList
					          ref='flatList'
							  data={ dataList }
							  renderItem={this.ListCell}
							  onEndReached = { this._handleLoadMore }
							  ListEmptyComponent = { () => <Text style={ styles.noData }>暂无数据</Text> }
							  removeClippedSubviews
							  refreshing= { loading }
							  style={ styles.flatList } keyExtractor={ (item,index) => index.toString() }></FlatList>
					</View>
               </SafeAreaView>
          )
     }
}

const styles = StyleSheet.create({
    container:{
         flex: 1,
         flexDirection: 'column',
         justifyContent:'flex-start',
         alignItems:'center',
         paddingHorizontal:px2dp(32) ,
         paddingBottom:0,
         backgroundColor: '#F5F7FA',
         position:'relative',
         margin:0,
    },
    imgBackground:{
		position:'absolute',
		left:0,
		right:0,
		top:0,
		height:px2dp(244)
    },
    callTouchBar:{
        flex:1,
        width:px2dp(80),
        height:px2dp(55),
    },
    callBarTxt:{
        width:px2dp(72),
    	paddingBottom:px2dp(10),
        fontSize:16,
        color:'#aac1f8',
        borderBottomWidth:px2dp(1),
        borderBottomColor:'transparent',
        textAlign:'center'
    },
	callBarTxtActive:{
	    width:px2dp(72),
	    paddingBottom:px2dp(10),
		fontSize:16,
		color:'#fff',
		borderBottomWidth:px2dp(1),
		borderBottomColor:'#fff',
        textAlign:'center'
	},
	listWrapper:{
	    flex:1,
	    flexDirection: 'row',
        flexWrap:'nowrap',
	    marginLeft:-px2dp(32),
	    marginRight:-px2dp(32),
	    paddingHorizontal:px2dp(32),
	    backgroundColor:'#fff'
	},
	flatList:{
	    backgroundColor:'#fff'
	},
	listCell:{
	    width:'100%',
	    borderBottomWidth:1,
	    borderBottomColor:'#EDEFF2',
	    paddingBottom:px2dp(32),
	    paddingTop:px2dp(32),
	    position:'relative'
	},
	listCellPhone:{
	   fontSize:16,
	   color:'#303133'
	},
	listCellAdr:{
	   fontSize:15,
	   color:'#909399',
	   marginTop:px2dp(8)
	},
	listCellTime:{
	   position:'absolute',
	   top:px2dp(60),
	   right:px2dp(0),
	   fontSize:16,
	},
	noData:{
	   textAlign:'center',
	   marginTop:200,
	   width:'100%'
	}
});

export default List