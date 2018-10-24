import React, { Component } from 'react';
import { connect } from 'react-redux';
import Socials from '../components/Socials';
import { Link } from '../routes'

class FooterContainer extends Component {

 render() {

  return (<footer>
          Your footer goes here
         </footer>
  );


 }
}


const mapStateToProps = state => ({
 ...state
})
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
