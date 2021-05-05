import { useEffect, useState } from "react";
import "../styles/BreedList.css";

function BreedList({ breeds }) {
  return (
    <div className="breedlist">
      {breeds.map((breedName) => (
        <BreedListItem key={breedName} breedName={breedName} />
      ))}
    </div>
  );
}

function BreedListItem({ breedName }) {
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    async function fetchBreedData() {
      const resp = await fetch(
        `https://dog.ceo/api/breed/${breedName}/images/random`
      );
      const data = await resp.json();
      if (data.status === "success") setImgUrl(data.message);
    }

    fetchBreedData();
  }, [breedName]);

  if (!imgUrl) return <div>{breedName}</div>;
  return (
    <div className="breedlist-item">
      <div>
        <p>{breedName}</p>
      </div>
      <img alt={`cute pic of a ${breedName}`} src={imgUrl} />
    </div>
  );
}

export default BreedList;
