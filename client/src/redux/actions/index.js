import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_BY_BREED = "GET_BY_BREED";

export function getDogs() {
  return async function () {
    const res = await fetch("https://api.thedogapi.com/v1/breeds");
    const data = await res.json();

    return data;
  };
}

export function getByBreed(id) {
  return async function (dispatch) {
    const response = await axios(
      `https://api.thedogapi.com/v1/images/search?breed_ids=${id}`
    );
    return dispatch({
      type: "GET_BY_BREED",
      payload: response.data,
    });
  };
}
