import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: process.env.SQL_SERVER_IP,
  port: process.env.SQL_SERVER_PORT
    ? parseInt(process.env.SQL_SERVER_PORT)
    : 1433,
  username: process.env.SQL_SERVER_USER,
  password: process.env.SQL_SERVER_PASSWORD,
  database: process.env.SQL_SERVER_DATABASE,
  options: {
    encrypt: false,
  },
  logging: ["query", "error"],
  entities: ["./src/modules/**/infra/typeorm/entites/*.ts"],
  migrations: [],
});
