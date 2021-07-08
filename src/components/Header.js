import React from "react";
import "./Header.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
function Header() {
  const renderTime = ({ remainingTime }) => {
    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };
  return (
    <div className="header">
      <div className="logo">
        <h1>HODLINFO</h1>
        <span className="span1">Powered By</span>{" "}
        <span className="span2">Finstreet</span>
      </div>
      <div className="buttons">
        <select className="currency">
          <option value="INR">INR</option>
        </select>
        <select className="cryptocurrecy">
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="USDT">USDT</option>
          <option value="XRP">XRP</option>
          <option value="TRX">TRX</option>
          <option value="DASH">DASH</option>
          <option value="ZEC">ZEC</option>
          <option value="XEM">XEM</option>
          <option value="IOST">IOST</option>
          <option value="WIN">WIN</option>
          <option value="BTT">BTT</option>
          <option value="WRX">WRX</option>
        </select>
        <a
          href="https://wazirx.com/exchange/BTC-INR"
          rel="noreferrer"
          target="_blank"
        >
          <button>BUY BTC</button>
        </a>
      </div>

      <div className="header_right">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={[["#58becc", 0.33]]}
          onComplete={() => [true, 1000]}
          size="40"
          strokeWidth="4"
          rotation="counterclockwise"
        >
          {renderTime}
        </CountdownCircleTimer>

        <div className="connect-button">
          <img src="https://img.icons8.com/material-outlined/24/000000/telegram-app.png" />{" "}
          <p>Connect Telegram</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
