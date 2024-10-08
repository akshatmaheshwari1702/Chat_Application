import mongoose from "mongoose";

const connectTOMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to Database");
    } catch (error) {
        console.log("Error connecting to Db", error.message);
    }
};

export default connectTOMongoDB;