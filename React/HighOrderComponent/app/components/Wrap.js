import React from 'react'

export default function wrap(Component) {
  return function AddOne({ a, b }) {
    return <Component a={a + 1} b={b + 1} />
  }
}
