import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';

class HomeContainer extends Component{

	render(){
		const { events, food, drinks, dessert } = this.props;
		
		// pass needed data to events as props
		return ( <Home events={events} 
					   food={food} 
					   drinks={drinks} 
					   dessert={dessert} 
					  />
		);
	}
}

const mapStateToProps = state => ({
  events: state.events,
  food: state.food,
  drinks: state.drinks,
  dessert: state.dessert,
})

// add comments functionality later
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
