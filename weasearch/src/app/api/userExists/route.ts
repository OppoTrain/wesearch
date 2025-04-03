// api/userExists.js (or api/userExists.ts)
import { dbConnect } from "@/app/lib/mongo/db";
import User from "@/app/models/user";
import { NextResponse } from "next/server";

export async function POST(req: { json: () => PromiseLike<{ email: any; }> | { email: any; }; }) {
  try {
    await dbConnect();
    const { email } = await req.json();
    console.log("Checking for user with email:", email); 
    const user = await User.findOne({ email }).select("_id");
    console.log("User found:", user); 
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error checking user:", error);
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}
