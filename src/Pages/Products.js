import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductCard from "../components/Products/ProductCard";

const products = [
  {
    id: 1,
    name: "Vietnamese Grilled Pork (bun-thit-nuong)",
    imgURL: "https://www.themealdb.com/images/media/meals/qqwypw1504642429.jpg",
    price: 500,
  },
  {
    id: 2,
    name: "Beef and Mustard Pie",
    imgURL: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
    price: 500,
  },
  {
    id: 3,
    name: "Jerk chicken with rice & peas",
    imgURL: "https://www.themealdb.com/images/media/meals/tytyxu1515363282.jpg",
    price: 700,
  },
  {
    id: 4,
    name: "Chickpea Fajitas",
    imgURL: "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg",
    price: 450,
  },
  {
    id: 5,
    name: "Callaloo Jamaican Style",
    imgURL: "https://www.themealdb.com/images/media/meals/ussyxw1515364536.jpg",
    price: 350,
  },
  {
    id: 6,
    name: "Honey Teriyaki Salmon",
    imgURL: "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
    price: 500,
  },
  {
    id: 7,
    name: "Broccoli & Stilton soup",
    imgURL: "https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg",
    price: 300,
  },
  {
    id: 8,
    name: "Mushroom & Chestnut Rotolo",
    imgURL: "https://www.themealdb.com/images/media/meals/ssyqwr1511451678.jpg",
    price: 700,
  },
  {
    id: 9,
    name: "French Onion Soup",
    imgURL: "https://www.themealdb.com/images/media/meals/xvrrux1511783685.jpg",
    price: 320,
  },
  {
    id: 10,
    name: "Jam Roly-Poly",
    imgURL: "https://www.themealdb.com/images/media/meals/ysqupp1511640538.jpg",
    price: 400,
  },
  {
    id: 11,
    name: "Spicy Arrabiata Penne",
    imgURL: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    price: 550,
  },
  {
    id: 12,
    name: "Minced Beef Pie",
    imgURL: "https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg",
    price: 700,
  },
];

function Products() {
  const [productList, setProductList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //   This useEffect API will be triggered whenever a search is made
  useEffect(() => {
    function searchMeal() {
      if (searchInput === "") {
        setProductList(products);
      } else {
        const searchList = products.filter((product) => {
          return product.name.toLowerCase().includes(searchInput.toLowerCase());
        });

        setProductList(searchList);
      }
    }

    searchMeal();
  }, [searchInput]);

  return (
    <section className="products">
      <div className="products__header">
        <h1>Products</h1>
      </div>

      <div className="products__search">
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {/* This will be shown when the result is empty */}
      {productList.length === 0 && (
        <p className="emptyResult">Search result is empty</p>
      )}

      {/* This will be shown when there is at least a product in the productList */}
      {searchInput !== "" && productList.length > 0 && (
        <p className="searchHeader">Your search result:</p>
      )}

      <div className="products__list">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
