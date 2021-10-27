import React, { useState, useEffect } from 'react'

export default function Scroll() {
  const handleScroll = () => {
    console.log('handling scroll i guess')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return <></>
}
