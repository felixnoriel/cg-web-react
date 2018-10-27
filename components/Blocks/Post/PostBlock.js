import { Component } from 'react';
import './PostBlock.scss';

class PostBlock extends Component{

    render(){
    	const { post } = this.props;

        return (<div className="post-block">
        			<h1>you are viewing post { post.title.rendered }</h1>
        			<img src={post.custom_modified.featuredImgSrc.source_url} />
        		</div>)
    }
}

export default PostBlock;