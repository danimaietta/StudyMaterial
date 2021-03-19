import React from 'react'

export default function Theme() {
  const [theme, setTheme] = React.useState('light')

  const toDark = () => setTheme('dark')
  const toLight = () => setTheme('light')

  return (
    <div className={theme}>
      {theme === 'light' ? (
        <button onClick={toDark}>🔦</button>
      ) : (
        <button onClick={toLight}>💡</button>
      )}
    </div>
  )
}
