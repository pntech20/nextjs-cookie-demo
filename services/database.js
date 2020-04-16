import Mongoose from "mongoose";

function connect() {
  if (Mongoose.connection.readyState === 0) {
    Mongoose.connect(
      // `${process.env.MONGO_URL || "mongodb://localhost:27017"}/nextjs-auth-demo`,
      `mongodb+srv://admin:admin@cluster0-3yigy.mongodb.net/test?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        createIndexes: true
      }
    );
  }
}

export default { connect };
