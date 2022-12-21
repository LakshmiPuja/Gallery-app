// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, setActiveThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesList
  const activeThumbnailClassName = isActive ? 'thumbnail active' : 'active'
  const onClickThumbnail = () => {
    setActiveThumbnail(id)
  }

  return (
    <li className="list-item">
      <button className="img-btn" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          className={activeThumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
