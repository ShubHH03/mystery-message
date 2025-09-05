import { resend } from "@/lib/resend";
import  VerificationEmail  from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    // console.log(`Attempting to send verification email to: ${email}`);

    const emailResult = await resend.emails.send({
      from: "Shubham <onboarding@resend.dev>",
      to: email,
      subject: "Mystery message | Verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    // console.log("Email sent successfully:", emailResult);

    return {
      success: true,
      message: "Verification email sent successfully",
    };
  } catch (emailError) {
    console.error("Error sending verification email", emailError);
    return {
      success: false,
      message: "Failed to send verification email",
    };
  }
}
