import {Link} from "react-router-dom"
import './index.css'

const Header = props => {
  const {score, timer} = props
  return (
    <nav className="navbar">
      <Link to="/" className="link">
       <h1 className="matchGameHeading">Match Game</h1>
      </Link>
      <ul className="score-timer-container">
        <li className="timer-container">
          <p className="heading-text">
            score: <span className="score-time">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            className="timer-image"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="score-time">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
