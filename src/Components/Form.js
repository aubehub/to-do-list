import React from 'react';
import PropTypes from 'prop-types';


export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toDoItem: {description: '', type:'task', done: false}}

    this.changeType = this.changeType.bind(this);
    this.changeDescription = this.changeDescription.bind(this)
    this.addItem = this.addItem.bind(this)

  }

  changeType(e) {
    const opt = e.target.value;
    this.setState({
      toDoItem: {
        ...this.state.toDoItem,
        type: opt
      }
    })
  }

  changeDescription(e) {
    const chg = e.target.value
    this.setState({
      toDoItem: {
        ...this.state.toDoItem,
        description: chg
      }
    })
  }
  
  addItem(e) {
    e.preventDefault()
    this.props.addItem(this.state.toDoItem)
  } // llamada a addItem de App


  render() {
    return(
      <form onSubmit={this.addItem}>
        <div className="radio">
          <label>
            <input type="radio" value="task" name="to do type" onChange={this.changeType} 
            checked={this.state.toDoItem.type === 'task'} 
            />task
          </label>
          <label>
            <input type="radio" value="event" name="to do type" onChange={this.changeType} 
            checked={this.state.toDoItem.type === 'event'} 
            />event
          </label>
        </div>

        <label className="enter-task-wrap">
        <p className="p">Enter your to do task or event:</p>
          <textarea className="text-area" required onChange={this.changeDescription} placeholder="Do the laundry, Dad's birthday...">
            {this.state.toDoItem.description}  
          </textarea>
        </label>
        <input className="submit-button" type='submit' value='add to list'/>
      </form>
    )
  }
}

Form.propTypes = {
  addItem: PropTypes.func
}