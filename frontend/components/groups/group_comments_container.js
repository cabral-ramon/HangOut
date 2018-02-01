import { connect } from 'react-redux';
import GroupComments from './group_comments';

const mapStateToProps = (state, ownProps) => {
  const comments = state.groups[parseInt(ownProps.match.params.id)].comments;
  return {
    comments: comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupComments);
