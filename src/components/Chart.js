import React from "react";
import "./Chart.css";
function Chart() {
  const data = [
    {
      id: 1,
      logo: "https://wazirx.com/static/media/wazirx-logo-rounded.9bff9f42.png",
      name: "WazirX",
      Last: "₹25,29,679",
      buy: "₹ 25,28,009 / ₹ 25,29,679",
      difference: "-0.16 %",
      savings: "▼ ₹ 4,145",
    },
    {
      id: 2,
      logo: "https://static.coinpaprika.com/exchanges/bitbns/logo.png?rev=10496015",
      name: "Bitbns",
      Last: "₹25,29,679",
      buy: "₹ 25,28,009 / ₹ 25,29,679",
      difference: "-0.26 %",
      savings: "▼ ₹ 4,045",
    },
    {
      id: 3,
      logo: "https://media.glassdoor.com/sqll/2004860/giottus-squarelogo-1520406537415.png",
      name: "Giotus",
      Last: "₹ 25,05,200",
      buy: "₹ 25,27,828 / ₹ 25,30,150",
      difference: "-0.16 %",
      savings: "▼ ₹ 4,145",
    },
    {
      id: 4,
      logo: "https://media-exp3.licdn.com/dms/image/C510BAQERNVYjBLJ0Rg/company-logo_200_200/0/1557897262693?e=2159024400&v=beta&t=GWnucrPBI-YdvGDbMocvEcQxD3C-tcB1LVSkhVA5Olc",
      name: "Colodax",
      Last: "₹ 25,83,138",
      buy: "₹ 25,28,009 / ₹ 25,29,679",
      difference: "0.95 % %",
      savings: "▲ ₹ 49,314",
    },
    {
      id: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/ZebPay_Logo.png",
      name: "Zebpay",
      Last: "₹25,29,679",
      buy: "₹ 25,28,009 / ₹ 25,29,679",
      difference: "-0.16 %",
      savings: "▼ ₹ 4,145",
    },
    {
      id: 6,
      logo: "https://www.hive101.info/wp-content/uploads/2020/08/CoinDCX-logo.png",
      name: "Coindcx",
      Last: "₹25,40,679",
      buy: "₹ 25,28,009 / ₹ 25,29,679",
      difference: "-0.06 %",
      savings: "▼ ₹ 4,145",
    },
  ];

  return (
    <div className="chart">
      <div className="heading">
        <p>#</p>
        <p>Platform</p>
        <p>Last Traded Price</p>
        <p>Buy / Sell Price</p>
        <p>Difference</p>
        <p>Savings</p>
      </div>
      {data.map((items) => {
        return (
          <div key={items.id} className="cards">
            <p>{items.id}</p>
            <div className="name">
              <img className="crypto_logo" src={items.logo} alt="" />
              <strong>{items.name}</strong>
            </div>
            <p>{items.Last}</p>
            <p>{items.buy}</p>
            <p>{items.difference}</p>
            <p>{items.savings}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Chart;
