import React from 'react'
import { useAuth } from './useAuth'

export default function Home() {
    const {onLogin} = useAuth();
  return (
   <>
    <h2>Home (Public)</h2>
    <button type="button" onClick={onLogin}>
        Sign In
      </button>
   </>
  )
}
