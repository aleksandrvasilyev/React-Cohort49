import { useState } from "react";

const CategoryList = ({ categories, setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setSelectedCategory(category);
    setCategory(category);
  };

  return (
    <ul className="categories">
      {categories.map((category, i) => (
        <li
          key={i}
          className={`categories__item ${
            selectedCategory === category ? "categories__item__selected" : ""
          }`}
          onClick={() => handleClick(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};
export default CategoryList;
