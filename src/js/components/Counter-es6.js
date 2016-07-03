import React,{Component} from 'react'
//import { render } from 'react-dom'

export default class Counter extends Component {
	constructor(props){
		super(props);
		this.state={
			value:0
		}
	}
	Add(){
		this.setState({value:this.state.value+1});
	}
	Minus(){
		this.setState({value:this.state.value-1});
	}
  	render() {
	    return <div>
	      <p>counter:
	      <span>{this.state.value}</span>
	      </p>
	      
	      <button onClick={this.Add.bind(this)}>+</button>
	      <button onClick={this.Minus.bind(this)}>-</button>
	    </div>
  }
};