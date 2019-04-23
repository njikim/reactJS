import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

/*
const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star wars"
]

const movieImages = [
  "https://cdn-images-1.medium.com/max/1600/1*XZrU5omVCZPZXuYv2AZnog.jpeg",
  "https://images2.minutemediacdn.com/image/upload/c_crop,h_2132,w_3794,x_0,y_22/f_auto,w_1100/v1555155644/shape/mentalfloss/full-metal-jacket-hed.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
  "https://starwarsblog.starwars.com/wp-content/uploads/2019/03/star-wars-celebration-chicago-lightspeed-tall-C.jpg"
]


const movies = [
  {
    title: "Matrix",
    poster: "https://cdn-images-1.medium.com/max/1600/1*XZrU5omVCZPZXuYv2AZnog.jpeg"
  },
  {
    title: "full Metal Jacket",
    poster: "https://images2.minutemediacdn.com/image/upload/c_crop,h_2132,w_3794,x_0,y_22/f_auto,w_1100/v1555155644/shape/mentalfloss/full-metal-jacket-hed.jpg",

  },
  {
    title: "Old boy",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",

  },
  {
    title: "Star wars",
    poster: "https://starwarsblog.starwars.com/wp-content/uploads/2019/03/star-wars-celebration-chicago-lightspeed-tall-C.jpg"

  }
]
*/

class App extends Component {
  state = {
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title: "Matrix",
            poster: "https://cdn-images-1.medium.com/max/1600/1*XZrU5omVCZPZXuYv2AZnog.jpeg"
          },
          {
            title: "full Metal Jacket",
            poster: "https://images2.minutemediacdn.com/image/upload/c_crop,h_2132,w_3794,x_0,y_22/f_auto,w_1100/v1555155644/shape/mentalfloss/full-metal-jacket-hed.jpg",
        
          },
          {
            title: "Old boy",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
        
          },
          {
            title: "Star wars",
            poster: "https://starwarsblog.starwars.com/wp-content/uploads/2019/03/star-wars-celebration-chicago-lightspeed-tall-C.jpg"
        
          }
        ]
      })
      console.log('hi')
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }
  render(){
    return (
    <div className="App">
      {this.state.movies ? this._renderMovies(): 'loading'} 
    </div>
    );
  }
}

export default App;
