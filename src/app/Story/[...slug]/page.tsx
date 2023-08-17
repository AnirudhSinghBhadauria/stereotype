import { getSinglePost } from "@/lib/global/get-single-post";
import React from "react";

const Story = async ({ params }: { params: { slug: string[] } }) => {
  const postData = await getSinglePost(params.slug);

  console.log(postData);

  return <div>{postData.color}</div>;
};

export default Story;
