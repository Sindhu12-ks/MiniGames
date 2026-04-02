import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onPlayAgain, score} = props
  const imageUrl = isWon
    ? 'https://res.cloudinary.com/di56syjhq/image/upload/v1772347453/Image_ul6zki.png'
    : 'https://res.cloudinary.com/di56syjhq/image/upload/v1772347420/Image_1_wfud3j.png'
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const altText = isWon ? 'won' : 'lose'

  return (
    <div className="aligning">
      <div className="rulesBox1">
        <div className="gameStatus">
          <h1 className="winorLoseText">{gameStatus}</h1>
          <p className="bestScoreText">{scoreLabel}</p>
          <p className="scoreText">{score}/12</p>
          <button onClick={onPlayAgain} type="button" className="playBtn">
            Play Again
          </button>
        </div>
        <div className="winLoseImg">
          <img src={imageUrl} alt={altText} className="result" />
        </div>
      </div>
    </div>
  )
}
export default WinOrLoseCard
