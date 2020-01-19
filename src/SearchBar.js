import React from 'react';


const SearchBar = ({searchfield, searchChange})=> {
	return(
		<div>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='serach'
				placeholder='search robots'
				onChange={searchChange}
			/>
		</div>
	);

}
export default SearchBar;