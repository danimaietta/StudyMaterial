import React, { useState } from 'react'
import LocaleContext from '../context/LocaleContext'
import FuncConsumer1 from './FuncConsumer1'
import FuncConsumer2 from './FuncConsumer2'
import FuncConsumer3 from './FuncConsumer3'

export default function FunctionProviderComponent() {
  const [locale, setLocale] = useState('en')

  const toggleLocale = () => {
    locale == 'en' ? setLocale('es') : setLocale('en')
  }

  const obj = { name: 'dani' }

  return (
    <LocaleContext.Provider value={{ locale, obj }}>
      {locale == 'en' ? (
        <h1>I'm a function component</h1>
      ) : (
        <h1>Soy el componente de función</h1>
      )}
      <FuncConsumer1 />
      <FuncConsumer2 />
      <FuncConsumer3 />
      <button onClick={() => toggleLocale()}> Toggle locale </button>
    </LocaleContext.Provider>
  )
}
