import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import RockPaperScissorCard from '../RockPaperScissorCard'
import './index.css'

const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'paper',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const RockPaperScissor = () => {
  const [gameStart, setGameStart] = useState(false)

  const onStartGame = () => {
    setGameStart(!gameStart)
  }

  return (
    <>
      {gameStart ? (
        <div>
          <RockPaperScissorCard choicesList={choicesList} />
        </div>
      ) : (
        <div className="background1">
          <Link to="/" className="link">
            <div className="backAlignment">
              <button type="button" className="backButton" aria-label="Back">
                <BiArrowBack size="22" />
              </button>
              <p className="backText">Back</p>
            </div>
          </Link>
          <div className="imageCard">
            <h1 className="gameText">ROCK PAPER SCISSOR</h1>
            <img
              src="https://res.cloudinary.com/di56syjhq/image/upload/v1772359979/Group_7469_1_gfvhrx.png"
              alt="rock paper scissor"
              className="emojiImg"
            />
          </div>

          <h1 className="heading">Rules</h1>
          <div className="description">
            <ul className="unordered-list-styling1">
              <li>
                The game result should be based on user and user opponent
                choices
              </li>
              <li>
                When the user choice is rock and his opponent choice is rock
                then the result will be <span className="span">IT IS DRAW</span>
              </li>
              <li>
                When the user choice is paper and his opponent choice is rock
                then the result will be <span className="span">YOU WON</span>
              </li>
              <li>
                When the user choice is a scissor and his opponent choice is
                rock then the result will be{' '}
                <span className="span">YOU LOSE</span>
              </li>
              <li>
                When the user choice is paper and his opponent choice is paper
                then the result will be <span className="span">IT IS DRAW</span>
              </li>
              <li>
                When the user choice is scissors and his opponent choice is
                paper then the result will be{' '}
                <span className="span">YOU WON</span>
              </li>
              <li>
                When the user choice is rock and his opponent choice is scissors
                then the result will be <span className="span">YOU WON</span>
              </li>
              <li>
                When the user choice is paper and his opponent choice is
                scissors then the result will be{' '}
                <span className="span">YOU LOSE</span>
              </li>
              <li>
                When the user choice is scissors and his opponent choice is
                scissors then the result will be{' '}
                <span className="span">IT IS DRAW</span>
              </li>
              <li>
                When the result is <span className="span">YOU WON</span>,then
                the count of the score should be incremented by 1
              </li>
              <li>
                When the result is <span className="span">IT IS DRAW</span>,then
                the count of the score should be the same
              </li>
              <li>
                When the result is <span className="span">YOU LOSE</span>,then
                the count of the score should be decremented by 1
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
export default RockPaperScissor
