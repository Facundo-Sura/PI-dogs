import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByBreed, getDogs } from "../../redux/actions";

import SearchBar from "../../components/searchbar/SearchBar";
import Select from "../../components/select/Select";
import Cards from "../../components/cards/Cards";

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const [searchString, setSearchString] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByBreed(searchString));
  }

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div>
      <h2 className="home-title">Home</h2>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Select />
      <Cards allDogs={allDogs} />
    </div>
  );
}

export default Home;
