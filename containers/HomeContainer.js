import React, { Component } from 'react';
import { connect } from 'react-redux';

import { modifyArchiveByViewSubType, } from '../helpers/helper';

import Home from '../components/Home/Home';

class HomeContainer extends Component{

	render(){
		const { archive, globalSettings } = this.props;
		

		// Always use helper.modifyWordpressObject when using wordpress data to make it standard
        // use modifiedWPObj.custom_modified for details like content, tags, images, add more if needed
        // make sure you modify the object before passing it to a component to avoid multiple modification
		const menuArchive = modifyArchiveByViewSubType("category", archive.menu.menu.archive);
		const locationArchive = modifyArchiveByViewSubType("items", archive.location.location.archive);
		const eventsArchive = modifyArchiveByViewSubType("category", archive.events.events.archive);

		// pass needed data to events as props
		return ( <Home 
					menuArchive={menuArchive}
					locationArchive={locationArchive}
					eventsArchive={eventsArchive}
					globalSettings={globalSettings}
				  />
		);
	}
}

const mapStateToProps = state => ({
  // Only map state needed in this container
  archive: state.archive,
  globalSettings: state.globalSettings,
})

// add comments functionality later
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
