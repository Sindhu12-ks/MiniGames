import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import MatchImagesGame from '../MatchImagesGame'
import './index.css'

const MatchImages = () => {
  const [gameStart, setGameStart] = useState(false)

  const onStartGame = () => {
    setGameStart(!gameStart)
  }

  return (
    <>
      {gameStart ? (
        <div>
          <MatchImagesGame />
        </div>
      ) : (
        <div className="background2">
          <Link to="/" className="link">
            <div className="backAlignment">
              <button type="button" className="backButton" aria-label="Back">
                <BiArrowBack size="22" />
              </button>
              <p className="backText">Back</p>
            </div>
          </Link>

          <div className="imageCard">
            <h1 className="gameText">Match Images</h1>
            <img
              src="https://res.cloudinary.com/di56syjhq/image/upload/v1772346735/memory_p2p5pv.png"
              alt="memory matrix"
              className="emojiImg"
            />
          </div>

          <h1 className="heading">Rules</h1>
          <div className="description">
            <ul className="unordered-list-styling1">
              <li>If you want to go back to the Home page, click on the Match Image logo.</li>
              <li>
                When a thumbnail is clicked, if that is matched with the image to be matched, Score is incremented by one</li>
              <li>
                When a thumbnail is clicked, if it is not matched with the image to be matched, The game should end, and the Scorecard view should be displayed
              </li>
              <li>
                When the timer reached 0 sec, then the game should end, and the Scorecard view should be displayed
              </li>
            </ul>
          </div>
          <div>
            <button
              type="button"
              className="buttonMatrix"
              onClick={onStartGame}
            >
              Start playing
            </button>
          </div>
        </div>
      )}
    </>
  )
}
export default MatchImages
