import fs from "fs/promises"

const dataFilePath = "./backend/data/movies.json"

export const getMovies = async () => {
    const file = await fs.readFile(dataFilePath, "utf8")
    return JSON.parse(file)
}