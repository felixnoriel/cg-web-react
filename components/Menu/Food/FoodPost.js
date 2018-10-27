import { Component } from 'react';

import './Food.scss';
import PostBlock from '../../Blocks/Post/PostBlock';

class FoodPost extends Component{

	render(){
		const { post } = this.props;

		// implement your own layout here or if non return default PostBlock

		return (<div className="food-wrapper post">
				 <PostBlock post={post}/>
				</div>)
	}
}

export default FoodPost;