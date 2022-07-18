import ErrorPage from "./ErrorPage/ErrorPage";

export const getAllMovies = async () => {
  const response = await fetch(
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
  );
  if (!response.ok) {
    throw new Error(response.status);
  } else {
    return await response.json();
  }
};

export const getSingleMovie = async (id) => {
  const response = await fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  );
  if (!response.ok) {
    throw new Error(response.status);
  } else {
    return await response.json();
  }
};
