"use server";

import { prisma } from "../../prisma/prismaClient";

export const feedbackSumbit = async (formData: FormData) => {
  const name = formData.get("name")!.toString();
  const email = formData.get("email")!.toString();
  const feedback = formData.get("feedback")!.toString();

  try {
    const submitFeedback = await prisma.feedback.create({
      data: {
        Name: name,
        Email: email,
        Feedback: feedback,
      },
    });

    return {
      status: true,
      error: false,
    };
  } catch (error) {
    return {
      status: false,
      error: true,
    };
  }
};
