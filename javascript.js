const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++){
  const a = prompt('Один из последних просмотренных фильмов?',''),
        b = +prompt('На сколько оцените его?','');

        if (!a || !b || a.length > 50){
          i--
        }
        personalMovieDB.movies[a] = b;
}

/*
let i = 0;
while (i < 2){
  i++;
  const a = prompt('Один из последних просмотренных фильмов?',''),
        b = +prompt('На сколько оцените его?','');

  if (!a || !b || a.length > 50){
  i--
  }
  personalMovieDB.movies[a] = b;
}
*/
/*
let i = 0;
do {
  i++;
  const a = prompt('Один из последних просмотренных фильмов?',''),
        b = +prompt('На сколько оцените его?','');

  if (!a || !b || a.length > 50){
  i--
  }
  personalMovieDB.movies[a] = b;
} while (i < 1);
*/

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
  console.log("Просмотрено доволи мало фильмов");
} else if (personalMovieDB.count > 30){
  console.log("Вы - киноман");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
  console.log("Вы - классический зритель");
} else {
  console.log("Произошла ошибка");
}