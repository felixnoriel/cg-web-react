import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home/Home';

class HomeContainer extends Component{

	render(){
		const { events, menu } = this.props;

		// pass needed data to events as props
		return ( <Home events={events} 
					   menu={menu}
					  />
		);
	}
}

const mapStateToProps = state => ({
  // Only map state needed in this container
  events: state.events,
  menu: state.menu,
})

// add comments functionality later
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
