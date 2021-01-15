import React from 'react'

/*
    Lifecycle methods only apply for class components
*/
export default class Lifecycle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: 'state'
        }
        console.log("constructor: this happens before anything else")
    }

    //warning
    /*
        Before the component is mounted
    */
    componentWillMount(){
        console.log('componentWillMount')
    }

    /*
        After the component is mounted
    */
    componentDidMount(){
        console.log('componentDidMount')
    }

    /*
        This ask if you can update the component or not by returning true or false
        Helps to validate in cases the component doesn't need to be updated
    */
    shouldComponentUpdate(prevProps, nextState){
        console.log('shouldComponentUpdate ' + prevProps.foo)
        return true
    }

    //warning
    /*
        Before the component updates you can validate what you want with the new state
        Check if the new state match what you want
    */
    componentWillUpdate(nextProps, nextState){
        if(nextState.message === 'new state'){
            console.log('componentWillUpdate to: ' + nextState.message)
        }
    }

    render(){
        console.log("Im rendering right now")
        return (
            <>
                <h1>Lifecycle {this.state.message}</h1>
                <button onClick={() => this.setState({message: 'new state'})}>Update State</button>
            </>
        )
    }

    //warning
    /*
        Everytime a component updates the state it enters in this method
        1st argument is previous props and 2nd is previous state
        Always make a statement to validate what you need
    */
    componentDidUpdate(prevProps, prevState){
        if (prevState.message !== this.state.message) {
            console.log('componentDidUpdate: state.message changed')
        }else if(prevProps.foo === this.props.foo){
            console.log('componentDidUpdate: state.props.foo didnt changed ')
        }
    }

    /*
        When the component is going to be removed from the DOM
    */
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    //warning
    /*
        When the component receive different props it enters here
    */
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps: ' + nextProps.foo)
    }

}
