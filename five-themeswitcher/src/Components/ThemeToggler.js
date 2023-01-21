import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

const ThemeToggler = () => {
  const [ThemeMode, SetThemeMode] = useContext(ThemeContext)

  return (
    <div
      onClick={() => {
        SetThemeMode(ThemeMode === 'light' ? 'dark' : 'light')
      }}
    >
      <p>{ThemeMode === 'light' ? 'Switch to Dark Mode!' : 'Switch to Light Mode!'}</p>
    </div>
  )
}

export default ThemeToggler
