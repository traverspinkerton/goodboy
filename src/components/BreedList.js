import { useEffect, useState } from "react";
import "../styles/BreedList.css";

function BreedList({ breeds, setErrorMsg }) {
  return (
    <div className="breedlist">
      {breeds.map((breedName) => (
        <BreedListItem
          key={breedName}
          breedName={breedName}
          setErrorMsg={setErrorMsg}
        />
      ))}
    </div>
  );
}

function BreedListItem({ breedName, setErrorMsg }) {
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    async function fetchBreedData() {
      try {
        const resp = await fetch(
          `https://dog.ceo/api/breed/${breedName}/images/random`
        );
        const data = await resp.json();
        if (data.status === "success") {
          setImgUrl(data.message);
          setErrorMsg();
        } else {
          setErrorMsg("Oops. Something went wrong");
        }
      } catch (error) {
        setErrorMsg("Oops. Something went wrong");
      }
    }

    fetchBreedData();
  }, [breedName, setErrorMsg]);

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
