import { Pool, QueryResult } from "pg";

const dbSettings: any = {
  development: {
    host: "db",
    user: "postgres",
    password: "postgres",
    database: "w8mngr-dev",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
  },
  test: {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "w8mngr-test",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
  }
};

const pool = new Pool(dbSettings[process.env.NODE_ENV]);

export interface DBQueryParameters {
  text: string;
  values?: Array<string | number | Array<string> | Array<number>>;
}

// Our general-purpose query handler
async function query({
  text,
  values = []
}: DBQueryParameters): Promise<QueryResult> {
  const client = await pool.connect();
  try {
    const result = await client.query(text, values);
    client.release();
    return result;
  } catch (e) {
    client.release();
    throw new Error(e);
  }
}

export { query, dbSettings };
