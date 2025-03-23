



async function fetchNoiseDataRankedByPopulation() {
  return await db.query(
    "SELECT name, TOT_POP, ROW_NUMBER() OVER (ORDER BY TOT_POP DESC) AS rank " +
    "FROM noise_data ORDER BY rank;"
  );
}