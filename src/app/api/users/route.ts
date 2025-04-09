import { NextResponse } from "next/server";
import dbConnect from "@/lib/DBconnect";
import User from "@/models/user";
import { sendMail } from "@/lib/send-email";
import welcome from "@/components/emailTemplate/Welcome";
import { NextApiRequest } from "next";

export async function POST(req:NextApiRequest) {
  try {
    await dbConnect();

    if (!req.body) {
      return NextResponse.json({ error: "No data" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email: req.body.user.email });
    if (existingUser) {
      setTimeout(() => {
        
        req.body?.user?.email &&
           sendMail({
            sendTo: req.body.user.email,
            subject: "Welcome back to My Portfolio",
            html: welcome,
          });
      }, 1000 * 60 * 5)
      
      // Update login history
      await User.updateOne(
        { email: req.body.user.email },
        { $push: { loginHistory: new Date() } }
      );
      return NextResponse.json(
        { success: true, data: existingUser },
        { status: 200 }
      );
    } else {
      // Create new user with initial login history
      const user = await User.create({
        ...req.body.user,
        loginHistory: [new Date()],
      });
      setTimeout(() => {     
        req.body?.user?.email &&
          sendMail({
            sendTo: req.body.user.email,
            subject: "Welcome to My Portfolio",
            html: welcome,
 
          });
      }, 1000 * 60 * 5)

      return NextResponse.json({ success: true, data: user }, { status: 201 });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Server error",
      },
      { status: 500 }
    );
  }
}
