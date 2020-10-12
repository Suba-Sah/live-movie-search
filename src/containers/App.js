import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestMovies } from '../actions';

import MovieList from '../components/MovieList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import onload_movies from '../onload_movies'

import './App.css';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchMovies.searchField,
    movies: state.requestMovies.movies,
    isPending: state.requestMovies.isPending
  }
}

const handleSearchChange = (event, dispatch) => {
  dispatch(setSearchField(event.target.value));
  dispatch(requestMovies(event.target.value));
}
// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => handleSearchChange(event, dispatch),
    onRequestMovies: (txt) => dispatch(requestMovies(txt))
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestMovies(this.props.searchField);
  }

  render() {
    const { movies, searchField, onSearchChange, isPending } = this.props;
    console.log(movies)
    let filteredRobots = onload_movies;
    if(movies.length!==0){
       filteredRobots = movies.filter(robot => {
        return robot.title.toLowerCase().includes(searchField.toLowerCase());
      })
    }
      return( 
        <div className='tc'>
          <h1 className='f1'>MovieSearch</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            { isPending ? <h1>Loading</h1> :
              <ErrorBoundry>
              {movies.length!==0 && <MovieList movies={filteredRobots} />}
              </ErrorBoundry>
            }
          </Scroll>
        </div>
      );


  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
