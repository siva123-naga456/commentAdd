import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentList: [],
  }

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  CommentAdd = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundClassNames = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newList = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      IsLike: false,
      date: new Date(),
      initialClassName: initialBackgroundClassNames,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newList],
      nameInput: '',
      commentInput: '',
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    this.setState({commentList: commentList.filter(each => each.id !== id)})
  }

  LikeImageTrigger = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (each.id === id) {
          return {...each, IsLike: !prevState.IsLike}
        }
        return each
      }),
    }))
  }

  render() {
    const {commentList, nameInput, commentInput} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">Comments</h1>
        <div className="form-container">
          <form className="form" onSubmit={this.CommentAdd}>
            <p className="para">Say something about 4.0 technologies</p>
            <input
              type="text"
              className="name-input"
              value={nameInput}
              placeholder="Your Name"
              onChange={this.onChangeName}
            />
            <textarea
              className="comment-input"
              placeholder="Your Comment"
              value={commentInput}
              onChange={this.onChangeComment}
            />
            <button type="submit" className="btn">
              Add Comment
            </button>
          </form>

          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
          />
        </div>
        <div className="addComment-container">
          <button type="button" className="comment-btn">
            {commentList.length}
          </button>
          <p>Comments</p>
        </div>
        <ul>
          {commentList.map(each => (
            <CommentItem
              userDetails={each}
              key={each.id}
              deleteComment={this.deleteComment}
              LikeImageTrigger={this.LikeImageTrigger}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
