import React, { Component } from 'react'
import Contact from './Contact'
class Contacts extends Component {
    
  constructor(){
      super();
      this.state = {
        contacts : [
          {
              id : 1,
              name: 'Prakash',
              email: 'prakash@gmail.com',
              phone: '8056265408'
          },
          {
              id : 2,
              name: 'Naresh',
              email: 'naresh@gmail.com',
              phone: '8056265408'
          },
          {
              id : 3,
              name: 'James',
              email: 'james@gmail.com',
              phone: '8056265408'
            }
          ]
        }
    }

    /* no binding is needed if the function is calling from the props without passing any paramenter
       if function needs any parameter, then function needs to be binded actually at where function is called*/
    /* filer function acception arrow function which has only single line.
       arrow function do not have any curly braces  */
    deleteContact = function(id){
      const { contacts } = this.state;
      const newContact = contacts.filter( (contact) => contact.id !== id);
      this.setState({
        contacts : newContact
      });
    }

  render() {
    var { contacts } = this.state;
    return (
      <React.Fragment>
          { 
            /*map function used to manupulate the array values 
            and also map takes only single line arrow functions */
            contacts.map((contact) => 
             <Contact key={contact.id} 
                eachContact={contact} 
                deleteClickHandler = {this.deleteContact.bind(this , contact.id)}
                >
             </Contact>) 
          }
      </React.Fragment>
    )
  }
}
export default Contacts;
