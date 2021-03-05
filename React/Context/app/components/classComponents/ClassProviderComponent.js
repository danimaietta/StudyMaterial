import React from 'react'
import LocaleContext from '../context/LocaleContext'
import ClassConsumer1 from './ClassConsumer1'
import ClassConsumer2 from './ClassConsumer2'
import ClassConsumer3 from './ClassConsumer3'

export default class ClassProviderComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: 'en' // en = english, es = español
    }
  }

  toggleLocale() {
    this.state.locale == 'en'
      ? this.setState({ locale: 'es' })
      : this.setState({ locale: 'en' })
  }

  render() {
    console.count('class renders')
    return (
      <LocaleContext.Provider value={this.state.locale}>
        {this.state.locale == 'en' ? (
          <h1>I'm a class component</h1>
        ) : (
          <h1>Soy el componente de clase</h1>
        )}
        <ClassConsumer1 />
        <ClassConsumer2 />
        <ClassConsumer3 />
        <button onClick={() => this.toggleLocale()}> Toggle locale </button>
      </LocaleContext.Provider>
    )
  }
}
