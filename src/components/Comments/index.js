import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  state = {
    commentsList: [],
    commentCount: 0,
    name: '',
    comment: '',
  }

  onNameInput = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onCommentInput = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  addCommentBtn = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
      postTime: formatDistanceToNow(new Date()),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      commentCount: prevState.commentCount + 1,
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState(prevState => ({
      commentsList: filteredList,
      commentCount: prevState.commentCount - 1,
    }))
  }

  render() {
    const {commentCount, name, comment, commentsList} = this.state
    return (
      <div className="bg-container">
        <h1 className="head">Comments</h1>
        <div className="comment-cont">
          <div>
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.addCommentBtn}>
              <input
                type="text"
                placeholder="Your Name"
                className="input-text"
                value={name}
                onChange={this.onNameInput}
              />
              <br />
              <textarea
                placeholder="Your Comment"
                rows="6"
                cols="40"
                className="textarea"
                value={comment}
                onChange={this.onCommentInput}
              />
              <br />
              <button
                type="button"
                className="comment-add"
                onClick={this.addCommentBtn}
              >
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="line-h" />
        <p>{commentCount} comments</p>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
