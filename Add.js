import React,{useState} from "react";

import { ResultCard } from "./ResultCard";


export const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
  
    const onChange = (e) => {
      e.preventDefault();
  
      setQuery(e.target.value);
  
      fetch(
        `https://www.omdbapi.com/?apikey=2fe50bf1&s=titanic`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        });
    };
    return(
        <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};


