import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import allCategories from "./fake-data/all-categories";
import allProducts from "./fake-data/all-products";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState(null);

  let filteredProducts;
  
  if (selectedCategory) {
    filteredProducts = products.filter(
      (product) => product.category === selectedCategory.slice(6)
    );
  } else {
    filteredProducts = products;
  }

  return (
    <>
      <h1>Products</h1>
      <CategoryList categories={categories} setCategory={setSelectedCategory} />
      <ProductList products={filteredProducts} />
    </>
  );
}

export default App;
