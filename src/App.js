import { useEffect, useState } from "react";
import "./App.css";
import BreedList from "./components/BreedList";
import SearchInput from "./components/SearchInput";

function App() {
  const [breeds, setBreeds] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getBreeds() {
      const resp = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await resp.json();
      if (data.message) {
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
      }
    }

    getBreeds();
  }, []);

  const filteredBreeds = breeds
    ? breeds.filter((breed) => breed.includes(searchTerm))
    : [];

  return (
    <div>
      <div className="app">
        <h1>Good boy</h1>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="breedlist-container">
          {!breeds && <h2>Fetching some good boys!</h2>}
          {!!breeds && <BreedList breeds={filteredBreeds} />}
        </div>
      </div>
    </div>
  );
}

export default App;
