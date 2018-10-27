import { Component } from 'react';

import './Search.scss';
import ArchiveBlock from '../Blocks/Archive/ArchiveBlock';

// this could be implemented in DefaultContainer, feel free to change it
import { modifyArchiveByViewSubType } from '../../helpers/helper';

class Search extends Component {

	componentDidMount(){
		const { searchText } = this.props.globalSettings;

		// access getSearch props from parent container
		this.props.getSearch(searchText);
	}

	render(){
		const { search } = this.props;

		if(!search || search.isLoading || !search.searchList){
			return <h1 className="loading-search">Loading search...</h1>
		}

		if(search.searchList.length <= 0){
			return <h1 className="results"> No results found... try "burger" or "castle hill"</h1>
		}

		// Always use helper.modifyWordpressObject when using wordpress data to make it standard
        // use modifiedWPObj.custom_modified for details like content, tags, images, add more if needed
        // make sure you modify the object before passing it to a component to avoid multiple modification
		const modifiedArchive = modifyArchiveByViewSubType("items", search.searchList);

		return (<div className="search-wrapper">
					<h1>You searched for: {search.searchText}</h1>
					<div className="results">
						<ArchiveBlock archive={modifiedArchive} />
					</div>
				</div>)
	}
}

export default Search;