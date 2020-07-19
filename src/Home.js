import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/LittleFiresEverywhere/LITT_S1_Xsite_FT_HeroTALL_1500x600_PV_en-GB._CB431647716_.jpg"
        alt="banner"
      />

      <div className="home__row ">
        <Product
          id="1227112"
          title="PS4 1TB Slim console Sony PS4 PRO 1TB Console with Death Stranding Pasted Outside box"
          price={27990}
          rating={5}
          image="https://m.media-amazon.com/images/I/81lKyvW3AoL._AC_UY218_.jpg"
        />
        <Product
          id="12222452"
          title="Think and Grow Rich IKALL IK-401 60W Bluetooth Home Theatre System with FM/AUX/USB Support and Remote Control (Black, 4.1 Channel) "
          price={14999}
          rating={3}
          image="https://m.media-amazon.com/images/I/610QgVJRTZL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="122221102"
          title="SHOPTOSHOP Smart Band Fitness Tracker Watch Heart Rate with Activity Tracker Waterproof Body Functions Like Steps "
          price={4499}
          rating={4}
          image="https://m.media-amazon.com/images/I/71MKkuWhmNL._AC_UL320_.jpg"
        />
        <Product
          id="12222"
          title="M.G.R.J® Pro HD+ Tempered Glass Screen Protector for Apple iPad Pro 11 (2020, 2018)"
          price={12140}
          rating={4}
          image="https://m.media-amazon.com/images/I/71XLKW1KuLL._AC_UY218_.jpg"
        />
        <Product
          id="1224112"
          title="Amazon Echo (2nd Gen) - Powered by Dolby – White "
          price={12990}
          rating={5}
          image="https://m.media-amazon.com/images/I/61UnzwX+4NL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12222452"
          title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver "
          price={11}
          rating={5}
          image="https://m.media-amazon.com/images/I/71sBGR6LZhL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
