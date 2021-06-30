// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const movieDirectors = movies.map((movie) => {
    return movie.director
  })
  return movieDirectors
}

/*
to do for the bonus:
-> .reduce() the duplicates of directors
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const spielbergMovies = movies.filter(( moviesOfSpielberg ) => {
    return (moviesOfSpielberg.director === 'Steven Spielberg' && moviesOfSpielberg.genre.includes('Drama')) 
  })
  return spielbergMovies.length
}

/*
to do:
-> .filter() movies and go for director "Steven Spielberg"
-> only want to have the drama movies of Steven Spielberg: filter for genre "Drama" in the array movies and then in the array of Genre (using .includes()?)
*/

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(averageScore) {
  if (averageScore.length === 0) {
    return 0;
  }
}

/*
to do: 
-> hint: .reduce() the data to a single value (as I only need the score forthis iteration, except the amount of = movies.length)
-> sum or total of entire scores
-> averageScore of movies = total score/amount of movies
-> round score to 2 decimals = math.round(averageScore * 100 ) / 100
*/

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(averageDramaScore) {}

/*
to do: 
-> filter drama movies in new array => needs to return a num (newArray.length for the amount of drama movies)
-> sum or total of drama movie scores
-> averageScore of drama movies = total score/amount of drama movies
-> round drama score to 2 decimals = math.round(averageScore * 100 ) / 100
*/

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

/*
to do: 
-> .sort() the movies in ascending order by their release year
-> extra: two movies in the same year => order alphabetical (title)
!!! do not mutate the original array - take care by using .sort()
*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

/*
to do:
-> .sort() the array movies alphabetical (going for title)
-> .reduce() as only the title is demanded
-> return the 20 first movies in the new array ordered alphabetically (slice method [0, 20])
*/

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
