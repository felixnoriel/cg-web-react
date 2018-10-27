import { Component } from 'react';

import './Events.scss';
import ArchiveCategoryBlock from '../Blocks/Archive/ArchiveCategoryBlock';
import ArchiveBlock from '../Blocks/Archive/ArchiveBlock';

class EventsArchive extends Component{

	render(){
		const { archive, globalSettings } = this.props;
		if(globalSettings.viewSubType === "items"){
			// implement your own layout here
			// default is ArchiveBlock
			// This returns items of the category. eg: /events/birthday
			return (<div className="location-wrapper archive">
						<ArchiveBlock archive={ archive }/>
					</div>)	
		}else{
			// implement your own layout here
			// default is ArchiveCategoryBlock
			// This returns categories of the posttype. eg: /events
			return (<div className="location-wrapper archive">
						<ArchiveCategoryBlock archive={ archive }/>
					</div>)
		}

		return (<div> Events archive wrong implementation </div>)
		
	}
}

export default EventsArchive;