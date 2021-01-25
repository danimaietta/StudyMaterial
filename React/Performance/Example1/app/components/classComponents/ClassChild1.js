import React from 'react'

/*
  this component has its performance improved by checking 
  if the props has changed, so it doesn't render unnecessarily
*/
export default class ClassChild1 extends React.Component {

  constructor(props){
    super(props)
  }

  shouldComponentUpdate(prevProps, nextState){
    if(prevProps.msg !== this.props.msg){
      return true
    }else{
      return false
    }
  }

  render() {
    console.count('class children1 renders')
    return <h4>I'm class child 1 and this is my {this.props.msg}</h4>
  }
}