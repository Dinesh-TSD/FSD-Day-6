class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      const pgMovies = [];
  
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].rating === "PG") {
          pgMovies.push(movies[i]);
        }
      }
  
      return pgMovies;
    }
  }
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  const movies = [
    new Movie("Leo", "seven sereen studio", "PG"),
    new Movie("Jailer", "Lyca Production", "PG-13"),
    new Movie("Thunivu", "Sun Pictures", "R"),
    new Movie("Master", "Red Gaint", "PG"),
  ];
  
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);
  