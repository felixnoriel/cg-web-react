import { Component } from 'react';
import './Location.scss';

import ArchiveBlock from '../Blocks/Archive/ArchiveBlock';

class LocationArchive extends Component{

	render(){
		const { archive } = this.props;

		// implement your own layout here or if non return default ArchiveBlock
		// if you do, use modifyWordpressObject to modify the object and that's what you use

		return (<div className="location-wrapper archive">
					<ArchiveBlock archive={ archive }/>
				</div>)
	}
}

export default LocationArchive;