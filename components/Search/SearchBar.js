import { Component } from 'react';

class SearchBar extends Component{

	constructor(props){
		super(props);

		this.state = {
			searchInput: "",
		}
	}

	updateInput = (event, index) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({[name] : value})
    }

    handleKeyPress = (event) => {
      if(event.key == 'Enter'){
        window.location.href = `/search?q=${this.state.searchInput}`
      }
    }

	componentDidMount(){

	}
	render(){
		const { searchInput } = this.state;

		return(<div className="search-bar">
				<span>Search:</span> <input type="text" 
						   onKeyPress={this.handleKeyPress.bind(this)} 
						   onChange={this.updateInput.bind(this)} 
						   name="searchInput" 
						   value={searchInput} 
						   placeholder="Enter search text... "/>
			   </div>)
	}
}

export default SearchBar;