import React from "react";

import "./postListItem.css"

export default class PostListItem extends React.Component {
  render() {
    const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props
    let classNames = 'list-item ';
    if(important) {
      classNames += ' important';
    }
    if(like) {
      classNames += ' like';
    }
    let animated = "trash-btn ";
    if(onDelete) {
      animated += " animated";
    }
    return(
      <div className={classNames}>
        <span className="comment " onClick={onToggleLiked} >
        {label}
        </span>
        <div className="event-btn">
          <button 
            type="button"
            className="star-btn"
            onClick={onToggleImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button 
            type="button"
            className={animated}
            onClick={onDelete}>
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart"></i>
      </div>
    </div>
    )
  }
}
