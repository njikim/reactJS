import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

/*
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
*/

/*
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
*/


function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_columns">
                <h2>{title}</h2>
                <div className="Movie_Genre">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} /> )}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}


function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}
export default Movie;