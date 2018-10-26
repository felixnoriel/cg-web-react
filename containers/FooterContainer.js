import React, { Component } from 'react';
import { connect } from 'react-redux';

class FooterContainer extends Component {

 render() {

  return (<footer>
          Your footer goes here
         </footer>
  );


 }

}

// Map the state needed in this container
const mapStateToProps = state => ({ 
 // Only map state needed in this container
 ...state
})

// Map the state needed in this container
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
