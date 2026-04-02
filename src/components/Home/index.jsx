import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="background">
    <h1 className="heading">Games</h1>
    <ul className="listOfGames">
      <Link to="/emoji-game" className="link">
        <li className="emoji">
          <h1 className="gameName">Emoji Game</h1>
          <img
            src="https://res.cloudinary.com/di56syjhq/image/upload/v1774948759/f44fa4e27d470d3b6a41ca34dd87685e7465f380_sdgv7x.png"
            alt="emoji game"
            className="imgEmo"
          />
        </li>
      </Link>
      <Link to="/match-images" className="link">
        <li className="emoji">
          <h1 className="gameName">Match Images</h1>
          <img
            src="https://res.cloudinary.com/di56syjhq/image/upload/v1772346735/memory_p2p5pv.png"
            alt="memory matrix"
            className="img2"
          />
        </li>
      </Link>
      <Link to="/rock-paper-scissor" className="link">
        <li className="emoji">
          <h1 className="gameName">Rock Paper Scissor</h1>
          <img
            src="https://res.cloudinary.com/di56syjhq/image/upload/v1772347145/Group_7469_eea9cu.png"
            alt="rock paper scissor"
            className="img2"
          />
        </li>
      </Link>
      <Link to="/card-flip-memory-game" className="link">
        <li className="emoji">
          <img
            src="https://res.cloudinary.com/di56syjhq/image/upload/v1772347082/animals_wa1qb0.png"
            alt="card flip memory game"
            className="img1"
          />
        </li>
      </Link>
    </ul>
  </div>
)
export default Home
