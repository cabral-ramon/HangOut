import React from 'react';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
  }

  render() {
    return (
      <div className="group-show-container">
        <section className="group-show-image-container">
          <img className="group-show-image"
            src={this.props.group.image}/>
          <div className="group-info-container">
            <h2 className="group-show-name">
              {this.props.group.name}</h2>
            <p>{this.props.group.location}</p>
          </div>
        </section>
        <article>
          <p>{this.props.group.description}</p>
        </article>
      </div>
    );
  }
}

export default GroupShow;
