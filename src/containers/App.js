import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import './App.css';

import MainPage from '../components/MainPage';

// What state do I need to listen to 
const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

// What prop I should listen to as action
const mapDispatchToProps = (dispatch) => {
	return { 
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	render() {
		return <MainPage { ...this.props }/>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
