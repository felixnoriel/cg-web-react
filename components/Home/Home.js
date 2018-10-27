import { Component } from 'react';
import './Home.scss';

import ArchiveBlock from '../Blocks/Archive/ArchiveBlock';
import ArchiveCategoryBlock from '../Blocks/Archive/ArchiveCategoryBlock';

class Home extends Component{

	render(){
		const { menuArchive, locationArchive, eventsArchive } = this.props

		// you can implement your own layout here - default are blocks from archive
		return (<div className="home-wrapper">
                    <h1>Home Component</h1>

                    <div className="menu">
                    	<h2>Menu</h2>
                    	<ArchiveCategoryBlock archive={menuArchive}/>
                    </div>
                    <div className="events">
                    	<h2>Events</h2>
                    	<ArchiveCategoryBlock archive={eventsArchive}/>
                    </div>
                    <div className="location">
                    	<h2>Location</h2>
                    	<ArchiveBlock archive={locationArchive}/>
                    </div>
                </div>)
	}
}

export default Home;