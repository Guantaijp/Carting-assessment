const mongoose = require('mongoose');

const connectDb = async () => {
    const uri = process.env.MONGO_URI;

    console.log("Attempting to connect to MongoDB...");

    try {
        await mongoose.connect(uri, {
            serverApi: {
                version: '1',
                strict: true,
                deprecationErrors: true,
            },
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000
        });
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDb;