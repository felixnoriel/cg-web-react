import React, { Component } from 'react';
import { connect } from 'react-redux';

import { modifyWordpressObject,
		 modifyArchiveByViewSubType } from '../helpers/helper';
import LocationArchive from '../components/Location/LocationArchive';
import LocationPost from '../components/Location/LocationPost';

class LocationContainer extends Component{

	render(){
		const { locationArchive, locationPost, globalSettings } = this.props;

		if( globalSettings.viewType === "archive"){
			
			// pass the archive object based on the view by in settings
			const archiveToPass = locationArchive[globalSettings.viewBy].archive;

			// Always use helper.modifyArchiveToWordpressObject when using wordpress data to make it standard
	      	// make sure you modified the archive before passing it to a component to avoid multiple modification
	      	const modifiedArchive = modifyArchiveByViewSubType(globalSettings.viewSubType, archiveToPass);

			// pass additional data if needed
			return <LocationArchive globalSettings={globalSettings} archive={modifiedArchive}/>

		}else if( globalSettings.viewType === "post"){
			
			// pass the post object based on the view by in settings
			const postToPass = locationPost[globalSettings.viewBy].post[0]; // it's an array, so pass the first index

			
			// Always use helper.modifyWordpressObject when using wordpress data to make it standard
	      	// use modifiedWPObj.custom_modified for details like content, tags, images, add more if needed
	      	// make sure you modify the object before passing it to a component to avoid multiple modification
	    	const modifiedWPObj = modifyWordpressObject(postToPass);

			// pass additional data if needed
			return <LocationPost globalSettings={globalSettings}  post={modifiedWPObj}/>
		}
		
		// this could return Error page - 404, implement later on
		return ( <div>this is Location container - wrong implementation</div>);
	}
}



const mapStateToProps = state => ({
  // Only map state needed in this container
  locationArchive: state.archive.location,
  locationPost: state.post.location,
  globalSettings: state.settings.globalSettings,
})

// add comments functionality later
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer);
