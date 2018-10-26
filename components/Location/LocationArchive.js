import { Component } from 'react';
import './Location.scss';

import ArchiveBlock from '../Blocks/Archive/ArchiveBlock';

class LocationArchive extends Component{

	render(){
		const { locationArchive } = this.props;

		
		const archive = getArchiveInList(locationArchive);

		// default is using ArchiveBlock
		// implement your own layout here
		return (<div className="location-wrapper">
					<ArchiveBlock archive={ archive }/>
				</div>)
	}
}

function getArchiveInList(archiveList){
	for(let i in archiveList){ // check if any archive inside this object - for subcategories
		const catArchive = archiveList[i];
		if(catArchive && catArchive.archive){
			return catArchive.archive;
		}
	}
	return null;
}

export default LocationArchive;