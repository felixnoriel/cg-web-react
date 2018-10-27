import { Component } from 'react';

import './Food.scss';
import ArchiveCategoryBlock from '../../Blocks/Archive/ArchiveCategoryBlock';
import ArchiveBlock from '../../Blocks/Archive/ArchiveBlock';

class FoodArchive extends Component{

	render(){
		const { archive, globalSettings } = this.props;
		if(globalSettings.viewSubType === "items"){
			// implement your own layout here
			// default is ArchiveBlock
			// This returns items of the category. eg: /menu/food/main
			return (<div className="food-wrapper archive">
						<ArchiveBlock archive={ archive }/>
					</div>)	
		}else{
			// implement your own layout here
			// default is ArchiveCategoryBlock
			// This returns categories of the posttype. eg: /menu/food
			return (<div className="food-wrapper archive">
						<ArchiveCategoryBlock archive={ archive }/>
					</div>)
		}

		return (<div> Food archive wrong implementation </div>)
		
	}
}

export default FoodArchive;