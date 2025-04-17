import { NextResponse } from "next/server";
import dbConnect from "@/lib/DBconnect";
import User from "@/models/user";
import { sendMail } from "@/lib/send-email";
import welcome from "@/components/emailTemplate/Welcome";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    if (!req.body) {
      return NextResponse.json({ error: "No data" }, { status: 400 });
    }
    const userLogin = await req.json();
    const email = userLogin.email;
    await dbConnect();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
    await  sendMail({
        sendTo: email,
        subject: "Welcome back to My Portfolio",
        html: welcome,
      });

      // Update login history
      await User.updateOne(
        { email: email },
        { $push: { loginHistory: new Date() } }
      );
      return NextResponse.json(
        { success: true, data: existingUser },
        { status: 200 }
      );
    } else {
      // Create new user with initial login history
      const user = await User.create({
        ...userLogin,
        loginHistory: [new Date()],
      });
    await  sendMail({
        sendTo: email,
        subject: "Welcome to My Portfolio",
        html: welcome,
      });

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

export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json(
      { success: false, message: "unauthorized" },
      { status: 401 }
    );
  }
  await dbConnect();
  const existingUser = await User.findOne({ email: session?.user?.email });

  if (!existingUser) {
    return NextResponse.json(
      { success: false, message: "user not found" },
      { status: 404 }
    );
  }

  const lastSent = existingUser?.lastSent;

  return NextResponse.json(
    { success: true, data: { lastSent } },
    { status: 200 }
  );
}
