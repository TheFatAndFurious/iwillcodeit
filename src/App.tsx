import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [state,setState]=useState(0)
const doSmth=()=> {


  console.log(
    "is it ok ?"
  );

}

  return (
    <div className="App">
      <h1>Mon pas si incroyable jeu de Memory</h1>
      <div className="set">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      <h2>Retournez une carte, puis une autre, si elles sont identiques vous avez fait une paire.</h2>
      <h2>Le cas echeant, il faut recommencer.</h2>
    </div>
  )
}

export default App