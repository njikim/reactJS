import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }
    
    render(){
        //console.log(this.props);
        return(
            <div>
            <h2> hello this is a movie </h2>
            <MoviePoster poster={this.props.poster} />
            <h2>{this.props.title}</h2>
            </div>
        )    
    }
}

class MoviePoster extends Component{
    
    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render(){
        //console.log(this.props)
        return(
            <img src={this.props.poster} alt="Movie Poster"/>
        )
    }
}

export default Movie;