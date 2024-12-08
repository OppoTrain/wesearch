import { dbConnect } from "@/app/lib/mongo/db";
import User from "@/app/models/user"; 


export const getUser = async (email: string) => {
  try {
    await dbConnect();
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.error("Error getting user from DB:", error);
    return null;
  }
};
