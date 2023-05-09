let numberOfFimls = prompt('Сколько фильмов вы уже посмотрели', '');

let personalMovieDB = {
   count: numberOfFimls,
   movies: {},
   actors: {},
   geners: [],
   privat: false
};

let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('Один из последних просмотренных фильмов?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);