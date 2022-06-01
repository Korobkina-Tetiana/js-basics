"use strict";


// FIRST TASK


/*const numberOfFilms = +prompt ('How many movies have you watched?', '');

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


console.log(personalMovieDataBase);*/



//console.log(NaN || 2 || undefined);

//console.log(NaN && 2 && undefined);

//console.log(1 && 2 && 3);

//console.log( !1 && 2 || !3 );

//console.log( 25 || null && !3 );


/*let result = '';

const length = 7;

for ( let i=1; i < length; i++ ) {
    for ( let j=0; j < i; j++) {
        result += '*';   
    }   
    result += '\n'; 
}
    
console.log (result);*/


/*for ( let i=0; i < 2; i++ ) {
    console.log(i);
    for ( let j=0; j < 6; j++ ) {
        console.log(j);
    }
}*/


/*first: for ( let i=0; i < 3; i++ ) {
    console.log(`First level: ${i}`);
    for ( let j=0; j < 3; j++ ) {
        console.log(`Second level: ${j}`);
        for ( let k=0; k < 5; k++ ) {
            if ( k === 2 ) break first;
            console.log(`Third level: ${k}`);
        }
    }
}*/


// SECOND TASK


const numberOfFilms = +prompt ('How many movies have you watched?', '');

const personalMovieDataBase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for ( let i = 0; i < 2; i++ ) {
    const a = prompt('What is the last movie you watched?', ''),
          b = prompt('What rating did you give the movie?', '');

          if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            personalMovieDataBase.movies[a] = b;
            console.log('works');
          } else {
            console.log('error');
            i--
          }        
}

if (personalMovieDataBase.count < 10) {
    console.log("few movies");
} else if (personalMovieDataBase.count >= 10 && personalMovieDataBase.count < 30) {
    console.log("enough movies");
} else if (personalMovieDataBase.count >= 30) {
    console.log("many movies");
} else {
    console.log("error");
}
    
console.log(personalMovieDataBase);



