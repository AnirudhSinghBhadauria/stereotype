"use server";

import { prisma } from "../../prisma/prismaClient";

export const tipusSumbit = async (formData: FormData) => {
  const name = formData.get("name")!.toString();
  const email = formData.get("email")!.toString();
  const explain = formData.get("explain")!.toString();
  const summarize = formData.get("summarize")!.toString();

  try {
    const submitTipus = await prisma.tipus.create({
      data: {
        Name: name,
        Email: email,
        Detail: explain,
        Sentence: summarize,
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
