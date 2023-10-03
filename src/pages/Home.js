import { useState } from "react";
import SearchCard from "../components/SearchCard";
import Header from "../components/Header";
import "./Home.css";

export default function Home() {
  const [query, setQuery] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchSearch = async () => {
    if (!data) {
        setLoading(true);
    }

    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}`
    );
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  return (
    <div>
        <Header />
    <div className="search-body">
      <div className="search-div">
        <label className="search-label">Search</label>
        <input
          className="search-input"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button onClick={fetchSearch}>Search</button>
      </div>

      <div>
        {loading && <p>Loading...</p>}
        {data &&
          data.docs.map((info) => (
            <div key={info.key} className="search-card">
              <SearchCard info={info} />
            </div>
          ))}
      </div>
    </div>
    </div>
  );
}
