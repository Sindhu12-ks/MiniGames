import './index.css'

const EmojiCard = props => {
  const {clickEmoji, emoji} = props
  const {id, emojiName, emojiUrl} = emoji
  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="eachEmoji">
      <button type="button" className="emojiCard" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emojiSingle" />
      </button>
    </li>
  )
}
export default EmojiCard
