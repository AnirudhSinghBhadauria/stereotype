import React from "react";
import { seed } from "@/utils/seeding";

const Category = ({ params }: { params: { category: string } }) => {
  const category = params.category;

  // seed();

  return (
    <div>
      <p>{category}</p>
      {/* <button onClick={seed}>Seed</button> */}
    </div>
  );
};

export default Category;
