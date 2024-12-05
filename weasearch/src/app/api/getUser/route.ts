import { dbConnect } from "@/app/lib/mongo/db";
import User from "@/app/models/user"; 
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await dbConnect();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const { password, ...userData } = user._doc;
    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error("Error retrieving user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
