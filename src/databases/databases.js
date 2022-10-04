import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(process.env.DATABASE);
    console.log("DB connected", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
