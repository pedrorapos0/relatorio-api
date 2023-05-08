import { AppDataSource } from "@config/dataSource";

const myDataSource = AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

export { myDataSource };
