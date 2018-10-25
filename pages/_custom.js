import Header from '../containers/Header';
import Footer from '../containers/Footer';

// import containers mapped to its own post type
import Home from '../containers/Home';
import Events from '../containers/Events/Events';
import Menu from '../containers/Menu/Menu';
import Page from '../containers/Page';

// Function to determine the component for each post type
export default function mapComponentToPostType(posttype) {

	const Component = components[posttype];
	return ([<Header />,
	          <Component />,
	        <Footer />])
}

// Smart components - has access to store, access all data needed from store
const components = {
  menu: () => <Menu />,
  drinks: () => <Menu />,
  events: () => <Events />,
  food: () => <Menu />,
  dessert: () => <Menu />,
  page: () => <Page />,
  home: () => <Home />
}
