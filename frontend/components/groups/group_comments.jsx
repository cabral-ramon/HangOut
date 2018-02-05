import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

class GroupComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
    this.createComment = this.createComment.bind(this);
    this.renderCommentForm = this.renderCommentForm.bind(this);

  }

  createComment(e) {
    e.preventDefault();
    const comment = {
      groupId: this.props.group.id,
      comment: {
        author_id: this.props.currentUser.id,
        group_id: this.props.group.id,
        body: this.state.body
      }
    };
    this.props.createComment(comment);
    this.setState(merge({}, this.state, {body: ""}));
  }

  update(){
    return (e) => this.setState(merge({}, this.state,
      {body: e.currentTarget.value}));
  }

  renderCommentForm(){
    if (this.props.members) {
      if (this.props.members[this.props.currentUser.id]){
        return (
          <div id="new-comment-wrapper">
            <span className="comment-form-username">{this.props.currentUser.username}</span>
            <form onSubmit={this.createComment}
              className="comment-form">
              <input type="textarea" placeholder="Start a discussion..."
                onChange={this.update()}
                value={this.state.body}></input>
              <button id="comment-form-button">Comment</button>
            </form>
          </div>
        );
      }
    }
    return null;
  }

  render() {
    if (this.props.comments) {
      return (
        <div className="comment-container">
          <div className="group-comment-container">
            <h3>Discussions ({this.props.comments.length})</h3>
            {this.renderCommentForm()}
            <ul>
              {this.props.comments.map( (comment) => {
                if (this.props.members[comment.author_id]) {
                  return (
                    <div className="comment-list-wrapper" key={comment.id}>
                      <div>
                        <span className="comment-form-username">
                          {this.props.members[comment.author_id].username}
                        </span>
                        <span>|</span>
                        <span className="comment-time-stamp">
                          {comment.created_at.slice(0,10)}
                        </span>
                      </div>
                      <li>
                        <div className="comment-form">
                          <div className="comment-body">
                            {comment.body}
                          </div>
                        </div>
                      </li>
                    </div>
                  );
                } else return null;
              }, this
            )}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default GroupComments;
