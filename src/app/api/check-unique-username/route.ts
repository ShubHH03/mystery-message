import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import {success, z} from "zod";
import { usernameValidation } from "@/schema/signUpSchema";

const UsernameQuerySchema = z.object({
  username: usernameValidation
})

export async function GET(request: Request) {

  await dbConnect()

  try {
    
  } catch (error) {
    console.error("Error checking username", error)
    return Response.json(
      {
        success: false,
        message: "Erroe checking username"
      },
      {status : 500}
    )
  }
  
}