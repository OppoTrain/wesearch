import { dbConnect } from "@/app/lib/mongo/db";
import User from "@/app/models/user";
import Expert from "@/app/models/expert"; 
import Researcher from "@/app/models/researcher"; 
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    await dbConnect(); 

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    let userData;
    if (user.role === "Expert") {
      const expert = await Expert.findOne({ userId: user._id });
      if (!expert) {
        return NextResponse.json({ error: "Expert not found" }, { status: 404 });
      }
      userData = expert;
    } else if (user.role === "Researcher") {
      const researcher = await Researcher.findOne({ userId: user._id });
      if (!researcher) {
        return NextResponse.json({ error: "Researcher not found" }, { status: 404 });
      }
      userData = researcher;
    } else {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    const { password, ...restData } = userData._doc; 
    return NextResponse.json({ role: user.role, email:user.email,...restData }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
