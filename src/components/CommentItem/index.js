import {Component} from 'react'
import './index.css'

class CommentItem extends Component {
  state = {
    isLike: true,
  }

  onClickingLike = () => {
    const {isLike} = this.state
    if (isLike === true) {
      this.setState({
        isLike: false,
      })
    } else {
      this.setState({
        isLike: true,
      })
    }
  }

  render() {
    const {isLike} = this.state
    const {commentDetails, onDeleteComment} = this.props
    const {name, comment, postTime, id} = commentDetails
    const likeEmoji = isLike
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    const likeColor = isLike ? '' : 'isLike-bg'

    const onDelCommnet = () => {
      onDeleteComment(id)
    }

    return (
      <li className="bg-container">
        <div className="name-cont">
          <div className="logo">
            <h1 className="logo-icon">R</h1>
          </div>
          <div>
            <div className="name-cont">
              <h1 className="head">{name}</h1>
              <p className="logo-icon">{postTime}</p>
            </div>
            <p>{comment}</p>
          </div>
        </div>
        <div className="c-cont">
          <button
            type="button"
            className="button name-cont"
            onClick={this.onClickingLike}
          >
            <img src={`${likeEmoji}`} alt="like" />
            <p className={`logo-icon ${likeColor}`}>Like</p>
          </button>

          <div>
            <button type="button" onClick={onDelCommnet} data-testid="delete">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </li>
    )
  }
}
export default CommentItem
