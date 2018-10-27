import { Component } from 'react';

import './Beverage.scss';
import PostBlock from '../../Blocks/Post/PostBlock';

class BeveragePost extends Component{

	render(){
		const { post } = this.props;

		// implement your own layout here or if non return default PostBlock

		return (<div className="beverage-wrapper post">
				 <PostBlock post={post}/>
				</div>)
	}
}

export default BeveragePost;