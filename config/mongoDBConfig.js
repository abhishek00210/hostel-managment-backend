import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Ensures that the connection uses the new URL parser.
      useUnifiedTopology: true, // Ensures that the connection uses the new topology engine.
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
