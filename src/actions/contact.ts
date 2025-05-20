"use server";

import { contact } from "@/lib/send-email";
import dbConnect from "@/lib/DBconnect";
import User from "@/models/user";
import { auth } from "@/lib/auth";
import { formSchema, type FormValues } from "@/lib/validation/contactForm";
import { redirect } from "next/navigation";

export async function handleContact(formData: FormValues) {
  await dbConnect();
  const session = await auth();

  if (!session) {
    redirect('/api/auth/signin');
  }

  try {
    const user = await User.findOne({ email: session?.user?.email },"lastSent");
    
    if (!user) {
      return { success: false, error: "Invalid user data" };
    }
    // Check if 7 days have passed since last submission
    const lastSent = new Date(user.lastSent);
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    
    if (lastSent > oneWeekAgo) {
      return { 
        success: false, 
        error: "You can only send an email once a week." 
      };
    }
    
    // Validate form data
    const validatedData = formSchema.parse(formData);
    
    // Send email and update last sent date
    await Promise.all([
      contact(validatedData),
      User.updateOne(
        { email: session?.user?.email },
        { lastSent: new Date() }
      )
    ]);
    
    return { success: true, error: null };
  } catch (error) {
    console.error("Contact form error:", error);
    return { 
      success: false, 
      error: "Something went wrong. Please try again." 
    };
  }
}