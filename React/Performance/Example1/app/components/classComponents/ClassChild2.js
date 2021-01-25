import React from 'react'

/*
  with React.memo the component doesn't render until its props has changed
  Also notice this way it uses less code than ClassChild1
*/
export default class ClassChild2 extends React.Component {
  
  constructor(props){
    super(props)
  }

  render() {
    console.count('class children2 renders')
    return <h4>I'm class child 2 and this is my {this.props.msg}</h4>
  }
}

export const MemoizedClassChild2 = React.memo(ClassChild2)