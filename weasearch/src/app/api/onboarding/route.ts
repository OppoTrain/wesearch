import { dbConnect } from "@/app/lib/mongo/db";
import Student from "@/app/models/student";
import Researcher from "@/app/models/researcher";  // Import Researcher model
import User from "@/app/models/user";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log('Session:', session);

    if (!session || !session.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const email = session.user.email;
    const {
      linkedIn,
      bio,
      gender,
      streetAddress,
      city,
      state,
      language,
      additionalLanguage,
      phoneNo,
      photo,
      expertise,
      school,
      company,
      jobTitle,
      role,  // Include role in request body
      academicGoals,
      researchMethodologies,
      researchInterests,
    } = await req.json();

    await dbConnect();
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const existingStudent = await Student.findOne({ email });
    const existingResearcher = await Researcher.findOne({ email });  // Check if researcher exists

    if (existingStudent || existingResearcher) {
      return NextResponse.json({ message: "User already exists in either Student or Researcher" }, { status: 400 });
    }

    const deleteResult = await User.deleteOne({ email });
    if (deleteResult.deletedCount === 0) {
      return NextResponse.json({ message: "Failed to delete user" }, { status: 500 });
    }
    if (role === "Student") {
      const student = await Student.create({
        userId: existingUser._id,
        email,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        password: existingUser.password,
        linkedIn,
        bio,
        gender,
        streetAddress,
        city,
        state,
        language,
        additionalLanguage,
        phoneNo,
        photo,
        expertise,
        school,
        company,
        jobTitle,
        role: 'Student',
      });
      return NextResponse.json({ message: "Student profile created and user deleted", student });
    } else if (role === "Researcher") {
      const researcher = await Researcher.create({
        userId: existingUser._id,
        email,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        password: existingUser.password,
        linkedIn,
        bio,
        gender,
        streetAddress,
        city,
        state,
        language,
        additionalLanguage,
        phoneNo,
        photo,
        expertise,
        school,
        company,
        jobTitle,
        academicGoals,
        researchMethodologies,
        researchInterests,
        role: 'Researcher',
      });
      return NextResponse.json({ message: "Researcher profile created and user deleted", researcher });
    } else {
      return NextResponse.json({ message: "Invalid role" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error while creating user profile:", error);
    return NextResponse.json({ message: "Error creating user profile" }, { status: 500 });
  }
}
