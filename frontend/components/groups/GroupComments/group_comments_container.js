import { connect } from 'react-redux';
import GroupComments from './group_comments';
import { createComment } from '../../../actions/group_actions';
import { deleteComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUser = {};
  let comments = [];
  let members = {};
  let group = {};
  if (state.groups[parseInt(ownProps.match.params.id)]) {
    comments = state.groups[parseInt(ownProps.match.params.id)].comments;
    currentUser = state.session.currentUser;
    members = state.members;
    group = state.groups[parseInt(ownProps.match.params.id)];
  }
  return {
    group: group,
    comments: comments,
    currentUser: currentUser,
    members: members
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (commentParams) => dispatch(createComment(commentParams)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupComments);
