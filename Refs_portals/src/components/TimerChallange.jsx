import { useState, useRef } from "react"
import ResultModal from "./ResutlModal.jsx"

export default function TimerChallange({title, targetTime}) {
  const timer = useRef()
  const dialog = useRef()

  const [timerStarted, setTimerStarted] = useState(false)
  const [timerExpired, setTimerExpired] = useState(false)

  function handleClick() {
    timer.current = setTimeout(() => {
      setTimerExpired(true)
      dialog.current.showModal()
    }, targetTime * 1000)

    setTimerStarted(true)
  }

  function handleStop() {
    clearTimeout(timer.current)
    setTimerStarted(false)
  }


  return(
    <>
    < ResultModal ref={dialog} targetTime={targetTime} result='lost'/>
    
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleClick}>
          {timerStarted ? 'Stop' : 'Start'} Challange
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
       {timerStarted ? 'Time is running...' : 'Timer inactive'}  
      </p>
    </section>
    </>
  )
}