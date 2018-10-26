// add new types on every new post type created
export const GET_ARCHIVE = {
				menu: {
					list: 'GET_ARCHIVE_MENU',
					food: 'GET_ARCHIVE_MENU_FOOD',
					drinks: 'GET_ARCHIVE_MENU_DRINKS',
					dessert: 'GET_ARCHIVE_MENU_DESSERT',
				},
				events: {
					list: 'GET_ARCHIVE_EVENTS',
					birthday: 'GET_ARCHIVE_EVENTS_BIRTHDAY',
					corporate: 'GET_ARCHIVE_EVENTS_CORPORATE',
					wedding: 'GET_ARCHIVE_EVENTS_WEDDING',
				},
				location: 'GET_ARCHIVE_LOCATION' // implement later on
			 }
			 
export const GET_POST = { 
				menu: {
					food: 'GET_POST_MENU_FOOD',
					drinks: 'GET_POST_MENU_DRINKS',
					dessert: 'GET_POST_MENU_DESSERT',
				},
				events: {
					birthday: 'GET_POST_EVENTS_BIRTHDAY',
					corporate: 'GET_POST_EVENTS_CORPORATE',
					wedding: 'GET_POST_EVENTS_WEDDING',
				},
				location: 'GET_POST_LOCATION', // implement later on
			 };

export const GET_PAGE = 'GET_PAGE';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_BURGER_MENU = 'GET_BURGER_MENU';
export const GET_SEARCH = 'GET_SEARCH';