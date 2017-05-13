import React from 'react';
import { connect } from 'react-redux';


class FlashMessageList extends React.Component{
  render() {
    const messages = this.props.messages.map(message => {
      return(
        <h1>{message.text}p</h1>
      )
    });
    return(
      <h1>{messages}</h1>
    )
  }
}


function mapStateToProps(state) {
  return({
    messages: state.flashMessages
  })
};


export default connect(mapStateToProps)(FlashMessageList);
