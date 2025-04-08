import { NextResponse } from "next/server";
import dbConnect from "@/lib/DBconnect";
import User from "@/models/user";
import { auth } from "@/lib/auth";

export async function POST() {
  try {
    await dbConnect();
    const session = await auth();
  
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const existingUser = await User.findOne({ email: session.user.email });
    
    if (existingUser) {
      // Update login history
      await User.updateOne({ email: session.user.email }, { $push: { loginHistory: new Date() } });
      return NextResponse.json({ success: true, data: existingUser }, { status: 200 });
    } else {
      // Create new user with initial login history
      const user = await User.create({
        ...session.user,
        loginHistory: [new Date()]
      });
      return NextResponse.json({ success: true, data: user }, { status: 201 });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Server error" },
      { status: 500 }
    );
  }
}