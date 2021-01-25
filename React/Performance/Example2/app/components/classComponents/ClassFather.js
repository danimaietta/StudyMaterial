import React from 'react'
import slowFunction from '../../logic/logic'
import { MemoizedClassChild1 } from './ClassChild1'

export default class ClassFather extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      number: 1,
      other: true
    }
    this.result = slowFunction(this.state.number) // this variables stay the same through the renders
    this.sumatory = this.sumatory.bind(this)
  }

  componentWillUpdate(nextProps, nextState){
    if(nextState.number !== this.state.number){
      this.sumatory = this.sumatory.bind({})    // so we don't have to rewrite the whole function  
      this.result = slowFunction(nextState.number)
    }
  }

  sumatory(num){
    return num + parseInt(this.state.number)
  }

  render() {
    const {number, other} = this.state
    const {result} = this
    console.count('class father renders')
    return (
      <>
        <h1>My class number is {number} and the result is {result}</h1>
        <h4>My class other value is {other.toString()}</h4>
        <input type="number" onChange={e => this.setState({number: e.target.value})}></input>     
        <button onClick={() => this.setState({other: !other})}> update other </button>
        <MemoizedClassChild1 sumatory={this.sumatory} />
      </>
    )  
  }

}