import { dbConnect } from "@/app/lib/mongo/db";
import Expert from "@/app/models/expert";
import Researcher from "@/app/models/researcher";
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
      role, 
      academicGoals,
      researchMethodologies,
      researchInterests,
      firstName,
      lastName
    } = await req.json();

    await dbConnect();
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const existingExpert = await Expert.findOne({ userId: existingUser._id });
    const existingResearcher = await Researcher.findOne({ userId: existingUser._id });

    if (existingExpert || existingResearcher) {
      return NextResponse.json({ message: "User already has an associated profile" }, { status: 400 });
    }

    await User.findOneAndUpdate(
      { email },
      { role: role }, 
      { new: true }
    );

    if (role === "Expert") {
      const expert = await Expert.create({
        userId: existingUser._id,
        linkedIn: existingUser.linkedinProfile || linkedIn,
        bio: existingUser.bio || bio,
        gender: existingUser.gender || gender,
        streetAddress,
        city,
        state,
        language: existingUser.preferredLanguage || language,
        additionalLanguage,
        phoneNo,
        photo,
        expertise,
        school,
        company,
        jobTitle,
        firstName,
        lastName,
        role: 'Expert',
      });
      return NextResponse.json({ message: "Expert profile created", expert });
    } else if (role === "Researcher") {
      const researcher = await Researcher.create({
        userId: existingUser._id,
        linkedIn: existingUser.linkedinProfile || linkedIn,
        bio: existingUser.bio || bio,
        gender: existingUser.gender || gender,
        streetAddress,
        city,
        state,
        language: existingUser.preferredLanguage || language,
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
        firstName,
        lastName,
        role: 'Researcher',
      });
      return NextResponse.json({ message: "Researcher profile created", researcher });
    } else {
      return NextResponse.json({ message: "Invalid role" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error while creating user profile:", error);
    return NextResponse.json({ message: "Error creating user profile" }, { status: 500 });
  }
}
