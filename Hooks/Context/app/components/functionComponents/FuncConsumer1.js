import React, { useContext } from 'react'
import LocaleContext from '../context/LocaleContext'

export default function FuncConsumer1() {
  const { locale, obj } = useContext(LocaleContext)
  console.log(obj.name)
  return <> {locale == 'en' ? <h4>I'm consumer 1</h4> : <h4>Soy consumidor 1</h4>} </>
}
