import React, { useState, useEffect } from "react";
import { getDogs } from "../../redux/actions";

const initialBreeds = [];
const Select = () => {
    const [breeds, setBreeds] = useState(initialBreeds);

    useEffect (()=>{
        updateBreeds();
    },[]);

    const updateBreeds=()=>{
        getDogs()
        .then((newData)=>{
            setBreeds(newBreeds);
        })
    }

  return (
    <div>
      <select>
        {breeds.map(breed => (
            <option value={breed.id} key={breed.id}>{breed.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
