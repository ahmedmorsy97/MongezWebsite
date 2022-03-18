import mongoose from "mongoose";

const url = "mongodb://localhost:27017/myapp";
const URI =
  `${process.env.NODE_ENV}` === "production"
    ? `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@mongez.0leai.mongodb.net/mongezdb?retryWrites=true&w=majority`
    : url;
(async () => {
  try {
    const { connection } = await mongoose.connect(URI, {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      retryWrites: false,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.error(error);
  }
})();
