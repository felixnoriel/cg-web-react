import { Component } from 'react';

import './Archive.scss';

// This returns an archive category layout. for eg: menu, events -> different from normal archive layout
class ArchiveCategoryBlock extends Component{

    render(){

    	const { archive } = this.props;

    	if( !archive || archive.length <= 0 ){
    		return "can't map archive - empty or not an array";
    	}
    	
       	return (<div className="archive-container">
                  <MapArchiveCategory archive={archive}/>
       			    </div>
       	)
    }
}

const MapArchiveCategory = ({archive}) => {
  if(!archive){return;}
  return archive.map( item => {
    return (<p key={item.id}>
              <a href={item.custom_modified.plainHrefLink}>{ item.name }</a>
            </p>)
  })
}

export default ArchiveCategoryBlock;