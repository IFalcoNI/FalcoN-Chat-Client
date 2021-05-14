import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Buy/Buy.css";
class Buy extends Component {
  render() {
    return (
      <div className="BuyContainer">
        <Link className="Arrow" to="/">&#8592;Home</Link>
        <div className="BuyItem">
          <header>
            <h1 id="headerText">Basic</h1>
          </header>
          <div className="Price">
            <h2>
              <p id="RedPrice">2</p>.99$
            </h2>
          </div>
          <ul>
            <li>Unlimited storage</li>
            <li>Save your messages</li>
            <li id="Closed">&#10006;</li>
            <li id="Closed">&#10006;</li>
            <li id="Closed">&#10006;</li>
          </ul>
          <input
            className="Subscribe"
            id="GreenSubscribe"
            type="Button"
            value="Subscribe"
          />
        </div>
        <div className="BuyItem">
          <header>
            <h1 id="headerText">Premium</h1>
          </header>
          <div className="Price">
            <h2>
              <p id="RedPrice">4</p>.99$
            </h2>
          </div>
          <ul>
            <li>Unlimited storage</li>
            <li>Save your messages</li>
            <li>Free audio messages</li>
            <li>Free animated stickers</li>
            <li id="Closed">&#10006;</li>
          </ul>
          <input
            className="Subscribe"
            id="RedSubscribe"
            type="Button"
            value="Subscribe"
          />
        </div>
        <div className="BuyItem">
          <header>
            <h1 id="headerText">Bussiness</h1>
          </header>
          <div className="Price">
            <h2>
              <p id="RedPrice">9</p>.99$
            </h2>
          </div>
          <ul>
            <li>Unlimited storage</li>
            <li>Save your messages</li>
            <li>Free audio messages</li>
            <li>Free animated stickers</li>
            <li>Unlimited rooms creating</li>
          </ul>
          <input
            className="Subscribe"
            id="OrangeSubscribe"
            type="Button"
            value="Subscribe"
          />
        </div>
      </div>
    );
  }
}

export default Buy;
