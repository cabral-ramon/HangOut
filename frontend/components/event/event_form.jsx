import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      event: {
        name: "",
        location: "",
        description: "",
        date: "",
        time: "",
      },
      groupId: this.props.groupId
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  update(field) {
    return (e) => this.setState(merge({}, this.state, {event: {[field]: e.currentTarget.value}}));
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state);
    this.props.createEvent(event).then( () => {
      this.props.history.push(`/groups/${this.props.groupId}`);
      this.closeModal();
    });
  }

  renderErrors() {

  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}
          className="event-form-btn">Create new Event</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}
            className="event-form-header">New Event</h2>
          <button onClick={this.closeModal}>close</button>
            <form onSubmit={this.handleSubmit}
              className="event-form">
              <label>Name:
                <input
                  type="text"
                  value={this.state.event.name}
                  onChange={this.update('name')}
                  className="event-form-name"/>
              </label>
              <label>Location:
                <input
                  type="text"
                  value={this.state.event.location}
                  onChange={this.update('location')}
                  className="event-form-location"/>
              </label>
              <label>Description:
                <textarea
                  type="textarea"
                  value={this.state.event.description}
                  onChange={this.update('description')}
                  className="event-form-description"/>
              </label>
              <label>Date:
                <input
                  type="date"
                  value={this.state.event.date}
                  onChange={this.update('date')}
                  className="event-form-date"/>
              </label>
              <label>Time:
                <input
                  type="time"
                  value={this.state.event.time}
                  onChange={this.update('time')}
                  className="event-form-time"/>
              </label>
              <button className="event-form-btn"
                >Create Event!</button>
              {this.renderErrors()}
            </form>
        </Modal>
      </div>
    );
  }
}


export default withRouter(EventForm);