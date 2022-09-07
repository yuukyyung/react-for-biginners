import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101`)
    const json = await response.json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1> 
      ) : (
        <div>
          {movies.map((movie) => (
          <div key={movie.rnum}>
            <img src={movie.medium_cover_image} />
            <h2>{movie.rank}.{movie.movieNm}</h2>
            <ul>
            
            </ul>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default App;
 