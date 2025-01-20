import clientPromise from "@/app/lib/MongoClient";
import { Db, MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

interface InitDatabase {
  client:MongoClient;
  db: Db;
}

interface User {
  email: string;
  password: string;
}

async function initDatabase(): Promise<InitDatabase | undefined>{
  try {
    const client = await clientPromise();

    if(client === undefined) throw new Error("Could not connect to mongodb database");

    const db = await client.db('NextAuthentication');
    return { client, db }
  } catch(error){
    if(error instanceof Error) console.error('Error on init database: ', error.message)
  }
}

export async function GET(){
  const { db } = await initDatabase() as InitDatabase;
  const newUser = await db
  .collection<User>('users')
  .insertOne({ email: 'romario@gmail.com', password: '123456789'}, { forceServerObjectId: true  })

  return NextResponse.json({ message: 'Success! You are using an Next.js API', newUser }, { status: 200 });
}
