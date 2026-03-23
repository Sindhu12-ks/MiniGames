import './index.css'

const EachAnimalCard = props => {
  const {eachItem, handleClick} = props
  const {name, image, isFlipped} = eachItem

  const onSelection = () => {
    handleClick(eachItem)
  }

  const footPrint =
    'https://res.cloudinary.com/di56syjhq/image/upload/v1772872161/foot-print_8_bykruw.png'

  return (
    <li
      className={
        isFlipped
          ? 'animal-visible-card-styling'
          : 'animal-invisible-card-styling'
      }
    >
      <button
        data-testid={name}
        onClick={onSelection}
        type="button"
        className="cardButton"
      >
        <img
          src={isFlipped ? `${image}` : `${footPrint}`}
          alt={name}
          className="animal-image"
        />
      </button>
    </li>
  )
}

export default EachAnimalCard
