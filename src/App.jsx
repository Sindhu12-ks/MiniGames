import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/index.jsx'
import EmojiGame from './components/EmojiGameee/EmojiGame/index.jsx'
import MatchImages from './components/MatchGameee/MatchImages/index.jsx'
import RockPaperScissor from './components/RcokPaper/RockPaperScissor/index.jsx'
import CardFlipMemory from './components/CardFlipGamee/CardFlipMemory/index.jsx'

import './App.css'

const App = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/emoji-game" element={<EmojiGame/>} />
    <Route path="/match-images" element={<MatchImages/>} />
    <Route path="/rock-paper-scissor" element={<RockPaperScissor/>} />
    <Route path="/card-flip-memory-game" element={<CardFlipMemory/>} />
  </Routes>
)

export default App