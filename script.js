let NumberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDb = {count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};
let lastMovie = prompt('Один из последних просмотренных фильмов?');
let scoreLastMovie = prompt('На сколько его оцените?');
let  movies = {
    [lastMovie] : scoreLastMovie
}
console.log(movies)