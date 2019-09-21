import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Contact extends Component {

  // contructor used to set state and  bind the functions
  // State is an object
  constructor(){
    super();
    this.state = {
      showContactInfo : false
    };
    // funciton binding
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  /* react state are immutable, we can't change the states directly. 
    always use setstate method to changes the state.
    state is an object, so while setting set as an object*/
  onShowClick = (e) => {
    this.setState({showContactInfo : !this.state.showContactInfo });
  }

  //since this method is not a arrow function, so function binded in contructor
  onDeleteClick (id){
    /* Purpose of this fuction
    changing the state of one component from another component.
    deleteClickHandler is a props function. deleteClickHandler function is defined in
    the Contacts component where the Contact component called.*/
    this.props.deleteClickHandler(id);
  }

  render() {
    const { eachContact }  = this.props;
    const { showContactInfo } = this.state;
    return (
      /* Curly braces used to add any JS content inside this ruture perameter
        So function call and sytle uses Curly braces */
      <div className="card card-body mb-3">
          <h4>{eachContact.name}<i onClick = {this.onShowClick}  className="fas fa-sort-down"></i>
          <i className="fas fa-times" 
             style={{cursor : 'pointer', float: 'right', color: 'red' }}
             onClick={this.onDeleteClick.bind(this, eachContact.id)}></i>
          </h4>
          {showContactInfo ? (<ul className="list-group">
              <li className="list-group-item">{eachContact.email}</li>
              <li className="list-group-item">{eachContact.phone}</li>
          </ul>) : null }
          
      </div>
    )
  }
}

// Contact.defaultProps = {
//   name: 'Gnana prakash',
//   email : 'gnanaprakashcheckout@gmail.com',
//   phone : '8056265408'
// }

// Contact.propTypes = {
//   name : PropTypes.string.isRequired,
//   email : PropTypes.string.isRequired,
//   phone : PropTypes.string.isRequired,
// }

export default Contact;
