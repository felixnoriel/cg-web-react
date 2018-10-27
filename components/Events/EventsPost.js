import { Component } from 'react';

import './Events.scss';
import PostBlock from '../Blocks/Post/PostBlock';

class EventsPost extends Component{

	render(){
		const { post } = this.props;

		// implement your own layout here or if non return default PostBlock

		return (<div className="location-wrapper post">
				 <PostBlock post={post}/>
				</div>)
	}
}

export default EventsPost;