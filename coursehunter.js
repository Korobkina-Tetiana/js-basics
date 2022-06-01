const numberOfFilms = +prompt ('How many movies have you watched?', '');

const personalMovieDataBase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What is the last movie you watched?', ''),

      b = prompt('What rating did you give the movie?', ''),

      c = prompt('What is the last movie you watched?', ''),

      d = prompt('What rating did you give the movie?', '');


personalMovieDataBase.movies[a] = b;

personalMovieDataBase.movies[c] = d;


console.log(personalMovieDataBase);