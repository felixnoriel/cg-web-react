import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../components/Menu/MenuExample';

class MenuContainer extends Component{

	render(){
		const { menu } = this.props;
        
        if(!menu){
            return 'no data menu';
        }
        console.log(menu);
        if (menu.menuArchive) {
            return ( <Menu menu={menu} />); // Return menu container
        }
        if(menu.foodArchive){

        }
		// pass needed data to Menu as props
		return ( <Menu menu={menu} />);
	}
}

const mapMenuComponent = () => {

}

const mapStateToProps = state => ({
  // Only map state needed in this container
  menu: state.menu
})

// add comments functionality later
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
