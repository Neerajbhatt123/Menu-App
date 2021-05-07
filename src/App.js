import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";

//Checking all the categroy through array !
const allCatregories = ["all", ...new Set(menu.map((item) => item.category))];

console.log(allCatregories);

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCatregories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((menu) => menu.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menu={menuItems} />
      </section>
    </main>
  );
}

export default App;
