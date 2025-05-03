import * as db from "./index.js";


export function fetchNoiseDataRankedByPopulation() {
  return db.query(
      "SELECT no,name, TOT_POP, ROW_NUMBER() OVER (ORDER BY TOT_POP DESC) AS rank " +
      "FROM noise_data ORDER BY rank;"
  );
}

export const fetchNoiseDataById = (id) => {
  return db.query("SELECT * FROM noise_data WHERE no = $1", [id]);
};