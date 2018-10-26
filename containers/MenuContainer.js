import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../components/Menu/Menu';

class MenuContainer extends Component{

	render(){
		const { menuArchive, menuPost } = this.props;
        
		// pass needed data to Menu as props
		return ( <Menu menu={menuArchive} menuPost={menuPost} />);
	}
}

const mapStateToProps = state => ({
  // Only map state needed in this container
  menuArchive: state.archive.menu,
  menuPost: state.post.menu,
  globalSettings: state.settings.globalSettings,
})

// add comments functionality later
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
