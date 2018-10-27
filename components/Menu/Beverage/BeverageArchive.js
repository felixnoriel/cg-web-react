import { Component } from 'react';

import './Beverage.scss';
import ArchiveCategoryBlock from '../../Blocks/Archive/ArchiveCategoryBlock';
import ArchiveBlock from '../../Blocks/Archive/ArchiveBlock';

class BeverageArchive extends Component{

	render(){
		const { archive, globalSettings } = this.props;
		if(globalSettings.viewSubType === "items"){
			// implement your own layout here
			// default is ArchiveBlock
			// This returns items of the category. eg: /menu/Beverage/wine
			return (<div className="beverage-wrapper archive">
						<ArchiveBlock archive={ archive }/>
					</div>)	
		}else{
			// implement your own layout here
			// default is ArchiveCategoryBlock
			// This returns categories of the posttype. eg: /menu/Beverage
			return (<div className="beverage-wrapper archive">
						<ArchiveCategoryBlock archive={ archive }/>
					</div>)
		}

		return (<div> Beverage archive wrong implementation </div>)
		
	}
}

export default BeverageArchive;