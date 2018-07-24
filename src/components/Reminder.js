import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  };

  addReminder() {
    const { text, dueDate } = this.state;
    this.props.addReminder(text, dueDate);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  clearReminders() {
    this.props.clearReminders();
  }

  renderList() {
    const { reminder } = this.props;
    return (
      <ul className="lsit-group col-sm-8 mt-2">
      {
        reminder.map(item => (
          <li key={item.id} className="list-group-item">
            <div className="list-item">
              <div>{item.text}</div>
              <div>{moment(new Date(item.dueDate)).fromNow()}</div>
            </div>
            <div
              className="list-item delete-button"
              onClick={ () => this.deleteReminder(item.id) }
            >
              &#x2715;
            </div>
          </li>
        ))
      }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>

        <div className="form-inline">
          <div className="form-group mr-2">
            <input 
              type="text" 
              onChange={(e) => this.setState({text: e.target.value})} 
              className="form-control" 
              placeholder="I have to..." 
            />
            <input
              type="datetime-local"
              className="form-control"
              onChange={ (event) => this.setState({dueDate: event.target.value}) }
            />
          </div>
          <button 
            type="button" 
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >Add Reminder</button>
        </div>
        { this.renderList() }
        <div 
          className="btn btn-danger mt-3"
          onClick={ () => this.clearReminders() }
        >
          Clear Reminders
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reminder: state.reminder
  };
};

export default connect(mapStateToProps , { addReminder, deleteReminder, clearReminders })(Reminder);
