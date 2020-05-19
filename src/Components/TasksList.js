import React from 'react';
import { Item } from './Item';
import PropTypes from 'prop-types';


export class TasksList extends React.Component {

  render(){
    return(
      <div className="to-do-list-tasks">
        <h2>Tasks</h2>
        {
          this.props.items
          .filter(item => item.type==='task')
          .map((item, key)=> {
          return <Item item={item} key={key}
          doneItem={this.props.doneItem}/>
          })
        }
      </div>
    )
  }
}
  
TasksList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}