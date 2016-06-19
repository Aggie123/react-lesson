/*console.log('hello 123');

//commonJS规范引入外部模块的方式
var A=require('./components/a.js')
A('hi,aa!'); */
import React from 'react';
import ReactDOM,{render} from 'react-dom';
import { Router, browserHistory } from 'react-router'
import routes from './routes'


render(
	<div>Hello, world 1117!
	<Router history={browserHistory} routes={routes} />
	</div>,
	document.getElementById('app')
	);