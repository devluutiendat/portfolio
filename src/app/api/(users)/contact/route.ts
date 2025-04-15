import { NextResponse } from "next/server";
import dbConnect from "@/lib/DBconnect";
import User from "@/models/user";
import { auth } from "@/lib/auth";

export async function GET() {
  const session = await auth();
  if(!session){
    return NextResponse.json({ success: false, message : "unauthorized" }, { status: 401 });
  }
  await dbConnect();
  
  const lastSent = new Date();

  const updatedUser = await User.findOneAndUpdate(
    { email: session?.user?.email },
    { lastSent: lastSent },
    { new: true }
  );

  if (!updatedUser) {
    return NextResponse.json({ success: false, message : "user not found" }, { status: 404 });
}


  return NextResponse.json({ success: true, data: {updatedUser} }, { status: 200 });
}
