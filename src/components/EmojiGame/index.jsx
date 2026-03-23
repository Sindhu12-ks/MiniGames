import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import EmojiGameCard from '../EmojiGameCard'
import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

const EmojiGame = () => {
  const [gameStart, setGameStart] = useState(false)

  const onStartGame = () => {
    setGameStart(!gameStart)
  }

  return (
    <>
      {gameStart ? (
        <div>
          <EmojiGameCard emojisList={emojisList} />
        </div>
      ) : (
        <div className="emojiBg">
          <div className="paddingDiv">
            <Link to="/" className="link">
              <div className="backAlignment">
                <button type="button" className="BackButton" aria-label="Back">
                  <BiArrowBack />
                </button>
                <p className="textBack">Back</p>
              </div>
            </Link>
            <div className="wholeBox">
              <div className="rulesBox">
                <div className="imageBox">
                  <img
                    src="https://res.cloudinary.com/di56syjhq/image/upload/v1772608110/Group_7428_yrxg1s.png"
                    alt="emoji game"
                    className="emojiImage"
                  />
                </div>
                <div className="emojiRules">
                  <h1 className="emojiRulesHeading">Rules</h1>
                  <ul className="listRule">
                    <li>User should be able to see the list of Emojis</li>
                    <li>
                      When the user clicks any one of the Emoji for the first
                      time, then the count of the score should be incremented by
                      1 and the List of emoji cards should be shuffled.
                    </li>
                    <li>
                      This process should be repeated every time the user clicks
                      on an emoji card
                    </li>
                    <li>
                      When the user clicks on all Emoji cards without clicking
                      any of it twice, then the user will win the game
                    </li>
                    <li>
                      When the user clicks on the same Emoji for the second
                      time, then the user will lose the game.
                    </li>
                    <li>
                      Once the game is over, the user will be redirected to the
                      results page.
                    </li>
                  </ul>
                  <button
                    type="button"
                    onClick={onStartGame}
                    className="startBtn"
                  >
                    Start playing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default EmojiGame
