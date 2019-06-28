// Created by szatpig at 2019/6/27.
import { createStore,applyMiddleware } from 'redux';

let state = {}

let reducer = (state)=>{
     return state;
}

let store = createStore(reducer);

export default store;