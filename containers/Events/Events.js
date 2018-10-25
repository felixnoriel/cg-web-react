import React, { Component } from 'react';
import { connect } from 'react-redux';

import Events from '../../components/Events/EventsExample';

class EventsContainer extends Component{

	render(){
		const { events } = this.props;

		// pass needed data to events as props
		return ( <Events events={ events } />);
	}
}

const mapStateToProps = state => ({
  events: state.events,
})

// add comments functionality later
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
