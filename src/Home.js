import React from "react";
import { Product } from "./Product";
import "./Home.css";

export const Home = (props) => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=" Amazon Banner "
      />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321314"
          title="Samsung Galaxy Tab A7 10.4 Wi-Fi 32GB Silver (SM-T500NZSAXAR)"
          price={149.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71MvL2kCFCL._AC_UY218_.jpg"
        />
        <Product
          id="12321315"
          title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
          price={99.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41qR7C253KL._AC_US160_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321316"
          title="DualSense Wireless Controller"
          price={69.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/71y+UGuJl5L._AC_UY218_.jpg"
        />
        <Product
          id="12321317"
          title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black"
          price={93.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US160_.jpg"
        />
        <Product
          id="12321318"
          title="Samsung Galaxy Tab S6 Lite 10.4 64GB WiFi Tablet Oxford Gray - SM-P610NZAAXAR - S Pen Included"
          price={271.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/418Ty89Cf3L._AC_US160_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321319"
          title="SAMSUNG SM-T290NZKAXAR, Galaxy Tab A 8.0 32 GB Wifi Android 9.0 Pie Tablet Black 2019"
          price={99.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/41UPtXbP4LL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
};
