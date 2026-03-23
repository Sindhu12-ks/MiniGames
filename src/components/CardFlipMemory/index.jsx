import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import CardFlipMemoryGameInterface from '../CardFlipMemoryGameInterface'
import './index.css'

const CardFlipMemory = () => {
  const [gameStart, setGameStart] = useState(false)

  const onStartGame = () => {
    setGameStart(!gameStart)
  }

  return (
    <>
      {gameStart ? (
        <div>
          <CardFlipMemoryGameInterface />
        </div>
      ) : (
        <div className="background3">
          <Link to="/" className="link">
            <div className="backAlignment">
              <button type="button" className="backButton" aria-label="Back">
                <BiArrowBack size="22" />
              </button>
              <p className="backText">Back</p>
            </div>
          </Link>

          <div className="imageCard">
            <img
              src="https://res.cloudinary.com/di56syjhq/image/upload/v1772347082/animals_wa1qb0.png"
              alt="card flip memory game"
              className="emojiImg"
            />
          </div>

          <h1 className="heading">Rules</h1>
          <div className="description">
            <ul className="unordered-list-styling1">
              <li>
                When the game is started, the users should be able to see the
                list of Cards that are shuffled and turned face down.
              </li>
              <li>
                When a user starts the game, the user should be able to see the
                Timer running.
              </li>
              <li>The Timer starts from 2 Minutes.</li>
              <li>
                If the two cards have the same image, they remain face up.If
                not, they should be flipped face down again after a short 2
                seconds.
              </li>
              <li>Users should be able to compare only two cards at a time.</li>
              <li>
                When the user is not able to find all the cards before the timer
                ends then the game should end and redirect to the Time Up Page.
              </li>
              <li>
                If the user finds all the matching cards before the timer ends,
                then the user should be redirected to the results page.
              </li>
            </ul>
          </div>
          <div>
            <button type="button" className="button" onClick={onStartGame}>
              Start playing
            </button>
          </div>
        </div>
      )}
    </>
  )
}
export default CardFlipMemory
