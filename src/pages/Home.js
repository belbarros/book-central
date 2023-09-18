import { useEffect, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState();
  const [data, setData] = useState();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch('https://openlibrary.org/search.json?q=bobby');
  //       const json = await response.json();
  //       setData(json);
  //       console.log(data);
  //     };

  //     fetchData();
  //   }, []);

  const fetchSearch = async () => {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}`
    );
    const json = await response.json();
    setData(json);
  };

  return (
    <div>
      <div>
        <input
          placeholder="Text"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button onClick={fetchSearch}>Search</button>
      </div>

      <div>
        {data &&
          data.docs.map((info) => (
            <div>
              <p>{info.title}</p>
              <p>{info.author_name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
