import React from 'react';
import { Item } from './Item';
import PropTypes from 'prop-types';


export class EventsList extends React.Component {
  
  render(){
    return(
      <div className="to-do-list-events">
        <h2>Events</h2>
        {
          this.props.items
          .filter(item => item.type==='event')
          .map((item, key)=> {
          return <Item item={item} key={key}
          doneItem={this.props.doneItem}/>
          })
        }
      </div>
    )
  }
}

EventsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}