// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {userDetails, deleteComment, LikeImageTrigger} = props
  const {id, name, comment, IsLike, date, initialClassName} = userDetails
  const initial = name ? name[0].toUpperCase() : ''
  const time = formatDistanceToNow(date)
  const likeClassName = IsLike ? 'Active' : 'normal'
  const likeImgUrl = IsLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const deleteItem = () => {
    deleteComment(id)
  }

  const likeTrigger = () => {
    LikeImageTrigger(id)
  }

  return (
    <li className="list-container">
      <div className="comments-container">
        <div className="container">
          <div className={initialClassName}>
            <p className="first-letter">{initial}</p>
          </div>
          <div>
            <div className="user-container">
              <p className="user-name">{name}</p>
              <p className="user-postTime">{time} ago</p>
            </div>
            <p className="comment">{comment}</p>
          </div>
        </div>
        <div className="likeContainer">
          <div className="likeCard">
            <img src={likeImgUrl} alt="like" className="like-image" />
            <button
              className={likeClassName}
              type="button"
              onClick={likeTrigger}
            >
              like
            </button>
          </div>
          <button
            className="delete-button"
            type="button"
            data-testid="delete"
            onClick={deleteItem}
          >
            <img
              className="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr className="line" />
    </li>
  )
}
export default CommentItem
