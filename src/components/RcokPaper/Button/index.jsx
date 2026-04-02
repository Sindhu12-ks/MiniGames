import './index.css'

const Button = props => {
  const {eachBtn, onGetId} = props
  const {id, imageUrl} = eachBtn

  const onClickButton = () => {
    onGetId(id, imageUrl)
  }

  return (
    <li className="buttonList">
      <button
        type="button"
        className="rockpaperbtn"
        data-testid={`${id}Button`}
        onClick={onClickButton}
      >
        <img src={imageUrl} alt={id} className="imagesRPS" />
      </button>
    </li>
  )
}
export default Button
