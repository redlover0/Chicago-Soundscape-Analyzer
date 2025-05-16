import * as db from "./index.js";


export function fetchNoiseDataRankedByPopulation() {
  return db.query(
      "SELECT no,name, TOT_POP, noiselur, white_pop, hisp_pop, asian_pop, black_pop, other_pop, ROW_NUMBER() OVER (ORDER BY TOT_POP DESC) AS rank " +
      "FROM noise_data ORDER BY rank;"
  );
}

export const fetchNoiseDataById = (id) => {
  return db.query("SELECT * FROM noise_data WHERE no = $1", [id]);
};

export const fetchRandomNoiseData = () => {
  return db.query("SELECT * FROM noise_data ORDER BY random() LIMIT 4");
}

export const fetchAllNoiseData = () => {
  return db.query("SELECT * FROM noise_data");
}

export const searchCommunityName = (name) => {
  const searchQuery = `${name}%`;
  const results = searchQuery.startsWith(searchQuery.toLowerCase());
  return db.query(`SELECT * FROM noise_data WHERE name LIKE $1`, [searchQuery]);
}