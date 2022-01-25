import { Client } from "faunadb";

export const fauna = new Client({
  secret: process.env.FAUNADB,
  domain: "db.fauna.com",
});
