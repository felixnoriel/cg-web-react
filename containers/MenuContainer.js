import React, { Component } from 'react';
import { connect } from 'react-redux';

import { modifyWordpressObject,
         modifyArchiveByViewSubType } from '../helpers/helper';
import Menu from '../components/Menu/Menu';

class MenuContainer extends Component{

	render(){
		const { menuArchive, menuPost, globalSettings } = this.props;
        console.log(this.props);

        const menuPropsToPass = {};
		
        if( globalSettings.viewType === "archive"){
            
            // pass the archive object based on the view by in settings
            const archiveToPass = menuArchive[globalSettings.viewBy].archive;

            // Always use helper.modifyCategoryArchiveToWordpressObject when using wordpress data to make it standard
            // use modifiedWPObj.custom_modified for details like content, tags, images, add more if needed
            // make sure you modified the archive before passing it to a component to avoid multiple modification
            menuPropsToPass.archive = modifyArchiveByViewSubType(globalSettings.viewSubType, archiveToPass);

        }else if( globalSettings.viewType === "post"){
            
            // pass the post object based on the view by in settings
            const postToPass = menuPost[globalSettings.viewBy].post[0]; // it's an array, so pass the first index

            // Always use helper.modifyWordpressObject when using wordpress data to make it standard
            // use modifiedWPObj.custom_modified for details like content, tags, images, add more if needed
            // make sure you modify the object before passing it to a component to avoid multiple modification
            menuPropsToPass.post = modifyWordpressObject(postToPass);
        }
        
        // pass additional data if needed
		return ( <Menu { ...menuPropsToPass }
                       globalSettings={globalSettings} />);
	}
}

const mapStateToProps = state => ({
  // Only map state needed in this container
  menuArchive: state.archive.menu,
  menuPost: state.post.menu,
  globalSettings: state.settings.globalSettings,
})

// add comments functionality later
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
