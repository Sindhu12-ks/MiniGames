import {Link} from 'react-router-dom'
import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {CgClose} from 'react-icons/cg'
import Modal from 'react-modal'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGameCard extends Component {
  state = {
    isGameInProgress: true,
    clickedEmojiList: [],
    topScore: 0,
    isModalOn: false,
  }

  clickModal = () => {
    this.setState({isModalOn: true})
  }

  closeModal = () => {
    this.setState({isModalOn: false})
  }

  resetGame = () => {
    this.setState({isGameInProgress: true, clickedEmojiList: []})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = clickedEmojiList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onPlayAgain={this.resetGame}
        score={clickedEmojiList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const clickedEmojiLength = clickedEmojiList.length
    const isEmojiPresent = clickedEmojiList.includes(id)

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojiLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  getShuffledEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojis = this.getShuffledEmojis()
    const {isModalOn} = this.state

    return (
      <>
        <div className="paddingDiv">
          <div className="afterNavBar">
            <div className="rulesAndBack">
              <Link to="/" className="link">
                <div className="backAlignment">
                  <button
                    type="button"
                    className="BackButton"
                    aria-label="Back"
                  >
                    <BiArrowBack size="22" />
                  </button>
                  <p className="textBack">Back</p>
                </div>
              </Link>
              <div>
                <button
                  type="button"
                  className="rulesButton"
                  onClick={this.clickModal}
                >
                  Rules
                </button>
              </div>
              {isModalOn && (
                <Modal
                  className="rules-content-interface"
                  isOpen={isModalOn}
                  onRequestClose={this.closeModal}
                  contentLabel="Emoji Game Rules"
                  overlayClassName="modal-overlay"
                >
                  <div className="closeBtn">
                    <button
                      type="button"
                      data-testid="close"
                      className="close-button-styling"
                      onClick={this.closeModal}
                      aria-label="close"
                    >
                      <CgClose color="grey" size={24} aria-label="close" />
                    </button>
                  </div>
                  <h2 className="rules-heading">Rules</h2>
                  <ul className="unordered-list-styling-interface">
                    <li>User should be able to see the list of Emojis.</li>
                    <li>
                      When the user clicks any one of the Emoji for the first
                      time, then the count of the score should be incremented by
                      1 and the List of emoji cards should be shuffled.
                    </li>
                    <li>
                      This process should be repeated every time the user clicks
                      on an emoji card.
                    </li>
                    <li>
                      When the user clicks on all Emoji cards without clicking
                      any of it twice, then the user will win the game.
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
                </Modal>
              )}
            </div>

            <ul className="emoji-list">
              {shuffledEmojis.map(each => (
                <EmojiCard
                  key={each.id}
                  emoji={each}
                  clickEmoji={this.clickEmoji}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }

  render() {
    const {isGameInProgress, topScore, clickedEmojiList} = this.state
    return (
      <div className="emojiBg">
        <nav className="navBar">
          <div className="imageItem">
            <img
              src="https://res.cloudinary.com/di56syjhq/image/upload/v1772524388/wink_1_nrmerc.png"
              alt="emoji logo"
              className="winkEmoji"
            />
            <h1 className="gameTitle">Emoji Game</h1>
          </div>
          {isGameInProgress && (
            <div className="scoreBar">
              <p className="topscore">Top Score: {topScore}</p>
              <p className="score">Score: {clickedEmojiList.length}</p>
            </div>
          )}
        </nav>

        <div className="emojisList1">
          {isGameInProgress ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGameCard
