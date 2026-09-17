import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const student = {
    name: "Milena",
    surname: "Lis",
    className: "4P",
    specialization: "technik programista"
  };

  return (
    <>
      <p>Uczeń: {student.name} {student.surname}</p>
      <p>Klasa: {student.className}</p>
      <p>Kierunek: {student.specialization}</p>
    </>
  )
}

export default App