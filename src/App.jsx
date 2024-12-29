import { useState } from "react"


function App() {
  let [status, updStatus] = useState("Not played")
  let [player, updPlayer] = useState("Not played")
  let [bot, updBot] = useState("Not played")

  function roll() {
    let p = 0
    let b = 0
    let pRandom = Math.floor(Math.random() * 6) + 1
    p = pRandom
    let bRandom = Math.floor(Math.random() * 6) + 1
    b = bRandom
    updPlayer(p)
    updBot(b)
    if (p > b) {
      updStatus("Win")
    } else if (p < b) {
      updStatus("Lose")
    } else {
      updStatus("Draw")
    }
  }
  return(
    <div>
      <h1 className="flex justify-center mt-3 shadow-lg shadow-white pb-2 lg:text-3xl md:text-2xl sm: text-sm pl-4">Welcome to Epic Dice Battle!</h1>
      <div className="text-center h-screen m-2 p-3 lg:text-xl md:text-base sm: text-sm">
        <p className="m-3 p-3">Status: {status}</p>
        <p className="m-3 p-3">Player: {player}</p>
        <p className="m-3 p-3">Bot: {bot}</p>
        <button onClick={() => roll()} className="m-3 bg-amber-200 pl-3 pr-3 pt-2 pb-2 border-spacing-2 border-2 border-black rounded-2xl transition-all delay-200 sm: text-sm">Roll</button>
      </div>
    </div>
  )
}

export default App