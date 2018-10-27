import { Component } from 'react';

import './Location.scss';
import PostBlock from '../Blocks/Post/PostBlock';

class LocationPost extends Component{

	render(){
		const { post } = this.props;

		// implement your own layout here or if non return default PostBlock

		return (<div className="location-wrapper post">
				 <PostBlock post={post}/>
				</div>)
	}
}

export default LocationPost;