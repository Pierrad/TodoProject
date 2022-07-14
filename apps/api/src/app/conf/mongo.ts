import mongoose from 'mongoose';

export const connectToDB = () => {
  mongoose
  .connect(process.env['MONGODB_URI_DEV'], (error) => {
    if (!error) {
        console.log("✅ Successfully connected to MongoDB at " + process.env['MONGODB_URI_DEV']);
    } else {
        console.log("⛔️ Error in DB connection: " + error);
    }
  });
}

