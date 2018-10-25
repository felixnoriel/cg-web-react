import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../../components/Menu/MenuExample';

class MenuContainer extends Component{

	render(){
		const { food, drinks, dessert } = this.props;

		// pass needed data to Menu as props
		return ( <Menu food={food} drinks={drinks} dessert={dessert} />);
	}
}

const mapStateToProps = state => ({
  food: state.food,
  dessert: state.dessert,
  drinks: state.drinks,
})

// add comments functionality later
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
