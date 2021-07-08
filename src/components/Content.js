import React from "react";
import Chart from "./Chart";
import "./Content.css";

function Content() {
  return (
    <div className="content">
      <h1>Best Price To Trade</h1>
      <div className="price_info">
        <div className="mins">
          <h3>0.37%</h3>
          <p>5 Mins</p>
        </div>
        <div className="hours">
          <h3>1%</h3>
          <p>1 Hour</p>
        </div>
        <div className="main_price">
          <h2>₹25,32,222</h2>
          <p>Average BTC/INR net price including commission</p>
        </div>
        <div className="day">
          <h3>7.19%</h3>
          <p>1 Day</p>
        </div>
        <div className="week">
          <h3>18.83%</h3>
          <p>7 Days</p>
        </div>
      </div>
      <div className="ad">
        <img
          src="https://hodlinfo.com/static/media/cryptonews.54869ee3.png"
          alt=""
        />
      </div>
      <Chart />
      <div className="ad">
        <img
          className="ad2"
          src="https://hodlinfo.com/static/media/BannerFTXNews.d0cd974b.png"
          alt=""
        />
      </div>
      <div className="footer">
        <div className="left">
          <p>Copyright© 2019</p>
          <p>HodlInfo.com</p>
          <p>Developed By </p>
          <p className="special">QuadBTech</p>
        </div>
        <div className="right">
          <p>Support</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
