import React from 'react'
import LocaleContext from '../context/LocaleContext'

export default class ClassConsumer2 extends React.Component {
    render() {
      return (
        <LocaleContext.Consumer>
            {locale => locale == 'en' ? 
                <h4>I'm consumer 2</h4> : 
                <h4>Soy consumidor 2</h4>
            }  
        </LocaleContext.Consumer>
      ) 
    }
}