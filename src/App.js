import React from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import {friends} from './friends';

const App = () =>{
	return(
		<div className='tc'>
			<h1>Robot friends</h1>
			<SearchBar />
			<CardList friends={friends}/>
		</div>
	);
}

export default App;