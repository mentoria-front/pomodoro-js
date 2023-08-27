import React, { useContext } from 'react'
import { CountdownContext } from '../../contexts/Countdown.context'
import './Header.css';

export default function Header() {
  const { breakCount } = useContext(CountdownContext)

  return (
    <nav className='header-container'>
      <p>Breaks count: {breakCount}</p>
    </nav>
  )
}
