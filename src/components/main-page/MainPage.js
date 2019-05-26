import React, { useEffect } from "react";
import styles from "./MainPage.css";
import MovieCard from "../movie-card/MovieCard";
import { getAllMovies } from "../../actions/movies.action";
import { searchInit } from "../../actions/search.action";
import { connect } from "react-redux";

// class MainPage extends React.Component {
//   componentDidMount() {
//     this.props.getAllMovies();
//     if (this.props.location.search) {
//       this.props.searchInit(this.props.location.search.split("=")[1]);
//     }
//   }

//   render() {
//     const movies =
//       this.props.movies &&
//       this.props.movies.filter(m => {
//         if (this.props.searchBy === "title")
//           return m[this.props.searchBy]
//             .toLowerCase()
//             .includes(this.props.searchTerm.toLowerCase());
//         if (this.props.searchBy === "genres") {
//           if (!this.props.searchTerm) return true;
//           return m[this.props.searchBy].includes(this.props.searchTerm);
//         }
//       });
//     // if (movies) this.props.updateFoundMovies(movies.length)
//     return (
//       <div className={styles.container}>
//         {movies
//           ? movies
//               .sort((a, b) => {
//                 if (this.props.sortBy === "rating")
//                   return b.vote_count - a.vote_count;
//                 return new Date(b.release_date) - new Date(a.release_date);
//               })
//               .map(movie => (
//                 <MovieCard
//                   movieId={movie.id}
//                   key={movie.id}
//                   name={movie.title}
//                   genre={movie.genres}
//                   year={movie.release_date}
//                 />
//               ))
//           : "No movies found"}
//       </div>
//     );
//   }
// }
const MainPage = ({
  getAllMovies,
  location,
  movies,
  searchInit,
  searchBy,
  searchTerm,
  sortBy
}) => {
  useEffect(() => {
    getAllMovies();
    if (location.search) {
      const searchTerm = window.location.search.split("&")[0].split("=")[1],
        searchBy = window.location.search.split("&")[1].split("=")[1];
      searchInit(searchTerm, searchBy);
    }
  }, []);

  const mmovies =
    movies &&
    movies.filter(m => {
      if (searchBy === "title")
        return m[searchBy].toLowerCase().includes(searchTerm.toLowerCase());
      if (searchBy === "genres") {
        if (!searchTerm) return true;
        return m[searchBy].includes(searchTerm);
      }
    });
  // if (movies) this.props.updateFoundMovies(movies.length)
  return (
    <div className={styles.container}>
      {mmovies
        ? mmovies
            .sort((a, b) => {
              if (sortBy === "rating") return b.vote_count - a.vote_count;
              return new Date(b.release_date) - new Date(a.release_date);
            })
            .map(movie => (
              <MovieCard
                movieId={movie.id}
                key={movie.id}
                name={movie.title}
                genre={movie.genres}
                year={movie.release_date}
              />
            ))
        : "No movies found"}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    searchTerm: state.search.searchTerm,
    searchBy: state.search.searchBy,
    sortBy: state.search.sortBy
  };
};
export default connect(
  mapStateToProps,
  { getAllMovies, searchInit }
)(MainPage);
