import { Component } from 'react';

import './Archive.scss';
import ArchiveSingleBlock from './ArchiveSingleBlock';

class ArchiveBlock extends Component{

    render(){

    	const { archive } = this.props;

    	if( !archive || archive.length <= 0 ){
    		return "can't map archive - empty or not an array";
    	}
    	
       	return (<div className="archive-container">
       			      <MapArchiveList archive={archive}/>
       			    </div>
       	)
    }
}

const MapArchiveList = ({archive}) => {
  return archive.map( archiveItem => {
      return <ArchiveSingleBlock key={archiveItem.id} archiveItem={archiveItem}/>
   })
}

export default ArchiveBlock;