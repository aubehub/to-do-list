import React from 'react';

import './App.css';
import { Form } from './Form';
import { TasksList } from './TasksList';
import { EventsList } from './EventsList';

export class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      toDoItems:[/*{
        description: '',
        type: "event",
        done: false
      }*/]
    }
    this.addItem = this.addItem.bind(this);
    this.setItemAsDone = this.setItemAsDone.bind(this)
  }

  addItem(item) {
    this.setState({
      toDoItems:[ ...this.state.toDoItems, { ...item } ]
    });
  }

  setItemAsDone(oldItem) {
    const newItem = {
      ...oldItem,
      done: true
    } //creamos esta variable para remarcar que el item sobre el que ha hecho click el usuario ahora cambia la propiedad 'done' en true.
    this.setState({
      toDoItems:[
        ...this.state.toDoItems.filter(item => item !== oldItem), newItem
      ]
    });
  }

  render(){
    return (
      <div className="app">
        <h1>TO DO LIST</h1>
        <div className="form">
          <Form addItem={this.addItem}/>
        </div>
        <div className="tasks-and-events">
          <TasksList items={this.state.toDoItems} 
          doneItem={this.setItemAsDone} />
          <EventsList items={this.state.toDoItems}
          doneItem={this.setItemAsDone} />
        </div>
      </div>
    )
    }
  }