import React from "react";
import Header from "../Components/Header";
import "./Home.css";
import Product from "../Components/Product";

function Home() {
  return (
    <div>
      <Header />
      <img
        src="https://m.media-amazon.com/images/I/61Sx2pJZ1GL._SX3000_.jpg"
        alt="Amazon banner"
        className="home_image"
      />
      <div className="home_row">
        <Product
          id="1"
          title="2022 Apple iPad Air with Apple M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Blue (5th Generation)"
          price={11.99}
          rating={5}
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=940&hei=1112&fmt=png-alpha&.v=1645065732688"
        />
        <Product
          id="2"
          title="Ankaret Stainless Steel Water Bottle 1L, Black, Sipper Cap, 1 (Set of 1)"
          price={10.99}
          rating={5}
          src="https://m.media-amazon.com/images/I/41s1-52c2XL._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="3"
          title="American Tourister Casual Backpack"
          price={50.99}
          rating={5}
          src="https://images-eu.ssl-images-amazon.com/images/I/91FvDEE9sCL._AC_UL675_SR675,480_.jpg"
        />
        <Product
          id="4"
          title="OnePlus Smart Band: 13 Exercise Modes, Blood Oxygen Saturation (SpO2), Heart Rate & Sleep Tracking"
          price={100.99}
          rating={5}
          src="https://images-eu.ssl-images-amazon.com/images/I/61XPTRJZcCL._AC_UL675_SR675,480_.jpg"
        />
        <Product
          id="5"
          title="PS5 - Uncharted Legacy Of Thieves collection"
          price={499.99}
          rating={5}
          src="https://m.media-amazon.com/images/I/91ug7DBCdaL._AC_UY436_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="6"
          title="JBL C100SI In-Ear Headphones with Mic (Red)"
          price={150.99}
          rating={5}
          src="https://m.media-amazon.com/images/I/51TbZHzkP+L._AC_UY436_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
