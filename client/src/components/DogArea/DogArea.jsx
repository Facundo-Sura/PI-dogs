import React, { Fragment } from "react";
import DogCard from "../DogCard/DogCard";
import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import{ getDogs } from "../../redux/actions";

export default function DogArea() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) =>state.allDogs);
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState(8);
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getDogs());
    }, [dispatch]);

    return (
        <Fragment>
            <div>
                <Pagination
                dogsPerPage={dogsPerPage}
                allDogs={allDogs.lengh}
                pagination={pagination}
                currentPage={currentPage}
                />
                {
                    currentDogs.map((el) =>{
                        return (
                            <DogCard
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            image={el.image}
                            temperament={el.temperament}
                            temperaments={el.temperaments}
                            />
                        )})}
            </div>
        </Fragment>
    );
}