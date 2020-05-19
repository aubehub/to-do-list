import React from 'react';
import PropTypes from 'prop-types';

export class Item extends React.Component{

  render() {
    return(
      <div className="wrap-items">
        <div className="item">
          <p>{this.props.item.description}</p>
        </div>

        <div className="button">
          {this.props.item.done? '✅':  
        <button className="done-button" onClick={() => this.props.doneItem(this.props.item)}>
          <span role="img" aria-label="tick">✅</span>
          </button>}
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object
}