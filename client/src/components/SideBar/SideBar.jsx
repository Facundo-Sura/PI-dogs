import { React, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getDogs,
  getTemperamentsList,
  filterDogsByTemperament,
  orderByName,
  filterCreated,
  getBreeds,
  getDogsByBreed,
  filterDogsByMAXWeight,
  filterDogsByMINWeight,
  orderByWeight,
} from "../../redux/actions/index";

export default function SideBar() {
  const dispach = useDispatch();
  const temperaments = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );
  const allDogs = useSelector((state) => state.allDogs);
  const breeds = useSelector((state) => state.breeds);

  const minWeights = allDogs
    .map((e) => e.weight_min)
    .sort(function (a, b) {
      return a - b;
    });
  const allDogsMinWeights = [...new Set(minWeights)];

  const maxWeights = allDogs
    .map((e) => e.weight_max)
    .sort(function (a, b) {
      return a - b;
    });
  const allDogsMaxWeights = [...new Set(maxWeights)];

  useEffect(() => {
    dispach(getDogs());
    dispach(getTemperamentsList());
    dispach(getBreeds());
  }, [dispach]);

  function handleClick(e) {
    e.preventeDefault();
    dispach(getDogs());
  }

  function handleClickOrder(e) {
    e.preventeDefault();
    dispach(orderByName(e.target.value));
  }

  function handleClickOrderWheight(e) {
    e.preventeDefault();
    dispach(orderByWeight(e.target.value));
  }

  function handleFilterCreated(e) {
    dispach(filterCreated(e.target.value));
  }

  function handleFilterByTemp(e) {
    e.preventeDefault();
    dispach(filterDogsByTemperament(e.target.value));
  }

  function handleFilteredByBreed(e) {
    e.preventeDefault();
    dispach(getDogsByBreed(e.target.value));
  }

  function handleFilteredMAXWeight(e) {
    e.preventeDefault();
    dispach(filterDogsByMAXWeight(e.target.value));
  }

  function handleFilteredMINweight(e) {
    e.preventeDefault();
    dispach(filterDogsByMINWeight(e.target.value));
  }
  return (
    <Fragment>
      <div>
        <div>
          <h4>Find by filters:</h4>
          <div
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <span>loop</span>
          </div>
        </div>
        <hr />
        <div>
          <h5>Order by name</h5>
          <select
            onChange={(e) => {
              handleClickOrder(e);
            }}
          >
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option value="asc">A -Z</option>
            <option value="desc">Z -A</option>
          </select>
        </div>
        <div>
          <h5>Order by weight</h5>
          <select
            onChange={(e) => {
              handleClickOrderWheight(e);
            }}
          >
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option value="asc">Heviest 1st</option>
            <option value="desc">Lightest 1st</option>
          </select>
        </div>
        <div>
          <h5>Filter by source</h5>
          <select
            onChange={(e) => {
              handleFilterCreated(e);
            }}
          >
            <option defaultValue value="all">
              All Sources
            </option>
            <option value="created">Mine</option>
            <option value="inDB">In data base</option>
          </select>
        </div>
        <div>
          <h5>Filter by temperament</h5>
          <select onChange={(e) => handleFilterByTemp(e)}>
            <option value="all">All Temperaments</option>
            {temperaments.map((temp) => {
              return (
                <option value={temp} key={temp}>
                  {temp}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <h5>Filter by breed</h5>
          <select onChange={(e) => handleFilteredByBreed(e)}>
            <option value="all">All Breeds</option>
            {breeds.map((breed) => {
              return breed ? (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              ) : (
                ""
              );
            })}
          </select>
        </div>
        <div>
          <h5>Filter by max weight</h5>
          <select onChange={(e) => handleFilteredMAXWeight(e)}>
            <option value="all">All Weights</option>
            {allDogsMaxWeights.map((maxWeight) => {
              return maxWeight ? (
                <option value={maxWeight} key={maxWeight}>
                  {maxWeight} Kg
                </option>
              ) : (
                ""
              );
            })}
          </select>
        </div>
        <div>
          <h5>Filter by min weight</h5>
          <select onChange={(e) => handleFilteredMINweight(e)}>
            <option value="all">All Weights</option>
            {allDogsMinWeights.map((minWeight) => {
              return minWeight ? (
                <optiom value={minWeight} key={minWeight}>
                  {minWeight} Kg
                </optiom>
              ) : (
                ""
              );
            })}
          </select>
        </div>
        <div>
          <h5>Add a Woof</h5>
          <div>
            <Link to="/newDog/">
              <span>add_circle</span>
              <span> Add your Woof</span>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
