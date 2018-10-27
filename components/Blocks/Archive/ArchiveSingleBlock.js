import { Component } from 'react';

import './Archive.scss';

class ArchiveSingleBlock extends Component{

    render(){

    	const { archiveItem } = this.props;
      	
      	return(<div className="archive-item">
	                <a href={archiveItem.custom_modified.plainHrefLink}>{ archiveItem.title.rendered }</a>
	                 <img src={archiveItem.custom_modified.featuredImgSrc.source_url} />
	            </div>)
    }
}

export default ArchiveSingleBlock;