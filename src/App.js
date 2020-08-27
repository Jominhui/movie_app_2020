import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

/*예제 noamd coders #0 ~ #2*/
/*const Rapper = ({name , picture, rating}) =>{ 
  return ( 
    <div>
      <h1>I like {name}</h1>
      <h4>rating {rating}</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

Rapper.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const Rapper_like = [
  {
    id: 1,
    name: "Ash Island",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MjNfMTk4%2FMDAxNTkwMTYxOTU4NDc5.e0QRts0ZF2A0yFuHGbKu6AYErm7yYRNeLCrLMikGq6Yg.nVr7ZQRCxw6oJcfXwzqX9G5gWyHnNjhi1jy8b-8R1cQg.JPEG.whitue8%2F2.jpg&type=sc960_832",
    rating: 5
  },
  {
    id: 2,
    name: "Hash Swan",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5672%2F2019%2F12%2F22%2F0000026998_001_20191222091415772.jpg&type=sc960_832",
    rating: 4.9
  },
  {
    id: 3,
    name: "ChangMo",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxODA2MjBfOTIg%2FMDAxNTI5NDc5OTAzMzAz.32byngeOTUceAUn1nU2hTEGm-LnpgDg2Ghf9Vv9V3aYg.IfbMY-RVKWhDYvikfIlg5objrbu_mrJ7r2OqhSbNPkwg.JPEG%2FIvaYHws37sfKbGlwW3jzm_ckcrNA.jpg&type=sc960_832",
    rating: 4.8
  }
];*/

/*const renderRapper = (rap) =>{
  return <Rapper name={rap.name} picture={rap.image} />
}*/

/*function App() {
  return( 
    <div>
      {Rapper_like.map(rap => (
        <Rapper key={rap.id} name={rap.name} picture={rap.image} rating={rap.rating} />
      ))}
    </div>
    );
}*/

/*예제 nomad coders #3-1 ~ #3-2*/
/*class App extends React.Component{
  state = {
    count: 0
  };

  add = () => {
    this.setState(
      current => ({
      count: current.count + 1
    }));
  };

  minus = () => {
    this.setState(
      current => ({
      count: current.count - 1
    }));
  };
  
  componentDidMount(){
    console.log("Component rendered");
  }

  componentDidUpdate() {
    console.log("I just update");
  }

  render(){
    console.log("Im rendering");
    return (
      <div>
        <h1>the number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}*/

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");  
    this.setState({movies, isLoading: false});
  };

  componentDidMount(){
    /*setTimeout(() => {
      this.setState({ isLoading: false});
    }, 6000);*/
    this.getMovies();
  }

  render () {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div>
        ) : (
          <div class="movie">
            {movies.map( movie => (
              <Movie 
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary}
                poster={movie.medium_cover_image} 
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;