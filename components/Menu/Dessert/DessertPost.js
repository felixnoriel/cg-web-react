import { Component } from 'react';

import './Dessert.scss';
import PostBlock from '../../Blocks/Post/PostBlock';

class DessertPost extends Component{

	render(){
		const { post } = this.props;

		// implement your own layout here or if non return default PostBlock

		return (<div className="dessert-wrapper post">
				 <PostBlock post={post}/>
				</div>)
	}
}

export default DessertPost;