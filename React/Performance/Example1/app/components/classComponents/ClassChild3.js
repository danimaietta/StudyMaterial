import React from 'react'

/*
  this component will render unnecessarily even
  when its props hasn't changed
*/
export default class ClassChild3 extends React.Component {
  
  constructor(props){
    super(props)
  }

  render() {
    console.count('class children3 renders')
    return <h4>I'm class child 3 and this is my {this.props.msg}</h4>
  }
}