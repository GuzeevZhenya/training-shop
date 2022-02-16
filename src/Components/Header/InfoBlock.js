import React from "react";
import "./InfoBlock.css";

import { Socialicons } from "../SocialIcons/SocialIcons";
export default function InfoBlock() {
  return (
    <div class="info__block" data-test-id="header">
      <section className="info__block-section">
        <div className="info__block-about">
          <div>
            <span className="info__block--phone">+375 29 100 20 30</span>
          </div>
          <div>
            <span className="info__block--adress">
              Belarus, Gomel, Lange 17
            </span>
          </div>
          <div>
            <span className="info__block--time">All week 24/7</span>
          </div>
        </div>
        <Socialicons />
      </section>
    </div>
  );
}
