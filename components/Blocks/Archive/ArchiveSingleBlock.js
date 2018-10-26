import { Component } from 'react';

import './Archive.scss';
import { modifyWordpressObject } from '../../../helpers/helper';

class ArchiveSingleBlock extends Component{

    render(){

    	const { archiveItem } = this.props;

      // Always use helper.modifyWordpressObject when using wordpress data to make it standard
      // use modifiedWPObj.custom_modified for details like content, tags, images, add more if needed
    	const modifiedWPObj = modifyWordpressObject(archiveItem);
      console.log(modifiedWPObj);

      return(<div className="archive-item">
                <a href={modifiedWPObj.custom_modified.devHrefLink}>{ modifiedWPObj.title.rendered }</a>
            </div>)
    }
}

export default ArchiveSingleBlock;