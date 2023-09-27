import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(`db_forum`, `root`, ``, {
  host: "localhost",
  dialect: `mysql`,
});

export const startDb = async() =>{
    try {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("DB OK.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
}
