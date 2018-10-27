import { Component } from 'react';

import './Dessert.scss';
import ArchiveCategoryBlock from '../../Blocks/Archive/ArchiveCategoryBlock';
import ArchiveBlock from '../../Blocks/Archive/ArchiveBlock';

class DessertArchive extends Component{

	render(){
		const { archive, globalSettings } = this.props;
		if(globalSettings.viewSubType === "items"){
			// implement your own layout here
			// default is ArchiveBlock
			// This returns items of the category. eg: /menu/Dessert/cake
			return (<div className="dessert-wrapper archive">
						<ArchiveBlock archive={ archive }/>
					</div>)	
		}else{
			// implement your own layout here
			// default is ArchiveCategoryBlock
			// This returns categories of the posttype. eg: /menu/Dessert
			return (<div className="dessert-wrapper archive">
						<ArchiveCategoryBlock archive={ archive }/>
					</div>)
		}

		return (<div> Dessert archive wrong implementation </div>)
		
	}
}

export default DessertArchive;