import React from "react";

const Category = ({ params }: { params: { category: string } }) => {
  const category = params.category;

  return <div>{category}</div>;
};

export default Category;
