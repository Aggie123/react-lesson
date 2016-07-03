/*console.log('hello 123');

//commonJS规范引入外部模块的方式
var A=require('./components/a.js')
A('hi,aa!'); */
import React from 'react';
import ReactDOM,{render} from 'react-dom';
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { createStore } from 'redux'
import counter from './reducers'

import Counter from './components/Counter-Redux'

let store = createStore(counter);

function MyRender(){
render(
		<Counter 
		value={store.getState()}
		OnIncrement={()=>{store.dispatch({type:'INCREMENT'})}}
		OnDecrement={()=>{store.dispatch({type:'DECREMENT'})}}
		/>,
	document.getElementById('app')
	)	
};
	
MyRender()
store.subscribe(MyRender)