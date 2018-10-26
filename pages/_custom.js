// import containers mapped to its own post type
import Header from '../containers/HeaderContainer';
import Footer from '../containers/FooterContainer';
import Home from '../containers/HomeContainer';
import Events from '../containers/EventsContainer';
import Menu from '../containers/MenuContainer';
import Page from '../containers/PageContainer';

// import components
import Error from '../components/Error/Error';

// Function to determine the component for each post type
export default function mapComponentToPostType(posttype) {

  let Component = components[posttype];

  if (!Component){ // If there is no component attached to a post type or is a broken url, return Error component
    Component = () => <Error />;
  }
	return (<div className="page-wrapper">
            <Header />
	            <Component />
	          <Footer />
          </div>)
}

// Smart components - has access to store, access all data needed from store
const components = {
  menu: () => <Menu />,
  events: () => <Events />,
  page: () => <Page />,
  home: () => <Home />,
  error: () => <Error />
}
