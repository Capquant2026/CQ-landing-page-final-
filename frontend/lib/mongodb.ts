import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URL as string;

let client;
let clientPromise: Promise<MongoClient>;
if (!process.env.MONGODB_URL) {
  throw new Error("Please The Database Connection");
}

client = new MongoClient(url);
clientPromise = client.connect();

export default clientPromise;
