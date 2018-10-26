import React, { Component } from 'react';
import { connect } from 'react-redux';

import helper from '../helpers/helper';
import BurgerMenu from '../components/Header/BurgerMenu';
import HeadCustom from '../components/Header/HeadCustom';

class HeaderContainer extends Component {

   constructor(props){
     super(props);
     this.state = {
       
     }
   }

   render() {
     const { burgerMenu } = this.props;

     return ( <header>
                <HeadCustom />
                <BurgerMenu burgerMenu={burgerMenu} />
              </header>
      );
 }
}

const mapStateToProps = state => ({
  // Only map state needed in this container
  burgerMenu: state.settings.burgerMenu
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
