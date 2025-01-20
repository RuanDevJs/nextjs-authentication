import { MongoClient, MongoClientOptions } from "mongodb";

export default async function clientPromise(options?: MongoClientOptions){
  const URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;

  const client = new MongoClient(URI, options);

  if (!URI) throw new Error("Please add your MONGO URI to connect to database!");

  try {
    const clientPromise = client.connect();
    return clientPromise;
  } catch(error){
    if(error instanceof Error) throw new Error("Error on connect to database", error);
  }
}

// const client = new MongoClient(URI, options);
// const clientPromise = client.connect();
// export default clientPromise;

