import './index.css'

import {Link} from 'react-router-dom'

import Modal from 'react-modal'

import {BiArrowBack} from 'react-icons/bi'

import {CgClose} from 'react-icons/cg'

import {useState, useEffect} from 'react'

import EachAnimalCard from '../EachAnimalCard'

const cardsData = [
  {
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

const gameStatusConstants = {
  active: 'ACTIVE',
  response: 'RESPONSE',
}

const CardFlipMemoryGameInterface = () => {
  const [gameStatus, setGameStatus] = useState(gameStatusConstants.active)
  const [shuffledCards, setShuffledCards] = useState([])
  const [cardFlipCount, setCardFlipCount] = useState(0)
  const [countDown, setCountDown] = useState(120)
  const [score, setScore] = useState(0)
  const [selectedCards, setSelectedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [lowestFlipCount, setLowestFlipCount] = useState(
    () => Number(localStorage.getItem('memoryLowestFlips')) || 0,
  )

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const formatTime = time => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `0${minutes}:${seconds > 9 ? `${seconds}` : `0${seconds}`}`
  }

  // Timer logic with proper cleanup
  useEffect(() => {
    let timerId

    if (gameStatus === gameStatusConstants.active && countDown > 0) {
      timerId = setInterval(() => {
        setCountDown(prev => prev - 1)
      }, 1000)
    }

    if (countDown === 0) {
      setGameStatus(gameStatusConstants.response)
    }

    return () => clearInterval(timerId)
  }, [countDown, gameStatus])

  // Create and shuffle cards once when component mounts or game restarts
  useEffect(() => {
    const createShuffledCards = () => {
      const doubled = [...cardsData, ...cardsData]

      for (let i = doubled.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[doubled[i], doubled[j]] = [doubled[j], doubled[i]]
      }
      return doubled.map((item, index) => ({
        ...item,
        id: index,
        isFlipped: false,
      }))
    }

    if (gameStatus === gameStatusConstants.active) {
      setShuffledCards(createShuffledCards())
      setCardFlipCount(0)
      setScore(0)
      setSelectedCards([])
      setMatchedCards([])
      setCountDown(120)
    }
  }, [gameStatus])

  // Check match when 2 cards selected
  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards

      if (first.name === second.name) {
        // Match found
        setMatchedCards(prev => [...prev, first.name])
        setScore(prev => prev + 1)

        // Clear selection
        setSelectedCards([])

        // Win check
        if (score + 1 === cardsData.length) {
          setGameStatus(gameStatusConstants.response)

          // Update lowest flips only on win
          if (cardFlipCount < lowestFlipCount || lowestFlipCount === 0) {
            localStorage.setItem('memoryLowestFlips', cardFlipCount)
            setLowestFlipCount(cardFlipCount)
          }
        }
      } else {
        // No match → flip back after delay
        setTimeout(() => {
          setShuffledCards(prev =>
            prev.map(item => {
              if (item.id === first.id || item.id === second.id) {
                return {...item, isFlipped: false}
              }
              return item
            }),
          )
          setSelectedCards([])
        }, 1000) // ← 1000ms = 1 second (you had 2000 before)
      }
    }
  }, [selectedCards, score, cardFlipCount, lowestFlipCount])

  const flipTheCard = card => {
    if (
      gameStatus !== gameStatusConstants.active ||
      selectedCards.length === 2 ||
      card.isFlipped ||
      matchedCards.includes(card.name)
    ) {
      return
    }

    setCardFlipCount(prev => prev + 1)

    setShuffledCards(prev =>
      prev.map(item =>
        item.id === card.id ? {...item, isFlipped: true} : item,
      ),
    )

    setSelectedCards(prev => [...prev, card])
  }

  const onHandleCardCardClick = card => {
    flipTheCard(card)
  }

  const onPlayAgainButton = () => {
    setGameStatus(gameStatusConstants.active)
  }

  const responseSection = () => {
    const happyEmoji =
      'https://res.cloudinary.com/di56syjhq/image/upload/v1772872872/03_Optimistic_yrplyl.png'
    const sadEmoji =
      'https://res.cloudinary.com/di56syjhq/image/upload/v1772872817/05_Pokerface_spssbj.png'

    const happyEmojiAlt = 'grinning face with big eyes'
    const sadEmojiAlt = 'neutral face'

    const isWin = score === cardsData.length

    return (
      <div className="result-response-container">
        <img
          className="result-response-emoji"
          src={isWin ? happyEmoji : sadEmoji}
          alt={isWin ? happyEmojiAlt : sadEmojiAlt}
        />
        <h1 className="congratulation-response-text">
          {isWin ? 'Congratulations!' : 'Better luck next time!'}
        </h1>
        <p className="no-of-flips-text">No.of Flips - {cardFlipCount}</p>
        <h1 className="response-description">
          {isWin
            ? 'You matched all of the cards in record time'
            : 'You did not match all of the cards in record time'}
        </h1>

        <button
          type="button"
          className="cfm-response-button"
          onClick={onPlayAgainButton}
        >
          Play Again
        </button>
      </div>
    )
  }

  const renderActiveTopSection = () => (
    <div className="cfm-activestate-top-container">
      <Link to="/" className="link">
        <div className="backAlignment">
          <button type="button" className="backButton" aria-label="Back">
            <BiArrowBack size="22" />
          </button>
          <p className="backText">Back</p>
        </div>
      </Link>
      <div>
        <button
          type="button"
          className="ruleButton"
          onClick={() => setModalIsOpen(true)}
        >
          Rules
        </button>
      </div>
      <Modal
        className="cfm-popup-rules-container"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Emoji Game Rules"
        overlayClassName="modal-overlay"
      >
        <div className="closeBtn">
          <button
            type="button"
            data-testid="close"
            className="cfm-active-rules-close-button"
            onClick={closeModal}
            aria-label="close"
          >
            <CgClose color="#334155" aria-label="close" />
          </button>
        </div>
        <h1 className="cfm-active-state-rules-text">Rules</h1>
        <ul className="cfm-inital-rules-unordered-styling">
          <li className="cfm-active-rules-list-item-styling">
            When the game is started, the users should be able to see the list
            of Cards that are shuffled and turned face down.
          </li>
          <li className="cfm-active-rules-list-item-styling">
            Users should be able to compare only two cards at a time.
          </li>
          <li className="cfm-active-rules-list-item-styling">
            When a user starts the game, the user should be able to see the
            Timer running.
          </li>
          <li className="cfm-active-rules-list-item-styling">
            When the user is not able to find all the cards before the timer
            ends then the game should end and redirect to the Time Up Page.
          </li>
          <li className="cfm-active-rules-list-item-styling">
            The Timer starts from 2 Minutes.
          </li>
          <li className="cfm-active-rules-list-item-styling">
            If the user finds all the matching cards before the timer ends, then
            the user should be redirected to the results page.
          </li>
          <li className="cfm-active-rules-list-item-styling">
            If the two cards have the same image, they remain face up. If not,
            they should be flipped face down again after a short 2 seconds.
          </li>
        </ul>
      </Modal>
    </div>
  )

  const renderActiveStateSection = () => (
    <>
      {renderActiveTopSection()}
      <h1 className="cfm-active-state-heading">Card-Flip Memory Game</h1>
      <div className="alignmentOfBlock">
        <div className="active-state-score-time-unordered-list">
          <p className="active-state-score-list-detail">
            Card flip count -{' '}
            {cardFlipCount > 9 ? cardFlipCount : `0${cardFlipCount}`}
          </p>
          <p className="active-state-time-list-detail">
            {formatTime(countDown)}
          </p>
          <p className="active-state-score-list-detail">
            Score - {score > 9 ? score : `0${score}`}
          </p>
        </div>

        <div className="cfm-game-container">
          <ul className="animal-cards-unorder-list-styling">
            {shuffledCards.map(eachItem => (
              <EachAnimalCard
                eachItem={eachItem}
                key={eachItem.id}
                handleClick={onHandleCardCardClick}
                data-testid="cardsData"
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  )

  const renderGame = () => {
    switch (gameStatus) {
      case gameStatusConstants.active:
        return renderActiveStateSection()
      case gameStatusConstants.response:
        return responseSection()
      default:
        return null
    }
  }

  return <div className="cfm-active-state-container">{renderGame()}</div>
}

export default CardFlipMemoryGameInterface
