import Dexie from "dexie";
import data from "./data";

export const db = new Dexie("movies");

export function initDb() {
  db.version(1).stores({
    movies: "++id, title, isFavorite", // Primary key and indexed props
  });
}

export async function seed(force = false) {
  if (!force && (await db.movies.count()) > 0) {
    return;
  }

  try {
    await db.movies.clear();
    await db.movies.bulkAdd(data);
  } catch (e) {
    console.error(`Error trying to populate database: ${e.message}`);
  }
}

export async function clearDb() {
  try {
    await db.movies.clear();
  } catch (e) {
    console.error(`Error trying to clear the database: ${e.message}`);
  }
}

export async function getMovies() {
  try {
    return await db.movies.toArray();
  } catch (e) {
    console.error(`Error trying to get movies: ${e.message}`);
  }
}

export async function getFavoriteMovies() {
  try {
    return await db.movies
      .filter(function (movie) {
        return movie.isFavorite;
      })
      .toArray();
  } catch (e) {
    console.error(`Error trying to get movies: ${e.message}`);
  }
}

export async function getMovie(id) {
  try {
    return await db.movies.where("id").equals(+id).first();
  } catch (e) {
    console.error(`Error trying to get movies: ${e.message}`);
  }
}

export async function updateMovie(id, changes) {
  try {
    return await db.movies.update(+id, changes);
  } catch (e) {
    console.error(`Error trying to update movie: ${e.message}`);
  }
}
