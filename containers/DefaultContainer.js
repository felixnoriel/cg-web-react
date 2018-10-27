import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSearch } from '../store/actions/actions';
import Search from '../components/Search/Search';

// rename default to anything you want
class DefaultContainer extends Component{

	render(){
		const { globalSettings, search } = this.props;

		if(globalSettings.posttype === "search"){

			return <Search getSearch={this.props.getSearch.bind(this)} // pass getSearch function
						   globalSettings={globalSettings}
						   search={search} />

		}


		// This could return Error page - 404, implement later on
		return ( <div>you are in default container</div>);
	}

}

const mapStateToProps = state => ({
  // Only map state needed in this container
  globalSettings: state.settings.globalSettings,
  search: state.settings.search,
})

// add functions to access store here
const mapDispatchToProps = dispatch => ({
	getSearch: (searchText) => dispatch(getSearch({searchText:searchText}))
})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultContainer);
