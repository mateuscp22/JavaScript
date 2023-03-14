const movies = [
    { id: 1, movieName: 'Dejavy' },
    { id: 2, movieName: 'Back to the Future' },
    { id: 3, movieName: 'The Matrix' },
]

console.log(movies.includes({ id: 3, movieName: 'The Matrix' }))

console.log(movies.find(function (movie) {
    return movie.movieName == 'The Matrix'

}))