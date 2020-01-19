import React, {Component} from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import {friends} from './friends';


class App extends Component{
	constructor (){
		super()
		this.state = { 
			friends: friends,
			searchfield: ''
		}

	}

	onSearchChange = (event) => { 
		this.setState({searchfield: event.target.value})
	}
	
	render () {
		
		const filterFriends = this.state.friends.filter(friends=>{
			return friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
		
		return(
			<div className='tc'>
				<h1>Robot friends</h1>
				<SearchBar searchChange={this.onSearchChange}/>
				<CardList friends={filterFriends}/>
			</div>
		);

	}
	
}

export default App;