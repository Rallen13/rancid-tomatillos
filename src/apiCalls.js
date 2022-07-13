export const getAllMovies = async () => {
    const response = await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    return await response.json()
}

export const getSingleMovie = async (id) => {
    const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    return await response.json()
}
