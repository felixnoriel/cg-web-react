import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventsArchive from '../components/Events/EventsArchive';
import EventsPost from '../components/Events/EventsPost';

class EventsContainer extends Component{

	render(){
		const { eventsArchive, eventsPost } = this.props;

		// pass needed data to events as props
		if(eventsArchive){
			return <EventsArchive eventsArchive={eventsArchive}/>
		}
		if(eventsPost){
			return <EventsPost eventsPost={eventsPost}/>
		}

		// This could return Error page - 404, implement later on
		return ( <div>No events archive or post</div>);
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
