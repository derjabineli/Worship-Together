import pg from "pg";

// pg object knows to look for env file with the corresponding variables
const pool = new pg.Pool();
const query = (text, params) => pool.query(text, params);

export default { query };
