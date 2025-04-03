import { dbConnect } from "@/app/lib/mongo/db";
import User from "@/app/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function POST(req: any) {
    try {
        const data = await req.json();
        console.log("Request Data:", data);
        const { firstName, lastName, email, password } = data;
        const hashedPassword=await bcrypt.hash(password,10);
        await dbConnect();
        await User.create({email,password:hashedPassword})

        return NextResponse.json({ message: "Sign Up Successful" }, { status: 201 });
    } catch (error) {
        console.error("Error in POST request:", error); 
        return NextResponse.json({ message: "Error while registering user" }, { status: 500 });
    }
}
