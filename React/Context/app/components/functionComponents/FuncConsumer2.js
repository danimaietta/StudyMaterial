import React, { useContext } from 'react'
import LocaleContext from '../context/LocaleContext'

export default function FuncConsumer2() {
  const locale = useContext(LocaleContext)
  return (
    <>
        {locale == 'en' ? 
            <h4>I'm consumer 2</h4> : 
            <h4>Soy consumidor 2</h4>
        }  
    </>
  ) 
}