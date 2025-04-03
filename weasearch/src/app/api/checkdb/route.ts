import { dbConnect, disconnect } from "@/app/lib/mongo/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    console.log("Database connection successful");
    disconnect();
    return NextResponse.json({ message: "Database connected and disconnected successfully" });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}
