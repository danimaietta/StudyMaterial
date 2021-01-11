import React from 'react'

export default class Lifecycle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            stat: 'state'
        }
    }

    componentDidMount(){
        console.log('this happens first')
    }

    componentWillUnmount(){
        console.log('this happens last')
    }

    render(){
        return <h1>Hello World {this.state.stat}</h1>   
    }
}
