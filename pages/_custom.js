// import containers mapped to its own post type
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';
import HomeContainer from '../containers/HomeContainer';
import EventsContainer from '../containers/EventsContainer';
import MenuContainer from '../containers/MenuContainer';
import PageContainer from '../containers/PageContainer';
import LocationContainer from '../containers/LocationContainer';
import DefaultContainer from '../containers/DefaultContainer';

// import components
import Error from '../components/Error/Error';

// Function to determine the component for each post type
export default function mapComponentToPostType(posttype) {

  let Component = components[posttype];

  if (!Component){ // If there is no component attached to a post type or is a broken url, return Error component
    Component = () => <Error />;
  }
	return (<div className="page-wrapper">
            <HeaderContainer />
	            <Component />
	          <FooterContainer />
          </div>)
}

// Smart components - has access to store, access all data needed from store
// add new post types here
// use DefaultContainer for just general stuff
const components = {
  menu: () => <MenuContainer />,
  events: () => <EventsContainer />,
  page: () => <PageContainer />,
  location: () => <LocationContainer />,
  home: () => <HomeContainer />,
  error: () => <Error />,
  search: () => <DefaultContainer />,
}
