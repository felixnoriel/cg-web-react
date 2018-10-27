import React, { Component } from 'react';
import { connect } from 'react-redux';

import { modifyWordpressObject,
		 modifyArchiveByViewSubType, } from '../helpers/helper';
import EventsArchive from '../components/Events/EventsArchive';
import EventsPost from '../components/Events/EventsPost';

class EventsContainer extends Component{


	render(){
		const { eventsArchive, eventsPost, globalSettings } = this.props;
		console.log(this.props);
		if( globalSettings.viewType === "archive"){
			
			// pass the archive object based on the view by in settings
			const archiveToPass = eventsArchive[globalSettings.viewBy].archive;

			const modifiedArchive = modifyArchiveByViewSubType(globalSettings.viewSubType, archiveToPass);
			// Always use helper.modifyWordpressObject when using wordpress data to make it standard
            // use modifiedWPObj.custom_modified for details like content, tags, images, add more if needed
            // make sure you modify the object before passing it to a component to avoid multiple modification
			return <EventsArchive globalSettings={globalSettings} archive={modifiedArchive}/>

		}else if( globalSettings.viewType === "post"){
			
			// pass the post object based on the view by in settings
			const postToPass = eventsPost[globalSettings.viewBy].post[0]; // it's an array, so pass the first index

			
			// Always use helper.modifyWordpressObject when using wordpress data to make it standard
	      	// use modifiedWPObj.custom_modified for details like content, tags, images, add more if needed
	      	// make sure you modify the object before passing it to a component to avoid multiple modification
	    	const modifiedWPObj = modifyWordpressObject(postToPass);

			// pass additional data if needed
			return <EventsPost globalSettings={globalSettings}  post={modifiedWPObj}/>

		}
		
		// this could return Error page - 404, implement later on
		return ( <div>Invalid or not implemented globalSettings view type</div>);
	}

}

const mapStateToProps = state => ({
  // Only map state needed in this container
  eventsArchive: state.archive.events,
  eventsPost: state.post.events,
  globalSettings: state.settings.globalSettings,
})

// add comments functionality later
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
