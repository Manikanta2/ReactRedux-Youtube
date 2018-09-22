import React from 'react';
import ReactDom from 'react-dom';
import Searchbar from './components/searchbar';
const API_KEY = 'AIzaSyD904FvNvTpPxh-j_AWrnd8K901TufFql8';
const App = () => {
	return( 
	<div>
	<Searchbar />
	</div>
	);
}
ReactDom.render(<App />, document.querySelector('.container') );