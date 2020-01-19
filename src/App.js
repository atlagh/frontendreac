import React, {Component} from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import Scroll from './Scroll';
import {friends} from './friends';


class App extends Component{
	constructor (){
		super()
		this.state = { 
			friends: [],
			searchfield: ''
		}

	}

	componentDidMount () {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({ friends: users}));

	}

	onSearchChange = (event) => { 
		this.setState({searchfield: event.target.value})
	}
	
	render () {
		
		const filterFriends = this.state.friends.filter(friends=>{
			return friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});
		if (this.state.friends.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className= 'f1'>Robot friends</h1>
					<SearchBar searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList friends={filterFriends}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;