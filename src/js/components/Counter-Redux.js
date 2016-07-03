import React,{Component} from 'react'
//import { render } from 'react-dom'

export default class Counter extends Component {
	constructor(props){
		super(props);
		/*this.state={
			value:0
		}*/
	}
/*	Add(){
		store.dispatch({type:'INCREMENT'});
	}
	Minus(){
		store.dispatch({type:'DECREMENT'});
	}*/
  	render() {
  		const {OnIncrement,OnDecrement,value}=this.props;
	    return <div>
	      <p>counter:
	      <span>{value}</span>
	      </p>
	      
	      <button onClick={OnIncrement.bind(this)}>+</button>
	      <button onClick={OnDecrement}>-</button>
	    </div>
  }
};