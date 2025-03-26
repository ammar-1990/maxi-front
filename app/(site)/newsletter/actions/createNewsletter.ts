"use server";

import { z } from "zod";
import { newsLetterSchema } from "../schema";
import CustomError from "@/lib/CustomError";
import { throwCustomError } from "@/lib/utils";
import prisma from "@/lib/prisma";

export const createNewsletter = async (
  data: z.infer<typeof newsLetterSchema>
): Promise<{ success: boolean; message: string }> => {
  try {
    const validData = newsLetterSchema.safeParse(data);
    if (!validData.success) return throwCustomError("Invalid Inputs");
    const exist = await prisma.newsletterSubscriber.findFirst({
      where: {
        email: validData.data.email,
      },
    });
    if(exist) return throwCustomError('Email already exist')
    await prisma.newsletterSubscriber.create({
      data: {
        email: validData.data.email,
      },
    });

    return { message: "Welcome - Successfully Subscribed", success: true };
  } catch (error) {
    console.error(error);
    if (error instanceof CustomError) {
      return {
        success: false,
        message: error.message,
      };
    }
    return { success: false, message: "Internal Server Error" };
  }
};
