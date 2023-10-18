export const getMoviesFromApi = async () => {
    const helloWorldApiResponse = await fetch('/movie');
    return helloWorldApiResponse
}