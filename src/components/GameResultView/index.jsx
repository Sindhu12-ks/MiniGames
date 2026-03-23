import './index.css'

const gameStateConstants = {
  won: 'YOU WON',
  lost: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

const GameResultView = props => {
  const {myChoice, opponentChoice, score, resultMsg, onClickPlayAgain} = props
  const clickPlayAgain = () => {
    onClickPlayAgain()
  }

  const renderWon = () => (
    <div className="resultView">
      <h1 className="MainHead">ROCK PAPER SCISSOR</h1>
      <div className="scoreBoard">
        <h1 className="headingPart">
          Rock <br />
          Paper <br /> Scissor <br />
        </h1>
        <div className="imageContainer">
          <img
            src="https://res.cloudinary.com/di56syjhq/image/upload/v1772347366/Group_7618_akjka7.png"
            alt="won emoji"
            className="resultemoji"
          />
        </div>
        <div className="scoreDiv">
          <p className="scoreText">Score</p>
          <p className="scoreText">{score}</p>
        </div>
      </div>
      <div className="resultBox">
        <div className="yourButton">
          <h1 className="youText">You</h1>
          <img src={myChoice[1]} alt={myChoice.id} className="choiceImg" />
        </div>
        <div className="resultBoard">
          <img
            src="https://res.cloudinary.com/di56syjhq/image/upload/v1772704578/Emoji_nbd60w.png"
            alt="Smiling face with star eyes"
            className="signImg"
          />
          <p className="wonText">YOU WON</p>
          <div>
            <button
              type="button"
              className="playAgainBtn"
              onClick={clickPlayAgain}
            >
              Play Again
            </button>
          </div>
        </div>
        <div className="yourButton">
          <h1 className="youText">Opponent</h1>
          <img
            src={opponentChoice.imageUrl}
            alt={opponentChoice.id}
            className="choiceImg"
          />
        </div>
      </div>
    </div>
  )

  const renderLose = () => (
    <div className="resultView">
      <h1 className="MainHead">ROCK PAPER SCISSOR</h1>
      <div className="scoreBoard">
        <h1 className="headingPart">
          Rock <br />
          Paper <br /> Scissor <br />
        </h1>

        <div className="imageContainer">
          <img
            src="https://res.cloudinary.com/di56syjhq/image/upload/v1772347311/Group_7618_1_xfz7l5.png"
            alt="lose emoji"
            className="resultemoji"
          />
        </div>
        <div className="scoreDiv">
          <p className="scoreText">Score</p>
          <p className="scoreText">{score}</p>
        </div>
      </div>
      <div className="resultBox">
        <div className="yourButton">
          <h1 className="youText">You</h1>
          <img src={myChoice[1]} alt={myChoice.id} className="choiceImg" />
        </div>
        <div className="resultBoard">
          <img
            src="https://res.cloudinary.com/di56syjhq/image/upload/v1772704750/Emoji_2_g2m0k6.png"
            alt="Frowning face"
            className="signImg"
          />
          <p className="wonText">YOU LOSE</p>
          <button
            type="button"
            className="playAgainBtn"
            onClick={clickPlayAgain}
          >
            Play Again
          </button>
        </div>
        <div className="yourButton">
          <h1 className="youText">Opponent</h1>
          <img
            src={opponentChoice.imageUrl}
            alt={opponentChoice.id}
            className="choiceImg"
          />
        </div>
      </div>
    </div>
  )

  const renderDraw = () => (
    <div className="resultView">
      <h1 className="MainHead">ROCK PAPER SCISSOR</h1>
      <div className="scoreBoard">
        <h1 className="headingPart">
          Rock <br />
          Paper <br /> Scissor <br />
        </h1>

        <div className="imageContainer">
          <img
            src="https://res.cloudinary.com/di56syjhq/image/upload/v1772708425/Screenshot_2026-03-05_151659_cbgvu2.png"
            alt="draw emoji"
            className="resultemoji"
          />
        </div>
        <div className="scoreDiv">
          <p className="scoreText">Score</p>
          <p className="scoreText">{score}</p>
        </div>
      </div>
      <div className="resultBox">
        <div className="yourButton">
          <h1 className="youText">You</h1>
          <img src={myChoice[1]} alt={myChoice.id} className="choiceImg" />
        </div>
        <div className="resultBoard">
          <img
            src="https://res.cloudinary.com/di56syjhq/image/upload/v1772704764/Emoji_1_bx0fdj.png"
            alt="Face without mouth"
            className="signImg"
          />
          <p className="wonText">IT IS DRAW</p>
          <button
            type="button"
            className="playAgainBtn"
            onClick={clickPlayAgain}
          >
            Play Again
          </button>
        </div>
        <div className="yourButton">
          <h1 className="youText">Opponent</h1>
          <img
            src={opponentChoice.imageUrl}
            alt={opponentChoice.id}
            className="choiceImg"
          />
        </div>
      </div>
    </div>
  )

  const renderView = () => {
    switch (resultMsg) {
      case gameStateConstants.won:
        return renderWon()
      case gameStateConstants.lost:
        return renderLose()
      case gameStateConstants.draw:
        return renderDraw()
      default:
        return null
    }
  }
  return <div>{renderView()}</div>
}
export default GameResultView
