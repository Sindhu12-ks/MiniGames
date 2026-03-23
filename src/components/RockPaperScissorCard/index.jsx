import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import {CgClose} from 'react-icons/cg'
import Modal from 'react-modal'
import GameResultView from '../GameResultView'
import Button from '../Button'
import './index.css'

class RockPaperScissorCard extends Component {
  state = {
    showResult: false,
    score: 0,
    myChoice: {},
    opponentChoice: {},
    isModalOn: false,
    resultMsg: '',
  }

  onClickPlayAgain = () => {
    this.setState({
      showResult: false,
      score: 0,
    })
  }

  onGetResult = () => {
    const {myChoice, opponentChoice, resultMsg, score} = this.state
    return (
      <GameResultView
        score={score}
        opponentChoice={opponentChoice}
        myChoice={myChoice}
        resultMsg={resultMsg}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    )
  }

  modalOn = () => {
    this.setState({isModalOn: true})
  }

  modalClose = () => {
    this.setState({isModalOn: false})
  }

  onGetButtonId = (id, imageUrl) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'rock' && id === 'scissor') {
      this.setState(prevState => ({
        showResult: true,
        score: prevState.score - 1,
        resultMsg: 'YOU LOSE',
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
      }))
    } else if (choicesList[number].id === 'scissor' && id === 'paper') {
      this.setState(prevState => ({
        showResult: true,
        score: prevState.score - 1,
        resultMsg: 'YOU LOSE',
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
      }))
    } else if (choicesList[number].id === 'paper' && id === 'rock') {
      this.setState(prevState => ({
        showResult: true,
        score: prevState.score - 1,
        resultMsg: 'YOU LOSE',
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
      }))
    } else if (choicesList[number].id === 'rock' && id === 'paper') {
      this.setState(prevState => ({
        showResult: true,
        score: prevState.score + 1,
        resultMsg: 'YOU WON',
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
      }))
    } else if (choicesList[number].id === 'scissor' && id === 'rock') {
      this.setState(prevState => ({
        showResult: true,
        score: prevState.score + 1,
        resultMsg: 'YOU WON',
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
      }))
    } else if (choicesList[number].id === 'paper' && id === 'scissor') {
      this.setState(prevState => ({
        showResult: true,
        score: prevState.score + 1,
        resultMsg: 'YOU WON',
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        resultMsg: 'IT IS DRAW',
      })
    }
  }

  onGetImages = () => {
    const {choicesList} = this.props
    const {isModalOn} = this.state
    return (
      <>
        <div className="afterNavBar">
          <div className="rulesAndBack">
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
                onClick={this.modalOn}
              >
                Rules
              </button>
            </div>
            {isModalOn && (
              <Modal
                className="rules-content-interface"
                isOpen={isModalOn}
                onRequestClose={this.modalClose}
                contentLabel="Emoji Game Rules"
                overlayClassName="modal-overlay"
              >
                <div className="closeBtn">
                  <button
                    type="button"
                    data-testid="close"
                    className="close-button-styling"
                    onClick={this.modalClose}
                    aria-label="close"
                  >
                    <CgClose color="grey" size={24} aria-label="close" />
                  </button>
                </div>
                <h2 className="rules-heading">Rules</h2>
                <div className="description">
                  <ul className="unordered-list-styling">
                    <li>
                      The game result should be based on user and user opponent
                      choices
                    </li>
                    <li>
                      When the user choice is rock and his opponent choice is
                      rock then the result will be{' '}
                      <span className="span">IT IS DRAW</span>
                    </li>
                    <li>
                      When the user choice is paper and his opponent choice is
                      rock then the result will be{' '}
                      <span className="span">YOU WON</span>
                    </li>
                    <li>
                      When the user choice is a scissor and his opponent choice
                      is rock then the result will be{' '}
                      <span className="span">YOU LOSE</span>
                    </li>
                    <li>
                      When the user choice is paper and his opponent choice is
                      paper then the result will be{' '}
                      <span className="span">IT IS DRAW</span>
                    </li>
                    <li>
                      When the user choice is scissors and his opponent choice
                      is paper then the result will be{' '}
                      <span className="span">YOU WON</span>
                    </li>
                    <li>
                      When the user choice is rock and his opponent choice is
                      scissors then the result will be{' '}
                      <span className="span">YOU WON</span>
                    </li>
                    <li>
                      When the user choice is paper and his opponent choice is
                      scissors then the result will be{' '}
                      <span className="span">YOU LOSE</span>
                    </li>
                    <li>
                      When the user choice is scissors and his opponent choice
                      is scissors then the result will be{' '}
                      <span className="span">IT IS DRAW</span>
                    </li>
                    <li>
                      When the result is <span className="span">YOU WON</span>
                      ,then the count of the score should be incremented by 1
                    </li>
                    <li>
                      When the result is{' '}
                      <span className="span">IT IS DRAW</span>
                      ,then the count of the score should be the same
                    </li>
                    <li>
                      When the result is <span className="span">YOU LOSE</span>
                      ,then the count of the score should be decremented by 1
                    </li>
                  </ul>
                </div>
              </Modal>
            )}
          </div>
        </div>
        <div className="gameplay">
          <h1 className="mainGameHeading">ROCK PAPER SCISSOR</h1>
          <h1 className="heading11">Lets Pick</h1>

          <ul className="buttonListItems">
            {choicesList.map(each => (
              <Button
                key={each.id}
                eachBtn={each}
                onGetId={this.onGetButtonId}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }

  render() {
    const {showResult} = this.state
    return (
      <div className="background1">
        {showResult ? this.onGetResult() : this.onGetImages()}
      </div>
    )
  }
}
export default RockPaperScissorCard
