import React, { Component } from 'react';
import { connect } from 'react-redux';

import Page from '../components/Page/Page';

class PageContainer extends Component{

	render(){
		const { page } = this.props;
		
		// pass needed data to events as props
		return ( <Page page={page} />
		);
	}
}

const mapStateToProps = state => ({
  // Only map state needed in this container
  page: state.settings.pageObj,
})

// add comments functionality later
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
