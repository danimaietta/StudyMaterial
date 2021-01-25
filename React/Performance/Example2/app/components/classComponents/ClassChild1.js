import React from 'react'

export default class ClassChild1 extends React.Component {
  
  constructor(props){
    super(props)
  }

  render() {
    console.count('class children renders')
    return <h4>I'm class child 1 and my sumatory is {this.props.sumatory(5)}</h4>
  }
}

export const MemoizedClassChild1 = React.memo(ClassChild1)