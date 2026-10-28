import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import StarRating from './components/StarRating'
import Accordion from './components/Accordion'
import Form from './components/Form'

function App() {
  return (
    <>
      <Counter/>
      <Toggle/>
      <StarRating/>
      <Accordion/>
      <Form/>
    </>
  )
}

export default App
