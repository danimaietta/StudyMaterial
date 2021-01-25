import React from 'react'
import ClassChild1 from './ClassChild1'
import {MemoizedClassChild2} from './ClassChild2'
import ClassChild3 from './ClassChild3'

/*
  ClassChild1 and ClassChild2 should only re-render when 
  the value change not when the fatherValue change
*/
export default class ClassFather extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      value: '1st message',
      fatherValue: true,
    }
  }

  toggleValue(){
    this.state.value == '1st message' ?
      this.setState({value: '2nd message'}) :
      this.setState({value: '1st message'})
  }

  render() {
    const {value, fatherValue} = this.state
    return (
      <>
        <h1>My class fatherValue is {fatherValue.toString()}</h1>
        <ClassChild1 msg={value} />
        <MemoizedClassChild2 msg={value} />
        <ClassChild3 msg={value} />
        <button onClick={() => this.toggleValue()}> Toggle global value </button>
        <button onClick={() => this.setState({fatherValue: !fatherValue})}> Toggle father value </button>
      </>
    )  
  }

}