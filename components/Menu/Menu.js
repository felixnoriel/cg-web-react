import { Component } from 'react';
import './Menu.scss';

import FoodArchive from './Food/FoodArchive';
import BeverageArchive from './Beverage/BeverageArchive';
import DessertArchive from './Dessert/DessertArchive';

import FoodPost from './Food/FoodPost';
import BeveragePost from './Beverage/BeveragePost';
import DessertPost from './Dessert/DessertPost';

import ArchiveBlock from '../Blocks/Archive/ArchiveBlock';
import ArchiveCategoryBlock from '../Blocks/Archive/ArchiveCategoryBlock';
import PostBlock from '../Blocks/Post/PostBlock';

class Menu extends Component{

	render(){
		const { globalSettings, archive, post } = this.props

		if(globalSettings.viewBy === "menu"){
			return (<div className="menu-wrapper">
						<ArchiveCategoryBlock archive={archive}/>
					</div>)
		}else{

			if(globalSettings.viewType === "archive"){
				let Component = mapMenuArchiveComponent[globalSettings.viewBy];

				if(!Component){ 
					// no component mapped, return default ArchiveBlock
					if(globalSettings.viewSubType === "items"){
						Component = (props) => <ArchiveBlock {...props}/>
					}else{
						Component = (props) => <ArchiveCategoryBlock {...props}/>
					}
				}

				return <Component archive={archive} globalSettings={globalSettings} />

			}else if(globalSettings.viewType === "post"){
				let Component = mapPostArchiveComponent[globalSettings.viewBy];
				if(!Component){ 
					// no component mapped, return default PostBlock
					Component = (props) => <PostBlock {...props}/>
				}

				return <Component post={post} globalSettings={globalSettings} />
			}
		}
	}
}

const MenuLayout = () => {

}

// This will return their own components
// map Archive components
const mapMenuArchiveComponent = {
	food: (props) => <FoodArchive {...props}/>,
	dessert: (props) => <DessertArchive {...props}/>,
	beverage: (props) => <BeverageArchive {...props}/>,
}

// This will return their own components
// map Archive components
const mapPostArchiveComponent = {
	food: (props) => <FoodPost {...props}/>,
	dessert: (props) => <DessertPost {...props}/>,
	beverage: (props) => <BeveragePost {...props}/>,
}

export default Menu;