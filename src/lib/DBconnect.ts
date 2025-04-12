import mongoose, { Mongoose } from "mongoose";

// Define the type for our cached connection
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Use a module-level variable with proper typing
let mongooseCache: MongooseCache = {
  conn: null,
  promise: null
};

async function dbConnect(): Promise<Mongoose> {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  // Return cached connection if available
  if (mongooseCache.conn) {
    return mongooseCache.conn;
  }

  // Create new connection if no promise exists
  if (!mongooseCache.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
    };

    mongooseCache.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    // Await the connection promise
    mongooseCache.conn = await mongooseCache.promise;
  } catch (e) {
    // Reset promise on error to allow retries
    mongooseCache.promise = null;
    throw e;
  }

  return mongooseCache.conn;
}

export default dbConnect;