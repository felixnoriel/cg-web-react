import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocationArchive from '../components/Location/LocationArchive';
import LocationPost from '../components/Location/LocationPost';

class LocationContainer extends Component{

	render(){
		const { locationArchive, locationPost, globalSettings } = this.props;
		console.log(this.props);


		// pass needed data to location as props
		if(locationArchive){
			// return <LocationArchive locationArchive={locationArchive}/>
		}
		if(locationPost){
			return <LocationPost locationPost={locationPost}/>
		}
		
		// this could return Error page - 404, implement later on
		return ( <div>No location archive or post</div>);
	}
}

function checkIfArchiveIsEmpty(archive, settings){

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
