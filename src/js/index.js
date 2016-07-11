/*console.log('hello 123');

//commonJS规范引入外部模块的方式
var A=require('./components/a.js')
A('hi,aa!'); */
import React from 'react';
import ReactDOM,{render} from 'react-dom';
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import Todos from './reducers/index'
import Counter from './reducers/counter'

import BCase from './components/BCase'

//let store = createStore(	counter);
let store = createStore(Todos);

render(
	<Provider store={store}>
		<div>Hello, world 1117!
		<Router history={browserHistory} routes={routes} />
	</div>
	</Provider>,
	document.getElementById('app')
	);