import { Component } from 'react';

import './Archive.scss';
import ArchiveSingleBlock from './ArchiveSingleBlock';

class ArchiveBlock extends Component{

    render(){

    	const { archive } = this.props;
    	const archiveList = archive.map( archiveItem => {
    		return <ArchiveSingleBlock key={archiveItem.id} archiveItem={archiveItem}/>
    	})
       	return (<div className="archive-container">
       			 { archiveList }
       			</div>
       	)
    }
}

export default ArchiveBlock;