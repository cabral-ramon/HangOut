import React from 'react';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
  }

  renderMembers() {
    // return (
    //   <ul>
    //     {this.props.members.map( (member) => (
    //       <li key={member.id}>{member.username}</li>
    //     ))}
    //   </ul>
    // );
  }

  handleSubmit(e) {
    e.preventDefault();
    const groupId = this.props.group.id;
    const userId = this.props.currentUser.id;
    const membership = Object.assign({}, { group_id: groupId, user_id: userId});
    this.props.createMembership(membership);
  }

  renderButton() {
    let buttonText;
    const groupMembers = this.props.memberIds;
    if ( this.props.currentUser ) {
      if ( groupMembers.includes(this.props.currentUser.id) ) {
        buttonText = "Leave Group";
        return (
          <button>{buttonText}</button>
        );
      }
    }
    buttonText = "Join Group";
    return (
      <button
       className="group-show-button"
       onClick={this.handleSubmit}
       >{buttonText}</button>
    );
  }



  render() {
    return (
      <div className="group-show-main">
        <div className="group-show-container">
          <section className="group-show-image-container">
            <img className="group-show-image"
              src={this.props.group.image}/>
            <div className="group-info-container">
              <h2 className="group-show-name">
                {this.props.group.name}</h2>
              <p>{this.props.group.location}</p>
              {this.renderButton()}
            </div>
          </section>
          <section className="group-show-section">
            <article>
              <h2>About this Hangout:</h2>
              <p>{this.props.group.description}</p>
            </article>
            <aside className="members-container">
              <h3><span>({this.props.memberIds.length})</span> Members</h3>
              {this.renderMembers()}
            </aside>
          </section>
        </div>
      </div>
    );
  }
}

export default GroupShow;
