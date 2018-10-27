import React, { Component } from 'react';
import { connect } from 'react-redux';

import BurgerMenu from '../components/Header/BurgerMenu';
import HeadCustom from '../components/Header/HeadCustom';
import SearchBar from '../components/Search/SearchBar';

class HeaderContainer extends Component {

  render() {
     const { burgerMenu } = this.props;

     return ( <header>
                <HeadCustom />
                <a href="/">Home</a>
                <BurgerMenu burgerMenu={burgerMenu} />
                <SearchBar />
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
