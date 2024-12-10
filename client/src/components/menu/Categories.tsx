import React from "react";
import { Button } from "../ui/button";

interface CategoriesProps {
  categories: string[];
}

const Categories = ({
  categories = ["Main Course", "Sweet Dish"],
}: CategoriesProps) => {
  return (
    <div className="w-full space-y-4">
      <h1>
        Categories (
        {categories && categories.length > 0
          ? categories.length
          : "No categories"}
        )
      </h1>
      <div className="flex flex-wrap gap-2">
        {categories && categories.length > 0 ? (
          categories.map((category, index) => (
            <Button
              variant="outline"
              key={index}
              className="p-2 rounded-md flex items-center"
            >
              {category}
            </Button>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
